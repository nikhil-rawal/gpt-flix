import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    alert("Successfully submitted details!");
    navigate("/signin");
  };
  return (
    <div className=" bg-black/50 flex flex-col">
      <h1>Sign Up</h1>
      <input placeholder="First name" />
      <input placeholder="Last name" />
      <input placeholder="Email" />
      <input placeholder="Mobile number" />
      <input placeholder="Choose a password" />
      <button onClick={handleSignUp}>Sign Up</button>
      <p>
        Already have an account? <Link to="/signin">Sign In here!</Link>
      </p>
    </div>
  );
};

export default SignUp;
