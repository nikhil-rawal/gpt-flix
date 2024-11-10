import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigateTo = useNavigate();
  //   const firstName = useRef(null);
  //   const lastName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleBtnClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
  };

  return (
    <div className="bg-black/60 text-white  p-4 rounded-md">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="text-white text-4xl text-left my-4 font-semibold w-8/12">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <>
            <input
              //   ref={firstName}
              type="text"
              className="w-8/12 h-14 rounded-md bg-black/10 border-[#60605f] border px-3 my-4 focus:border-white focus:border-2 outline-none focus:placeholder:text-xs focus:placeholder:pl-1 placeholder:text-lg"
              placeholder="First name"
            />
            <input
              //   ref={lastName}
              type="text"
              className="w-8/12 h-14 rounded-md bg-black/10 border-[#60605f] border px-3 my-4 focus:border-white focus:border-2 outline-none focus:placeholder:text-xs focus:placeholder:pl-1 placeholder:text-lg"
              placeholder="Last name"
            />
          </>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="w-8/12 h-14 rounded-md bg-black/10 border-[#60605f] border px-3 my-4 focus:border-white focus:border-2 outline-none focus:placeholder:text-xs focus:placeholder:pl-1 placeholder:text-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder={isSignIn ? "Password" : "Choose a password"}
          className="w-8/12 h-14 rounded-md bg-black/10 border-[#60605f] border px-3 my-4 focus:border-white focus:border-2 outline-none focus:placeholder:text-xs focus:placeholder:pl-1 placeholder:text-lg"
        />

        <button
          onClick={handleBtnClick}
          type="submit"
          className="bg-[#d22f27] text-white my-4 w-8/12 h-10 rounded-md text-xl hover:contrast-125"
        >
          {isSignIn ? "Sign In" : "Sign Up"}{" "}
        </button>

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
