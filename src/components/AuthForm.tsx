"use client";
import {
  checkConfirmPasswordError,
  checkEmailRegex,
  checkFullNameError,
  checkPasswordRegex,
} from "@/utils/AuthValidations";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/utils/Firebase";
import { HomeInput } from "./HomeInput";

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
          <HomeInput
            inputType="text"
            inputPlaceholder="Full Name"
            inputValue={fullName}
            inputOnChange={(e) => {
              setFullName(e.target.value);
              setErrorsInState(
                "fullNameError",
                checkFullNameError(e.target.value)
              );
            }}
            inputOnBlur={() =>
              setAllErrors((prevState) => ({
                ...prevState,
                fullNameError: checkFullNameError(fullName),
              }))
            }
            inputError={allErrors?.fullNameError}
          />
        )}

        {/* email input */}
        <HomeInput
          inputType="email"
          inputPlaceholder="Email"
          inputValue={email}
          inputOnChange={(e) => {
            setEmail(e.target.value);
            setErrorsInState("emailError", checkEmailRegex(e.target.value));
          }}
          inputOnBlur={() =>
            setAllErrors((prevState) => ({
              ...prevState,
              emailError: checkEmailRegex(email),
            }))
          }
          inputError={allErrors?.emailError}
        />

        {/* password input */}
        <HomeInput
          inputType="password"
          inputPlaceholder="Password"
          inputValue={password}
          inputOnChange={(e) => {
            setPassword(e.target.value);
            setErrorsInState(
              "passwordError",
              checkPasswordRegex(e.target.value)
            );
          }}
          inputOnBlur={() =>
            setAllErrors((prevState) => ({
              ...prevState,
              passwordError: checkPasswordRegex(password),
            }))
          }
          inputError={allErrors?.passwordError}
        />

        {/* if signUp form, confirm password input */}
        {!isSignin && (
          <HomeInput
            inputType="password"
            inputPlaceholder="Confirm Password"
            inputValue={confirmPassword}
            inputOnChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrorsInState(
                "confirmPasswordError",
                checkConfirmPasswordError(password, e.target.value)
              );
            }}
            inputOnBlur={() =>
              setAllErrors((prevState) => ({
                ...prevState,
                confirmPasswordError: checkConfirmPasswordError(
                  password,
                  confirmPassword
                ),
              }))
            }
            inputError={allErrors?.confirmPasswordError}
          />
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
