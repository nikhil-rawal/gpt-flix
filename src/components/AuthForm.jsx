import React, { useState, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { checkValidate } from "../utils/validate";
import ErrorMessageComponent from "./ErrorMessageComponent";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});
  //   const navigateTo = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleBtnClick = () => {
    const validationResult = checkValidate(
      emailRef.current.value,
      passwordRef.current.value
    );
    setErrorMessage(validationResult || {});
    console.log(errorMessage);
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
          ref={emailRef}
          type="text"
          placeholder="Email"
          className={`w-8/12 h-14 rounded-md bg-black/10 border px-3 my-4 focus:border-white ${
            errorMessage.emailError
              ? "focus:border-[#d22f27] border-[#d22f27] border-2"
              : "focus:border-white border-[#60605f]"
          } focus:border-2 outline-none focus:placeholder:text-xs focus:placeholder:pl-1 placeholder:text-lg`}
        />
        {errorMessage.emailError && (
          <ErrorMessageComponent message={errorMessage.emailError} />
        )}

        <input
          ref={passwordRef}
          type="password"
          placeholder={isSignIn ? "Password" : "Choose a password"}
          className={`w-8/12 h-14 rounded-md bg-black/10 border px-3 my-4 focus:border-white ${
            errorMessage.passwordError
              ? "focus:border-[#d22f27] border-[#d22f27] border-2"
              : "focus:border-white border-[#60605f]"
          } focus:border-2 outline-none focus:placeholder:text-xs focus:placeholder:pl-1 placeholder:text-lg`}
        />
        {errorMessage.passwordError && (
          <ErrorMessageComponent message={errorMessage.passwordError} />
        )}

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
