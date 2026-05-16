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
public class ItemController(ToDoListDbContext context) : ControllerBase
{
    [HttpGet]
    [EndpointSummary("Get paginated and filtered items for current user")]
    public async Task<ActionResult<PaginatedResult<Item>>> GetItems([FromQuery] QueryParameters queryParameters, [FromQuery] bool? isCompleted, [FromQuery] int? categoryId)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null) return Unauthorized();

        IQueryable<Item> query = context.Items
            .Where(i => i.UserId == userId && i.DeletedAt == null);

        // Filtering
        if (isCompleted.HasValue)
        {
            query = query.Where(i => i.IsCompleted == isCompleted.Value);
        }

        if (categoryId.HasValue)
        {
            query = query.Where(i => i.CategoryId == categoryId.Value);
        }

        if (!string.IsNullOrWhiteSpace(queryParameters.Search))
        {
            query = query.Where(i => i.Title.Contains(queryParameters.Search) || (i.Description != null && i.Description.Contains(queryParameters.Search)));
        }

        // Sorting
        if (!string.IsNullOrWhiteSpace(queryParameters.SortBy))
        {
            query = queryParameters.SortBy.ToLower() switch
            {
                "title" => queryParameters.IsDescending ? query.OrderByDescending(i => i.Title) : query.OrderBy(i => i.Title),
                "createdat" => queryParameters.IsDescending ? query.OrderByDescending(i => i.CreatedAt) : query.OrderBy(i => i.CreatedAt),
                _ => query.OrderByDescending(i => i.CreatedAt)
            };
        }
        else
        {
            query = query.OrderByDescending(i => i.CreatedAt);
        }

        int totalCount = await query.CountAsync();
        List<Item> items = await query
            .Skip((queryParameters.PageNumber - 1) * queryParameters.PageSize)
            .Take(queryParameters.PageSize)
            .ToListAsync();

        return Ok(new PaginatedResult<Item>
        {
            Items = items,
            TotalCount = totalCount,
            PageNumber = queryParameters.PageNumber,
            PageSize = queryParameters.PageSize
        });
    }

    [HttpGet("{id}")]
    [EndpointSummary("Get item by ID")]
    public async Task<ActionResult<Item>> GetItem(int id)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        Item? item = await context.Items.FirstOrDefaultAsync(i => i.Id == id && i.UserId == userId && i.DeletedAt == null);

        if (item == null) return NotFound();

        return Ok(item);
    }

    [HttpPost]
    [EndpointSummary("Create a new item")]
    public async Task<ActionResult<Item>> CreateItem(CreateItemDto dto)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null) return Unauthorized();

        Item item = new()
        {
            Title = dto.Title,
            Description = dto.Description,
            CategoryId = dto.CategoryId,
            UserId = userId,
            CreatedAt = DateTime.UtcNow,
            IsCompleted = false
        };

        context.Items.Add(item);
        await context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetItem), new { id = item.Id }, item);
    }

    [HttpPut("{id}")]
    [EndpointSummary("Update an item")]
    public async Task<IActionResult> UpdateItem(int id, UpdateItemDto dto)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        Item? item = await context.Items.FirstOrDefaultAsync(i => i.Id == id && i.UserId == userId && i.DeletedAt == null);

        if (item == null) return NotFound();

        if (dto.Title != null) item.Title = dto.Title;
        if (dto.Description != null) item.Description = dto.Description;
        if (dto.CategoryId.HasValue) item.CategoryId = dto.CategoryId.Value;
        if (dto.IsCompleted.HasValue) item.IsCompleted = dto.IsCompleted.Value;
        
        item.UpdatedAt = DateTime.UtcNow;

        await context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    [EndpointSummary("Soft delete an item")]
    public async Task<IActionResult> DeleteItem(int id)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        Item? item = await context.Items.FirstOrDefaultAsync(i => i.Id == id && i.UserId == userId && i.DeletedAt == null);

        if (item == null) return NotFound();

        item.DeletedAt = DateTime.UtcNow;
        await context.SaveChangesAsync();

        return NoContent();
    }
}
