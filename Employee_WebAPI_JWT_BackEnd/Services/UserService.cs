using Employee_WebAPI_JWT_BackEnd.Identity;
using Employee_WebAPI_JWT_BackEnd.ServiceContact;
using Employee_WebAPI_JWT_BackEnd.Utility;
using Employee_WebAPI_JWT_BackEnd.ViewModels;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Employee_WebAPI_JWT_BackEnd.Services
{
  public class UserService : IUserService
  {
    public readonly ApplicationUserManager _applicationUserManager;
    private readonly ApplicationSignInManager _applicationSignInManager;
    private readonly AppSetting _appSetting;
    public UserService(ApplicationUserManager applicationUserManager, ApplicationSignInManager applicationSignInManager, IOptions<AppSetting>appSetting)
    {
      _applicationUserManager = applicationUserManager;
      _applicationSignInManager = applicationSignInManager;
      _appSetting = appSetting.Value;
    }
    public async Task<ApplicationUser> Authenticate(LoginViewModel loginViewModel)
    {
      var result = await _applicationSignInManager.PasswordSignInAsync(loginViewModel.UserName,loginViewModel.Password,false,false);
      if(result.Succeeded)
      {
        var applicationuser = await _applicationUserManager.FindByNameAsync(loginViewModel.UserName);
        applicationuser.PasswordHash = "";

        //JWT Authentication
        if (await _applicationUserManager.IsInRoleAsync(applicationuser, SD.Role_Admin))
          applicationuser.Role = SD.Role_Admin;
        if(await _applicationUserManager.IsInRoleAsync(applicationuser,SD.Role_Employee))
          applicationuser.Role = SD.Role_Employee;
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_appSetting.secret);
        var tokenDescriptor = new SecurityTokenDescriptor()
        {
          Subject = new System.Security.Claims.ClaimsIdentity(new Claim[]
          {
            new Claim(ClaimTypes.Name,applicationuser.Id),
            new Claim(ClaimTypes.Email,applicationuser.Email),
            new Claim(ClaimTypes.Role,applicationuser.Role)
          }),
          Expires = DateTime.UtcNow.AddDays(30),
          SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
          SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        applicationuser.Token = tokenHandler.WriteToken(token);
        return applicationuser;
      }
      else
      {
        return null;
      }
    }
  }
}
