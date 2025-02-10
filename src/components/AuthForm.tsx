"use client";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

export default function AuthForm() {
  //email and password states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //email and password ERROR states
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //email and password REGEX patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  //validate email using Regex
  const checkEmailRegex = (email: string) => {
    if (!emailRegex.test(email)) return "Please enter a valid email!";
    return "";
  };

  //validate password using Regex
  const checkPasswordRegex = (password: string) => {
    if (!passwordRegex.test(password)) return "Please enter a valid password!";
    return "";
  };

  //form submission
  const handleAuthFormSubmit = (e: React.FormEvent) => {
    //prevent default form submission and reset values before submission
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    //input validations
    const isEmailValid = checkEmailRegex(email);
    const isPasswordValid = checkPasswordRegex(password);

    //if there is an error, set the error message
    if (isEmailValid) {
      setEmailError(isEmailValid);
    }
    if (isPasswordValid) {
      setPasswordError(isPasswordValid);
    }

    //if no error found, console.log(email,password)
    if (!isEmailValid && !isPasswordValid) {
      console.log(`email: ${email}, password: ${password}`);
    }
  };

  return (
    <div className="flex flex-col justify-center rounded-sm  bg-opacity-60 bg-black m-4 p-10">
      <header>
        <h1 className="text-white text-4xl font-bold mb-[24px]">Sign In</h1>
      </header>
      <form
        className="flex flex-col items-center justify-center w-full h-full"
        onSubmit={handleAuthFormSubmit}
      >
        <div className="flex flex-col mt-[10px] mb-[5px] ">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailError(checkEmailRegex(email))}
            className={`w-80 h-14 bg-transparent border-2 py-2 px-4 transition-all ease-in-out focus:placeholder:text-white focus:placeholder:text-[13px] focus:placeholder: rounded-md text-white outline-none ring-0 active:outline-none active:ring-0 border-[#606060] focus:border-white ${
              emailError && "border-[#e50914]"
            }`}
          />
          <p
            className={`text-netflixRed flex items-center text-md my-0 max-w-80`}
          >
            {emailError ? (
              <>
                <RxCrossCircled className="font-bold" /> &nbsp;{emailError}{" "}
              </>
            ) : (
              <> &nbsp;</>
            )}
          </p>
        </div>

        <div className="flex flex-col mt-[5px] mb-[10px] ">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordError(checkPasswordRegex(password))}
            className={`w-80 h-14 bg-transparent border-2 py-2 px-4 placeholder:text-[#bababa] rounded-md text-white outline-none ring-0 active:outline-none active:ring-0 border-[#606060] focus:border-white ${
              passwordError && "border-[#e50914] focus:border-[#e50914]"
            }`}
          />
          <p
            className={`text-netflixRed flex items-center text-md my-0 max-w-80`}
          >
            {passwordError ? (
              <>
                <RxCrossCircled className="font-bold" /> &nbsp;{passwordError}{" "}
              </>
            ) : (
              <> &nbsp;</>
            )}
          </p>
        </div>
        <button
          type="submit"
          className="mt-[5px] mb-[10px] bg-netflixRed text-white rounded-md m-2 w-80 h-10 font-semibold"
        >
          Sign In
        </button>
      </form>
      <footer>
        <p className="my-[12px] text-white text-center">
          <button className="text-white">Forgot Password?</button>
        </p>
        <p className="mt-[24px] mx-2 text-[#b4b4b4]">
          New to GPT-Flix?&nbsp;&nbsp;
          <button className="font-semibold text-white">Sign Up Now!</button>
        </p>
      </footer>
    </div>
  );
}
