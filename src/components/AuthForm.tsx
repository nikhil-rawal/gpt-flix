"use client";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

export default function AuthForm() {
  //check isSignin form state
  const [isSignin, setIsSignin] = useState(true);

  //fullName, email, password states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //fullName, email, password, confirmPassword ERROR states
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  //email and password REGEX patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  //validate fullName, email, password,confirmPassword using Regex
  const checkFullNameError = (fullName: string) => {
    return fullName.length < 2 ? "Please enter a valid name !" : "";
  };
  const checkEmailRegex = (email: string) => {
    if (!emailRegex.test(email)) return "Please enter a valid email !";
    return "";
  };
  const checkPasswordRegex = (password: string) => {
    if (!passwordRegex.test(password)) return "Please enter a valid password !";
    return "";
  };
  const checkConfirmPasswordError = (confirmPassword: string) => {
    if (!confirmPassword) return "Please confirm your password!";
    if (confirmPassword !== password) return "Passwords do not match !";
    return "";
  };

  //form submission
  const handleAuthFormSubmit = (e: React.FormEvent) => {
    //prevent default form submission and reset values before submission
    e.preventDefault();

    //input validations
    const isFullNameValid = checkFullNameError(fullName);
    const isEmailValid = checkEmailRegex(email);
    const isPasswordValid = checkPasswordRegex(password);
    const isConfirmPasswordValid = checkConfirmPasswordError(confirmPassword);

    //if there is an error, set the error message
    if (isFullNameValid) {
      setFullNameError(isFullNameValid);
    }
    if (isEmailValid) {
      setEmailError(isEmailValid);
    }
    if (isPasswordValid) {
      setPasswordError(isPasswordValid);
    }
    if (isConfirmPasswordValid) {
      setConfirmPasswordError(isConfirmPasswordValid);
    }

    //if no error found, console.log(email,password)
    if (!isEmailValid && !isPasswordValid) {
      console.log(`email: ${email}, password: ${password}`);
    }
  };

  return (
    <div className="flex flex-col justify-center rounded-sm  bg-opacity-60 bg-black m-4 p-10">
      {/* header */}
      <header>
        <h1 className="text-white text-4xl font-bold mb-[24px]">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
      </header>
      <form
        className="flex flex-col items-center justify-center w-full h-full"
        onSubmit={handleAuthFormSubmit}
      >
        {/* if signUp form, show fullName input */}
        {!isSignin && (
          <div className="flex flex-col my-[6px]">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onBlur={() => setFullNameError(checkFullNameError(fullName))}
              className={`w-80 h-14 bg-transparent border-2 py-2 px-4 transition-all ease-in-out focus:placeholder:text-white focus:placeholder:text-[13px] focus:placeholder: rounded-md text-white outline-none ring-0 active:outline-none active:ring-0 border-[#606060] focus:border-white ${
                fullNameError && "border-[#e50914]"
              }`}
            />
            {fullNameError ? (
              <p
                className={`text-netflixRed flex items-center text-md my-0 max-w-80 `}
              >
                <RxCrossCircled className="font-bold" /> &nbsp;{fullNameError}
              </p>
            ) : (
              <>&nbsp;</>
            )}
          </div>
        )}

        {/* email input */}
        <div className="flex flex-col my-[6px]">
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
          {emailError ? (
            <p
              className={`text-netflixRed flex items-center text-md my-0 max-w-80`}
            >
              <RxCrossCircled className="font-bold" /> &nbsp;{emailError}
            </p>
          ) : (
            <>&nbsp;</>
          )}
        </div>

        {/* password input */}
        <div className="flex flex-col my-[6px] ">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordError(checkPasswordRegex(password))}
            className={`w-80 h-14 bg-transparent border-2 py-2 px-4 placeholder:text-[#bababa] rounded-md text-white outline-none ring-0 active:outline-none active:ring-0 border-[#606060] focus:border-white ${
              passwordError && "border-[#e50914] "
            }`}
          />
          {passwordError ? (
            <p
              className={`text-netflixRed flex items-center text-md my-0 max-w-80`}
            >
              <RxCrossCircled className="font-bold" /> &nbsp;{passwordError}
            </p>
          ) : (
            <>&nbsp;</>
          )}
        </div>

        {/* if signUp form, confirm password input */}
        {!isSignin && (
          <div className="flex flex-col my-[6px] ">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={() =>
                setConfirmPasswordError(
                  checkConfirmPasswordError(confirmPassword)
                )
              }
              className={`w-80 h-14 bg-transparent border-2 py-2 px-4 placeholder:text-[#bababa] rounded-md text-white outline-none ring-0 active:outline-none active:ring-0 border-[#606060] focus:border-white ${
                confirmPasswordError && "border-[#e50914] "
              }`}
            />
            {confirmPasswordError ? (
              <p
                className={`text-netflixRed flex items-center text-md my-0 max-w-80`}
              >
                <RxCrossCircled className="font-bold" /> &nbsp;
                {confirmPasswordError}
              </p>
            ) : (
              <>&nbsp;</>
            )}
          </div>
        )}

        {/* submit button */}
        <button
          type="submit"
          className="mt-[8px] mb-[12px] bg-netflixRed text-white rounded-md m-2 w-80 h-10 font-semibold"
        >
          {isSignin ? "Sign In" : "Sign Up"}
        </button>
      </form>

      {/* footer */}
      <footer>
        {/* if signIn form, forgot password */}
        {isSignin ? (
          <p className="my-[12px] text-white text-center">
            <button className="text-white">Forgot Password?</button>
          </p>
        ) : null}

        {/* toggle signIn or signUp button - depending on form */}
        <p className="mt-[24px] mx-2 text-[#b4b4b4]">
          {isSignin ? "New to GPT-Flix?" : "Already a GPT-Flix member?"}
          &nbsp;&nbsp;
          <button
            onClick={() => setIsSignin((prevState) => !prevState)}
            className="font-semibold text-white"
          >
            {isSignin ? "Sign Up Now!" : "Sign In Now!"}
          </button>
        </p>
      </footer>
    </div>
  );
}
