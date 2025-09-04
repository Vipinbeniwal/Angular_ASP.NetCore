using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Employee_WebAPI_JWT_BackEnd.Identity
{
  public class ApplicationUserStore:UserStore<ApplicationUser>
  {
    public ApplicationUserStore(ApplicationDbContext context) : base(context)
    {

    }
  }
}
