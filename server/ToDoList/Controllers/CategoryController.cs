using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using ToDoList.Data;
using ToDoList.Entities;
using ToDoList.Model;

namespace ToDoList.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class CategoryController(ToDoListDbContext context) : ControllerBase
{
   [HttpGet("{id}")]
   public async Task<IActionResult> GetCategory(int id)
   {
      string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
      Category? result = await context.Categories.FirstOrDefaultAsync(c => c.Id == id && c.UserId == userId && !c.DeletedAt.HasValue);
      if (result == null) return NotFound();
      return Ok(result);
   }
   
   [HttpGet]
   [EndpointSummary("Get paginated and filtered categories for current user")]
   public async Task<ActionResult<PaginatedResult<Category>>> GetCategories([FromQuery] QueryParameters queryParameters)
   {
      string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
      if (userId == null) return Unauthorized();

      IQueryable<Category> query = context.Categories
          .Where(c => c.UserId == userId && !c.DeletedAt.HasValue);

      if (!string.IsNullOrWhiteSpace(queryParameters.Search))
      {
         query = query.Where(c => c.Name.Contains(queryParameters.Search));
      }

      query = queryParameters.SortBy?.ToLower() switch
      {
         "name" => queryParameters.IsDescending ? query.OrderByDescending(c => c.Name) : query.OrderBy(c => c.Name),
         "createdat" => queryParameters.IsDescending ? query.OrderByDescending(c => c.CreatedAt) : query.OrderBy(c => c.CreatedAt),
         _ => query.OrderByDescending(c => c.CreatedAt)
      };

      int totalCount = await query.CountAsync();
      List<Category> categories = await query
          .Skip((queryParameters.PageNumber - 1) * queryParameters.PageSize)
          .Take(queryParameters.PageSize)
          .ToListAsync();

      return Ok(new PaginatedResult<Category>
      {
         Items = categories,
         TotalCount = totalCount,
         PageNumber = queryParameters.PageNumber,
         PageSize = queryParameters.PageSize
      });   
   }
   
   

   [HttpPost]
   [EndpointSummary("Create New Category")]
   public async Task<IActionResult> CreateCategory(Category category)
   {
      string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
      if (userId == null) return Unauthorized();

      category.UserId = userId;
      category.CreatedAt = DateTime.Now;
      
      context.Categories.Add(category);
      await context.SaveChangesAsync();
      
      return Ok(category);
   }
}
