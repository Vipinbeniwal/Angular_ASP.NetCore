using Employee_WebAPI_JWT_BackEnd.ServiceContact;
using Employee_WebAPI_JWT_BackEnd.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Employee_WebAPI_JWT_BackEnd.Controllers
{
  [Route("api/Accounts")]
  [ApiController]
  public class AccountsController : Controller
  {
    private readonly IUserService _userService;
    public AccountsController(IUserService userService)
    {
      _userService = userService;
    }
    [HttpPost]
    [Route("Authenticate")]
    public async Task<IActionResult> Authenticate([FromBody]LoginViewModel loginViewModel)
    {
      var user = await _userService.Authenticate(loginViewModel);
      if(user == null)      
        return BadRequest(new { message = "Worng UserName / Password" });
      return Ok(user);
      
    }
  }
}
