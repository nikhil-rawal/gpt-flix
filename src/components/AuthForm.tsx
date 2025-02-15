"use client";
import {
  checkConfirmPasswordError,
  checkEmailRegex,
  checkFullNameError,
  checkPasswordRegex,
} from "@/utils/AuthValidations";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/utils/Firebase";

export default function AuthForm() {
  //check isSignin form state
  const [isSignin, setIsSignin] = useState(true);

  //fullName, email, password states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //fullName, email, password, confirmPassword ERROR states
  const [allErrors, setAllErrors] = useState({
    fullNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  //setting error messages in state
  const setErrorsInState = (
    field: keyof typeof allErrors,
    errorMessage: string
  ) => {
    setAllErrors((prevState) => ({
      ...prevState,
      [field]: errorMessage,
    }));
  };

  //form submission
  const handleAuthFormSubmit = (e: React.FormEvent) => {
    //prevent default form submission and reset values before submission
    e.preventDefault();

    //input validations
    const hasFullNameError = checkFullNameError(fullName);
    const hasEmailError = checkEmailRegex(email);
    const hasPasswordError = checkPasswordRegex(password);
    const hasConfirmPasswordError = checkConfirmPasswordError(
      password,
      confirmPassword
    );

    //if there is an error, set the error message

    if (hasFullNameError) {
      setErrorsInState("fullNameError", hasFullNameError);
    }
    if (hasEmailError) {
      setErrorsInState("emailError", hasEmailError);
    }
    if (hasPasswordError) {
      setErrorsInState("passwordError", hasPasswordError);
    }
    if (hasConfirmPasswordError) {
      setErrorsInState("confirmPasswordError", hasConfirmPasswordError);
    }

    //if no error found, console.log(email,password)
    const hasErrors =
      hasFullNameError ||
      hasEmailError ||
      hasPasswordError ||
      hasConfirmPasswordError;

    if (!hasErrors) {
      console.log(
        `All inputs are valid for ${fullName}, ${email}, ${password}`
      );
    }

    // if signin form => signin, if signup form => signup
    if (!hasErrors) {
      if (isSignin) {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("Sign in error : " + user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Sign in error : " + errorCode, errorMessage);
          });
      }
      if (!isSignin) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("Sign up error : " + user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Sign up error : " + errorCode, errorMessage);
            // ..
          });
      }
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
              onChange={(e) => {
                setFullName(e.target.value);
                setErrorsInState(
                  "fullNameError",
                  checkFullNameError(e.target.value)
                );
              }}
              onBlur={() =>
                setAllErrors((prevState) => ({
                  ...prevState,
                  fullNameError: checkFullNameError(fullName),
                }))
              }
              className={`w-80 h-14 bg-transparent border-2 py-2 px-4 transition-all ease-in-out focus:placeholder:text-white focus:placeholder:text-[13px] focus:placeholder: rounded-md text-white outline-none ring-0 active:outline-none active:ring-0 border-[#606060] focus:border-white ${
                allErrors?.fullNameError && "border-[#e50914]"
              }`}
            />
            {allErrors?.fullNameError ? (
              <p
                className={`text-netflixRed flex items-center text-md my-0 max-w-80 `}
              >
                <RxCrossCircled className="font-bold" /> &nbsp;
                {allErrors?.fullNameError}
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
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorsInState("emailError", checkEmailRegex(e.target.value));
            }}
            onBlur={() =>
              setAllErrors((prevState) => ({
                ...prevState,
                emailError: checkEmailRegex(email),
              }))
            }
            className={`w-80 h-14 bg-transparent border-2 py-2 px-4 transition-all ease-in-out focus:placeholder:text-white focus:placeholder:text-[13px] focus:placeholder: rounded-md text-white outline-none ring-0 active:outline-none active:ring-0 border-[#606060] focus:border-white ${
              allErrors?.emailError && "border-[#e50914]"
            }`}
          />
          {allErrors?.emailError ? (
            <p
              className={`text-netflixRed flex items-center text-md my-0 max-w-80`}
            >
              <RxCrossCircled className="font-bold" /> &nbsp;
              {allErrors?.emailError}
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
            // onChange={(e) => setPassword(e.target.value)}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorsInState(
                "passwordError",
                checkPasswordRegex(e.target.value)
              );
            }}
            onBlur={() =>
              setAllErrors((prevState) => ({
                ...prevState,
                passwordError: checkPasswordRegex(password),
              }))
            }
            className={`w-80 h-14 bg-transparent border-2 py-2 px-4 transition-all ease-in-out focus:placeholder:text-white focus:placeholder:text-[13px] focus:placeholder: rounded-md text-white outline-none ring-0 active:outline-none active:ring-0 border-[#606060] focus:border-white ${
              allErrors?.passwordError && "border-[#e50914] "
            }`}
          />
          {allErrors?.passwordError ? (
            <p
              className={`text-netflixRed flex items-center text-md my-0 max-w-80`}
            >
              <RxCrossCircled className="font-bold" /> &nbsp;
              {allErrors?.passwordError}
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
              // onChange={(e) => setConfirmPassword(e.target.value)}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setErrorsInState(
                  "confirmPasswordError",
                  checkConfirmPasswordError(password, e.target.value)
                );
              }}
              onBlur={() =>
                setAllErrors((prevState) => ({
                  ...prevState,
                  confirmPasswordError: checkConfirmPasswordError(
                    password,
                    confirmPassword
                  ),
                }))
              }
              className={`w-80 h-14 bg-transparent border-2 py-2 px-4 transition-all ease-in-out focus:placeholder:text-white focus:placeholder:text-[13px] focus:placeholder: rounded-md text-white outline-none ring-0 active:outline-none active:ring-0 border-[#606060] focus:border-white ${
                allErrors?.confirmPasswordError && "border-[#e50914] "
              }`}
            />
            {allErrors?.confirmPasswordError ? (
              <p
                className={`text-netflixRed flex items-center text-md my-0 max-w-80`}
              >
                <RxCrossCircled className="font-bold" /> &nbsp;
                {allErrors?.confirmPasswordError}
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
