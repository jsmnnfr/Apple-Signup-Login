// just for testing CRUD operations, not final design
import React from "react";
import "../styles/Login.css";
import appleLogo from "../assets/appleLogo.png";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // can plug in authentication logic here
    console.log("Login form submitted");
  };

  return (
    <div className = "login-container" >
      <form className = "login-card" onSubmit={handleSubmit}>
        <img src={appleLogo} alt="Apple Logo" className="login-logo" />
      <h2 className = "login-title">Login</h2>

        <input type = "text" className="login-input" placeholder="Username" required maxLength={20} minLength={5} />  {/* add user validation on the backend */}

        <input type = "password" className="login-input" placeholder="Password" required maxLength={20} minLength={10} />

        <Link to="/forgot-password" className="login-forgot-password"> Forgot Password? </Link>

        <button type = "login" className="login-button"> Log in </button>

        <p className="login-signup-link"> Don't have an account? </p>

        <Link to="/signup" className="login-signup-link signup"> Sign up </Link>

      </form>
    </div>
  );
}
export default Login;