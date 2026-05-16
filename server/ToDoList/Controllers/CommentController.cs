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
public class CommentController(ToDoListDbContext context) : ControllerBase
{
    [HttpGet]
    [AllowAnonymous]
    [EndpointSummary("Get paginated comments for a post")]
    public async Task<ActionResult<PaginatedResult<Comment>>> GetComments([FromQuery] QueryParameters q, [FromQuery] int postId)
    {
        IQueryable<Comment> query = context.Comments
            .Where(c => c.PostId == postId && c.DeletedAt == null)
            .OrderByDescending(c => c.CreatedAt);

        int totalCount = await query.CountAsync();
        List<Comment> comments = await query
            .Skip((q.PageNumber - 1) * q.PageSize)
            .Take(q.PageSize)
            .ToListAsync();

        return Ok(new PaginatedResult<Comment>
        {
            Items = comments,
            TotalCount = totalCount,
            PageNumber = q.PageNumber,
            PageSize = q.PageSize
        });
    }

    [HttpPost]
    [EndpointSummary("Create a new comment")]
    public async Task<ActionResult<Comment>> CreateComment(CreateCommentDto dto)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null) return Unauthorized();

        bool postExists = await context.Blogs.AnyAsync(b => b.Id == dto.PostId && b.DeletedAt == null);
        if (!postExists) return BadRequest("Post does not exist");

        Comment comment = new()
        {
            Content = dto.Content,
            PostId = dto.PostId,
            UserId = userId,
            CreatedAt = DateTime.UtcNow
        };

        context.Comments.Add(comment);
        await context.SaveChangesAsync();

        return Ok(comment);
    }

    [HttpPut("{id}")]
    [EndpointSummary("Update a comment")]
    public async Task<IActionResult> UpdateComment(int id, UpdateCommentDto dto)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        Comment? comment = await context.Comments.FirstOrDefaultAsync(c => c.Id == id && c.UserId == userId && c.DeletedAt == null);

        if (comment == null) return NotFound();

        comment.Content = dto.Content;
        comment.UpdatedAt = DateTime.UtcNow;

        await context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    [EndpointSummary("Soft delete a comment")]
    public async Task<IActionResult> DeleteComment(int id)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        Comment? comment = await context.Comments.FirstOrDefaultAsync(c => c.Id == id && c.UserId == userId && c.DeletedAt == null);

        if (comment == null) return NotFound();

        comment.DeletedAt = DateTime.UtcNow;
        await context.SaveChangesAsync();

        return NoContent();
    }
}
