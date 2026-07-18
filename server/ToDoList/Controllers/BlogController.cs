using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoList.Data;
using ToDoList.Entities;
using ToDoList.Model;

namespace ToDoList.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class BlogController(ToDoListDbContext context) : ControllerBase
{
    [HttpGet]
    [AllowAnonymous]
    [EndpointSummary("Get paginated and filtered posts")]
    public async Task<ActionResult<PaginatedResult<Blog>>> GetBlogs([FromQuery] QueryParameters q, [FromQuery] string? authorId)
    {
        IQueryable<Blog> query = context.Blogs
            .Where(b => b.DeletedAt == null);

        if (!string.IsNullOrWhiteSpace(authorId))
        {
            query = query.Where(b => b.AuthorId == authorId);
        }

        if (!string.IsNullOrWhiteSpace(q.Search))
        {
            query = query.Where(b => b.Title != null && b.Title.Contains(q.Search) || b.Content.Contains(q.Search));
        }

        query = q.SortBy?.ToLower() switch
        {
            "title" => q.IsDescending ? query.OrderByDescending(b => b.Title) : query.OrderBy(b => b.Title),
            "createdat" => q.IsDescending ? query.OrderByDescending(b => b.CreatedAt) : query.OrderBy(b => b.CreatedAt),
            _ => query.OrderByDescending(b => b.CreatedAt)
        };

        int totalCount = await query.CountAsync();
        List<Blog> blogs = await query
            .Skip((q.PageNumber - 1) * q.PageSize)
            .Take(q.PageSize)
            .ToListAsync();

        return Ok(new PaginatedResult<Blog>
        {
            Items = blogs,
            TotalCount = totalCount,
            PageNumber = q.PageNumber,
            PageSize = q.PageSize
        });
    }

    [HttpGet("Feed")]
    [EndpointSummary("Get posts from users being followed")]
    public async Task<ActionResult<PaginatedResult<Blog>>> GetFeed([FromQuery] QueryParameters q)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null) return Unauthorized();

        List<string> followedUserIds = await context.Followers
            .Where(f => f.FollowerId == userId)
            .Select(f => f.TargetId)
            .ToListAsync();

        IQueryable<Blog> query = context.Blogs
            .Where(b => followedUserIds.Contains(b.AuthorId) && !b.DeletedAt.HasValue)
            .OrderByDescending(b => b.CreatedAt);

        int totalCount = await query.CountAsync();
        List<Blog> blogs = await query
            .Skip((q.PageNumber - 1) * q.PageSize)
            .Take(q.PageSize)
            .ToListAsync();

        return Ok(new PaginatedResult<Blog>
        {
            Items = blogs,
            TotalCount = totalCount,
            PageNumber = q.PageNumber,
            PageSize = q.PageSize
        });
    }

    [HttpGet("{id}")]
    [AllowAnonymous]
    [EndpointSummary("Get post by ID")]
    public async Task<ActionResult<Blog>> GetBlog(int id)
    {
        Blog? blog = await context.Blogs
            .Include(b => b.Comments.Where(c => !c.DeletedAt.HasValue))
            .FirstOrDefaultAsync(b => b.Id == id && !b.DeletedAt.HasValue);

        if (blog == null) return NotFound();

        return Ok(blog);
    }

    [HttpPost]
    [EndpointSummary("Create a new post")]
    public async Task<ActionResult<Blog>> CreateBlog(CreateBlogDto dto)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null) return Unauthorized();

        Blog blog = new()
        {
            Title = dto.Title,
            Content = dto.Content,
            AuthorId = userId,
            CreatedAt = DateTime.UtcNow
        };

        context.Blogs.Add(blog);
        await context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetBlog), new { id = blog.Id }, blog);
    }

    [HttpPut("{id}")]
    [EndpointSummary("Update a post")]
    public async Task<IActionResult> UpdateBlog(int id, UpdateBlogDto dto)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        Blog? blog = await context.Blogs.FirstOrDefaultAsync(b => b.Id == id && b.AuthorId == userId && !b.DeletedAt.HasValue);

        if (blog == null) return NotFound();

        if (dto.Title != null) blog.Title = dto.Title;
        if (dto.Content != null) blog.Content = dto.Content;
        
        blog.UpdatedAt = DateTime.UtcNow;

        await context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    [EndpointSummary("Soft delete a post")]
    public async Task<IActionResult> DeleteBlog(int id)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        Blog? blog = await context.Blogs.FirstOrDefaultAsync(b => b.Id == id && b.AuthorId == userId && b.DeletedAt == null);

        if (blog == null) return NotFound();

        blog.DeletedAt = DateTime.UtcNow;
        await context.SaveChangesAsync();

        return NoContent();
    }
}
