import React from "react";
import { Link } from "react-router-dom";
import mark from "../images/mark.png";
import "../Styles/login.css";

const Login = () => {
  return (
    <div className="login">
      <h1>Welcome Back</h1>

      <input type="text" placeholder="Username" />

      <input type="text" placeholder="Password" />

      <div className="pass-wrd">
        <div>
          <img src={mark} alt="" />
          <p>Remember Password </p>
        </div>
        <Link>Forgot Password</Link>
      </div>
      <div className="lbtn">
        <Link to='/verifym'>Log In</Link>
      </div>
      <div className="d-sm-flex justify-content-center gap-5 mt-3">
        <p>New User?</p>
        <Link className="click" to="/getstarted">
          Click Here
        </Link>
      </div>
    </div>
  );
};

export default Login;
