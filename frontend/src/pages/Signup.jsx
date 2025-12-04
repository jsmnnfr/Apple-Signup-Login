// just for testing CRUD operations, not final design
import React from "react";
import "../styles/Signup.css";
import appleLogo from "../assets/appleLogo.png";
import { Link } from "react-router-dom";


function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    // can plug in authentication logic here
    console.log("Signup form submitted");
  };

  return (
    <div className = "signup-container" >
      <form className = "signup-card" onSubmit={handleSubmit}>
        <img src={appleLogo} alt="Apple Logo" className="signup-logo" />
      <h2 className = "signup-title">Sign up</h2>

        <input type = "text" className="signup-input" placeholder="Username" required maxLength={20} minLength={5} />  {/* add user validation on the backend */}

        <input type = "password" className="signup-input" placeholder="Password" required maxLength={20} minLength={10} />

        <button type = "submit" className="signup-button"> Sign up </button>

        <p className="signup-link"> Already have an account? </p>

        <Link to="/" className="signup-link signup"> Log in </Link>
        
      </form>
    </div>
  );
}
export default Signup;