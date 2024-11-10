import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigateTo = useNavigate();

  const handleSignUp = (e) => {
    alert("Successfully submitted details! Now Sign In please");
    e.preventDefault();
    toggleIsSignIn();
  };

  const handleSignIn = () => {
    alert("Congrats. Successfully signed-in");
    navigateTo("/dashboard");
  };

  const toggleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="bg-black/60 text-white  p-4 rounded-md">
      <form className="flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl text-left my-4 font-semibold w-8/12">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <>
            <input
              type="text"
              className="w-8/12 h-14 rounded-md bg-black/10 border-[#60605f] border px-3 my-4 focus:border-white focus:border-2 outline-none focus:placeholder:text-xs focus:placeholder:pl-1 placeholder:text-lg"
              placeholder="First name"
            />
            <input
              type="text"
              className="w-8/12 h-14 rounded-md bg-black/10 border-[#60605f] border px-3 my-4 focus:border-white focus:border-2 outline-none focus:placeholder:text-xs focus:placeholder:pl-1 placeholder:text-lg"
              placeholder="Last name"
            />
          </>
        )}
        <input
          type="text"
          placeholder="Email"
          className="w-8/12 h-14 rounded-md bg-black/10 border-[#60605f] border px-3 my-4 focus:border-white focus:border-2 outline-none focus:placeholder:text-xs focus:placeholder:pl-1 placeholder:text-lg"
        />
        <input
          type="password"
          placeholder={isSignIn ? "Password" : "Choose a password"}
          className="w-8/12 h-14 rounded-md bg-black/10 border-[#60605f] border px-3 my-4 focus:border-white focus:border-2 outline-none focus:placeholder:text-xs focus:placeholder:pl-1 placeholder:text-lg"
        />

        <button
          onClick={isSignIn ? handleSignIn : handleSignUp}
          type="submit"
          className="bg-[#d22f27] text-white my-4 w-8/12 h-10 rounded-md text-xl hover:contrast-125"
        >
          {isSignIn ? "Sign In" : "Sign Up"}{" "}
        </button>

        {/* <button
          // onClick={resetFields}
          type="reset"
          className="bg-[#d22f27] text-white my-4 w-6/12 h-8 rounded-md text-xl hover:contrast-125"
        >
          Reset
        </button> */}

        {/* <p className="my-4">
          Don't have an account?{" "}
          <Link to="/signup">
            <strong>Sign Up here!</strong>
          </Link>
        </p> */}

        <p className="my-4">
          {isSignIn ? "Don't have an account?" : "Already Registered?"}{" "}
          <strong onClick={toggleIsSignIn} className="cursor-pointer">
            {isSignIn ? "Sign Up here!" : "Sign In please!"}
          </strong>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
