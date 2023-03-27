import React, { useRef, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import "../product/style/login.css";
import Account from "../../shared/account";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const navigate = useNavigate();
  const navigateData = (e) =>{
    e.preventDefault();
    navigate({
      pathname:'/account',
      search : createSearchParams({
        Email : email,
      }).toString(),
    });
  };
  return (
    <div className="container" id="container">
      <div className="form-container log-in-container">
        <form action="#" className="login-form" onSubmit={navigateData}>
          <h1 className="login">Login</h1>
          <span className="anouther-account">or use your account</span>
          <input
            type="email"
            placeholder="Email"
            className="text-field"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="pass-field"
            required
             onChange={(event) => setPass(event.target.value)}
          />
          <a href="#">Forgot your password?</a>
          <button className="login-button">Log In</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
