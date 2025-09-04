using Employee_WebAPI_JWT_BackEnd.Identity;
using Employee_WebAPI_JWT_BackEnd.ViewModels;
using System.Threading.Tasks;

namespace Employee_WebAPI_JWT_BackEnd.ServiceContact
{
  public interface IUserService
  {
    Task<ApplicationUser> Authenticate(LoginViewModel loginViewModel);
  }
}
