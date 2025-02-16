"use client";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";
import {
  validateConfirmPassword,
  validateEmail,
  validateFullName,
  validatePassword,
} from "@/utils/authFormValidations";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/utils/Firebase";
import { FormInput } from "./FormInput";

export default function AuthForm() {
  const router = useRouter();

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

  function resetForm() {
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAllErrors({
      fullNameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    });
  }
  //form submission
  const handleSubmit = async (e: React.FormEvent) => {
    //prevent default form submission and reset values before submission
    e.preventDefault();

    //input validations
    const isFullNameValid = validateFullName(fullName);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(
      password,
      confirmPassword
    );

    //if there is an error, set the error message
    if (isFullNameValid) {
      setErrorsInState("fullNameError", isFullNameValid);
    }
    if (isEmailValid) {
      setErrorsInState("emailError", isEmailValid);
    }
    if (isPasswordValid) {
      setErrorsInState("passwordError", isPasswordValid);
    }
    if (isConfirmPasswordValid) {
      setErrorsInState("confirmPasswordError", isConfirmPasswordValid);
    }

    // if signin form => signin, if signup form => signup
    try {
      if (!isEmailValid && !isPasswordValid && isSignin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Sign-in successful");
      } else if (
        !isFullNameValid &&
        !isEmailValid &&
        !isPasswordValid &&
        !isConfirmPasswordValid &&
        !isSignin
      ) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userCredential.user, {
          displayName: fullName,
        });
        console.log("Sign-up successful");
      }
      resetForm();
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error(
          `${isSignin ? "Sign-in" : "Sign-up"} error :  + ${error?.code}, ${
            error?.message
          }`
        );
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
        onSubmit={handleSubmit}
      >
        {/* if signUp form, show fullName input */}
        {!isSignin && (
          <FormInput
            inputType="text"
            inputPlaceholder="Full Name"
            inputValue={fullName}
            inputOnChange={(e) => {
              setFullName(e.target.value);
              setErrorsInState(
                "fullNameError",
                validateFullName(e.target.value)
              );
            }}
            inputOnBlur={() =>
              setAllErrors((prevState) => ({
                ...prevState,
                fullNameError: validateFullName(fullName),
              }))
            }
            inputError={allErrors?.fullNameError}
          />
        )}

        {/* email input */}
        <FormInput
          inputType="email"
          inputPlaceholder="Email"
          inputValue={email}
          inputOnChange={(e) => {
            setEmail(e.target.value);
            setErrorsInState("emailError", validateEmail(e.target.value));
          }}
          inputOnBlur={() =>
            setAllErrors((prevState) => ({
              ...prevState,
              emailError: validateEmail(email),
            }))
          }
          inputError={allErrors?.emailError}
        />

        {/* password input */}
        <FormInput
          inputType="password"
          inputPlaceholder="Password"
          inputValue={password}
          inputOnChange={(e) => {
            setPassword(e.target.value);
            setErrorsInState("passwordError", validatePassword(e.target.value));
          }}
          inputOnBlur={() =>
            setAllErrors((prevState) => ({
              ...prevState,
              passwordError: validatePassword(password),
            }))
          }
          inputError={allErrors?.passwordError}
        />

        {/* if signUp form, confirm password input */}
        {!isSignin && (
          <FormInput
            inputType="password"
            inputPlaceholder="Confirm Password"
            inputValue={confirmPassword}
            inputOnChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrorsInState(
                "confirmPasswordError",
                validateConfirmPassword(password, e.target.value)
              );
            }}
            inputOnBlur={() =>
              setAllErrors((prevState) => ({
                ...prevState,
                confirmPasswordError: validateConfirmPassword(
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
