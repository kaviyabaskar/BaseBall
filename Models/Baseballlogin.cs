using System;
using System.Collections.Generic;

namespace BaseBallApi.Models;

public partial class Baseballlogin
{
    
    public int Id { get; set; }

    public string Email { get; set; } = null!;

    public string? Username { get; set; }

    public string? Mobilenumber { get; set; }

    public string? Password { get; set; }

    public string? Confirmpassword { get; set; }
}
