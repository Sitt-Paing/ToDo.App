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
public class FollowerController(ToDoListDbContext context) : ControllerBase
{
    [HttpPost("Follow/{targetId}")]
    [EndpointSummary("Follow a user")]
    public async Task<IActionResult> Follow(string targetId)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null) return Unauthorized();

        if (userId == targetId) return BadRequest("You cannot follow yourself");

        bool targetExists = await context.Users.AnyAsync(u => u.Id == targetId);
        if (!targetExists) return NotFound("Target user not found");

        bool alreadyFollowing = await context.Followers.AnyAsync(f => f.FollowerId == userId && f.TargetId == targetId);
        if (alreadyFollowing) return BadRequest("Already following this user");

        Follower follower = new()
        {
            FollowerId = userId,
            TargetId = targetId,
            FollowedAt = DateTime.UtcNow
        };

        context.Followers.Add(follower);
        await context.SaveChangesAsync();

        return Ok(new { message = "Successfully followed user" });
    }

    [HttpPost("Unfollow/{targetId}")]
    [EndpointSummary("Unfollow a user")]
    public async Task<IActionResult> Unfollow(string targetId)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null) return Unauthorized();

        Follower? follower = await context.Followers.FirstOrDefaultAsync(f => f.FollowerId == userId && f.TargetId == targetId);
        if (follower == null) return BadRequest("Not following this user");

        context.Followers.Remove(follower);
        await context.SaveChangesAsync();

        return Ok(new { message = "Successfully unfollowed user" });
    }

    [HttpGet("Following")]
    [EndpointSummary("Get users the current user is following")]
    public async Task<ActionResult<PaginatedResult<object>>> GetFollowing([FromQuery] QueryParameters queryParameters)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null) return Unauthorized();

        IQueryable<Follower> query = context.Followers
            .Where(f => f.FollowerId == userId)
            .Include(f => f.Target)
            .OrderByDescending(f => f.FollowedAt);

        int totalCount = await query.CountAsync();
        var following = await query
            .Skip((queryParameters.PageNumber - 1) * queryParameters.PageSize)
            .Take(queryParameters.PageSize)
            .Select(f => new
            {
                f.TargetId,
                f.Target.UserName,
                f.FollowedAt
            })
            .ToListAsync();

        return Ok(new PaginatedResult<object>
        {
            Items = following.Cast<object>().ToList(),
            TotalCount = totalCount,
            PageNumber = queryParameters.PageNumber,
            PageSize = queryParameters.PageSize
        });
    }

    [HttpGet("Followers")]
    [EndpointSummary("Get users following the current user")]
    public async Task<ActionResult<PaginatedResult<object>>> GetFollowers([FromQuery] QueryParameters queryParameters)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null) return Unauthorized();

        IQueryable<Follower> query = context.Followers
            .Where(f => f.TargetId == userId)
            .Include(f => f.FollowerNavigation)
            .OrderByDescending(f => f.FollowedAt);

        int totalCount = await query.CountAsync();
        var followers = await query
            .Skip((queryParameters.PageNumber - 1) * queryParameters.PageSize)
            .Take(queryParameters.PageSize)
            .Select(f => new
            {
                f.FollowerId,
                UserName = f.FollowerNavigation.UserName,
                f.FollowedAt
            })
            .ToListAsync();

        return Ok(new PaginatedResult<object>
        {
            Items = followers.Cast<object>().ToList(),
            TotalCount = totalCount,
            PageNumber = queryParameters.PageNumber,
            PageSize = queryParameters.PageSize
        });
    }
}
