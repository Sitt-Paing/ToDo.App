using Microsoft.AspNetCore.Identity;
using ToDoList.Model;

namespace ToDoList.Interfaces;

public interface IAccountService
{
    Task<IdentityResult> RegisterAsync(RegisterDto dto);
    Task<(string AccessToken, string RefreshToken, DateTime Expiry)?> LoginAsync(LoginDto dto);
    Task<string?> GenerateResetTokenAsync(string email);
    Task<IdentityResult> ResetPasswordAsync(ResetPasswordDto dto);
    Task<IdentityResult> ChangePasswordAsync(string userId, ChangePasswordDto dto);
    Task<(string AccessToken, string RefreshToken, DateTime Expiry)?> RefreshTokenAsync(TokenDto dto);
    Task LogoutAsync(string userId);
}
