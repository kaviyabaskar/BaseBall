using Microsoft.AspNetCore.Mvc;
using BaseBallApi.Models;
namespace BaseBallApi.Controllers;
[ApiController]
[Route("api/baseball")]
public class BaseBallController : ControllerBase
{
    private readonly BaseBallContext DB;
    public BaseBallController(BaseBallContext db)
    {
        this.DB = db;
    }
    [HttpPost("InsertBaseBall")]
    public object InsertBaseBall(Register regObj)
    {
        try{
            Baseballlogin el = new Baseballlogin();
            if (el.Id==0)
            {
                el.Email=regObj.Email;
                el.Username=regObj.Username;
                el.Mobilenumber=regObj.Mobilenumber;
                el.Password=regObj.Password;
                el.Confirmpassword=regObj.Confirmpassword;
                //Add
                DB.Baseballlogins.Add(el);
                //save it in the database
                DB.SaveChanges();
                return new Response{Status="Success",Message="BaseBall Added!"};

            }
        }
        catch(System.Exception)
        {
            throw;
        }
        return new Response{Status="Error", Message="Invalid Information"};
    }
      [HttpGet("GetAllBaseBall")]
      public IQueryable<Baseballlogin>GetAllBaseBall()
      {
        try
        {
            return DB.Baseballlogins;
        }
        catch(System.Exception)
        {
            throw;
        }

      }
      [HttpGet("GetUserDetailsById/{uid}")]
    public IActionResult GetByID(int uid)
    {
            var users =this.DB.Baseballlogins.FirstOrDefault(o=>o.Id==uid);
            return Ok(users);
    }

     [HttpDelete("DeleteUserDetails/{uid}")]
    public IActionResult DeleteUser(int uid)
    {
        string message = "";
            var user = this.DB.Baseballlogins.Find(uid);
            if (user == null)
            {
                return NotFound();
            }

            this.DB.Baseballlogins.Remove(user);
            int result = this.DB.SaveChanges();
            if (result > 0)
            {
                message = "User has been sussfully deleted";
            }
            else
            {
                message = "failed";
            }

            return Ok(message);
        }

  //To check the login credentials are valid
     [HttpPost("Login")]

     public IActionResult LoginCheck(Login logObj)
     {
        var logindetail = DB.Baseballlogins.Where(x=>x.Email.Equals(logObj.Email)&& x.Password.Equals(logObj.Password)).FirstOrDefault();
        if(logindetail ==null)
        {
            return Ok(new Response{Status="Not Valid",Message="Invalid Credentials!"});
        }
        else{
            return Ok(new Response{Status="Success",Message="Welcome User!"});
        }
     }
}