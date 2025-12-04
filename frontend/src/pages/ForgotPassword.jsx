// src/pages/ForgotPassword.js
import React from "react";
import "../styles/ForgotPassword.css"; // reuse CSS
import appleLogo from "../assets/appleLogo.png";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Forgot Password form submitted");
    alert("Reset link sent (test only)");
  };

  return (
    <div
      className="login-container"
    >
      <form className="login-card" onSubmit={handleSubmit}>
         <img src={appleLogo} alt="Apple Logo" className="forgot-logo" />
        <h2 className="login-title">Forgot Password</h2>

        <input type="email" className="login-input" placeholder="Enter your email" required />
        
        <p className="login-instruction"> We will send you a link to reset your password. </p>

        <button type="submit" className="login-button"> Send Reset Link </button>

        <p className="login-signup-link">Remembered your password? </p>

        <Link to="/" className="signup-link signup"> Log in </Link>

      </form>
    </div>
  );
}

export default ForgotPassword;
