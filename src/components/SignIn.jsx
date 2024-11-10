import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    alert("Congrats. Successfully signed-in");
    navigate("/dashboard");
  };

  return (
    <div className="bg-black/60 text-white flex flex-col justify-center items-center p-4 rounded-md">
      <h1 className="text-white text-4xl text-left my-4 font-semibold w-8/12">
        Sign In
      </h1>

      <input
        placeholder="Email or mobile number"
        className="w-8/12 h-14 rounded-md bg-black/10 border-[#60605f] border px-3 my-4 focus:border-white focus:border-2 outline-none focus:placeholder:text-xs focus:placeholder:pl-1 placeholder:text-lg"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-8/12 h-14 rounded-md bg-black/10 border-[#60605f] border px-3 my-4 focus:border-white focus:border-2 outline-none focus:placeholder:text-xs focus:placeholder:pl-1 placeholder:text-lg"
      />

      <button
        onClick={handleSignIn}
        className="bg-[#d22f27] text-white my-4 w-8/12 h-10 rounded-md text-xl"
      >
        Sign In
      </button>

      <p className="my-4">
        Don't have an account?{" "}
        <Link to="/signup">
          <strong>Sign Up here!</strong>
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
