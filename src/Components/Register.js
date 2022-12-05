import "./Register.css";
import React from "react";
import "./Login"

function Register()
{
    return(
    <>
    <h1>Registration forms</h1>
    <div className="main">
    <form method="post">
        <input type="text" placeholder="Enter Email"/><br/> <br/>

        <input type="text" placeholder="Enter UserName"/><br/> <br/>

        <input type="text"placeholder="Enter MobileNumber"/><br/> <br/>

        <input type ="text" placeholder=" Enter Password"/><br/> <br/>

        <input type="text" placeholder=" Enter ConfirmPassword"/><br/> <br/>
    <br/>
        <button type="submit">SUBMIT</button><br/><br/> <button>Already a user signup? 
            <a className="anchor" href='./Login.js'>Login</a></button>
        </form>
    </div>
</>);
}
export default Register;







