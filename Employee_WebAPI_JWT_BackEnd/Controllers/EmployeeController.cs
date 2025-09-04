using Employee_WebAPI_JWT_BackEnd.Identity;
using Employee_WebAPI_JWT_BackEnd.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Employee_WebAPI_JWT_BackEnd.Controllers
{
  [Route("api/Employee")]
  [ApiController]
  [Authorize]
  public class EmployeeController : Controller
  {
    private readonly ApplicationDbContext _Context;
    public EmployeeController(ApplicationDbContext context)
    {
      _Context = context;
    }
    [HttpGet]
    public IActionResult GetEmployee()
    {
      return Ok(_Context.Employees.ToList());
    }
    [HttpPost]
    public IActionResult SaveEmployee([FromBody]Employee employee)
    {
      if (employee == null) return NotFound();
      if(!ModelState.IsValid) return BadRequest(ModelState);
      _Context.Employees.Add(employee);
      _Context.SaveChanges();
      return Ok();
    }
    [HttpPut]
    public IActionResult UpdateEmployee([FromBody]Employee employee)
    {
      if (employee == null) return NotFound();
      if (!ModelState.IsValid) return BadRequest(ModelState);
      _Context.Employees.Update(employee);
      _Context.SaveChanges();
      return Ok();
    }
    [HttpDelete("{id:int}")]
    public IActionResult DeleteEmployee(int id)
    {
      var db = _Context.Employees.Find(id);
      if(db == null) return NotFound();
      _Context.Employees.Remove(db);
      _Context.SaveChanges();
      return Ok();
    }
  }
}
