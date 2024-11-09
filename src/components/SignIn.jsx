import React from "react";
// import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  //   const navigate = useNavigate();

  const handleSignIn = () => {
    alert("Congrats. Successfully signed-in");
    // navigate("/dashboard");
  };

  return (
    <div className="bg-black/50 text-white flex flex-col justify-center items-center p-8">
      <h1 className="text-white text-4xl text-left">Sign In</h1>
      <br />
      <input placeholder="Email or mobile number" className="w-8/12" />
      <br />

      <input placeholder="Password" className="w-8/12" />
      <br />

      <button onClick={handleSignIn} className="bg-[#d22f27] text-white">
        Sign In
      </button>
      <br />

      <p>
        {/* Don't have an account? <Link to="/signup">Sign Up here!</Link> */}
      </p>
    </div>
  );
};

export default SignIn;
