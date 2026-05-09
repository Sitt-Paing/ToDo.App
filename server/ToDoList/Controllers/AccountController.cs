using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Interfaces;
using ToDoList.Model;

namespace ToDoList.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AccountController(
    IAccountService accountService)
    : ControllerBase
{
    [HttpGet("generate-reset-token")]
    public async Task<IActionResult> GenerateResetToken(string email)
    {
        string? token = await accountService.GenerateResetTokenAsync(email);
        if (token == null)
        {
            return BadRequest(new { message = "User not found" });
        }
        
        return Ok(new { Token = token });
    }

    [HttpPost("Register")]
    [AllowAnonymous]
    public async Task<IActionResult> RegisterAsync(RegisterDto dto)
    {
        IdentityResult result = await accountService.RegisterAsync(dto);

        if (result.Succeeded) return Ok("Successfully Registered");
        if (result.Errors.Any(e => e.Description == "User Already Exists"))
        {
            return Conflict("User Already Exists");
        }
        return BadRequest(result.Errors);

    }

    [HttpPost("Login")]
    [AllowAnonymous]
    public async Task<IActionResult> LoginAsync(LoginDto dto)
    {
        (string AccessToken, string RefreshToken, DateTime Expiry)? result = await accountService.LoginAsync(dto);
        if (result == null)
        {
            return Unauthorized("Login Failed");
        }

        return Ok(new 
        { 
            AccessToken = result.Value.AccessToken, 
            RefreshToken = result.Value.RefreshToken, 
            RefreshTokenExpiry = result.Value.Expiry 
        });
    }

    [HttpPost("reset-password")]
    public async Task<IActionResult> ResetPassword(ResetPasswordDto dto)
    {
        IdentityResult result = await accountService.ResetPasswordAsync(dto);
        if (!result.Succeeded)
        {
            if (result.Errors.Any(e => e.Description == "User Not Found"))
            {
                return BadRequest(new { message = "User Not Found" });
            }
            return BadRequest(new { message = "Failed to reset password", errors = result.Errors });
        }
        
        return Ok(new { message = "Password reset successfully!" });
    }
    
    [HttpPost("ChangePassword")]
    [Authorize]
    public async Task<IActionResult> ChangePassword(ChangePasswordDto dto)
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null) return Unauthorized();

        IdentityResult result = await accountService.ChangePasswordAsync(userId, dto);

        if (!result.Succeeded)
        {
            if (result.Errors.Any(e => e.Description == "User not found"))
            {
                return BadRequest("User not found");
            }
            return BadRequest(new { message = "Password change failed", errors = result.Errors });
        }

        return Ok(new { message = "Password changed successfully" });
    }

    [HttpPost("RefreshToken")]
    [AllowAnonymous]
    public async Task<IActionResult> Refresh(TokenDto dto)
    {
        (string AccessToken, string RefreshToken, DateTime Expiry)? result = await accountService.RefreshTokenAsync(dto);
        if (result == null)
        {
            return BadRequest("Invalid client request");
        }

        return Ok(new
        {
            AccessToken = result.Value.AccessToken,
            RefreshToken = result.Value.RefreshToken,
            RefreshTokenExpiry = result.Value.Expiry
        });
    }

    [HttpPost("Logout")]
    [Authorize]
    public async Task<IActionResult> Logout()
    {
        string? userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null) return Unauthorized();
        
        await accountService.LogoutAsync(userId);

        return Ok(new { message = "Logged out successfully!" });
    }
}
