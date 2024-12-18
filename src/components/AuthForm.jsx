import React, { useState, useRef } from "react";
import { checkValidate } from "../utils/validate";
import ErrorMessageComponent from "./ErrorMessageComponent";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const AuthForm = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});
  const [authError, setAuthError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const toggleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleBtnClick = () => {
    const validationResult = checkValidate(
      emailRef.current.value,
      passwordRef.current.value
    );
    setErrorMessage(validationResult || {});

    if (validationResult) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const signedUpUser = userCredential.user;
          updateProfile(signedUpUser, {
            displayName:
              firstNameRef.current.value + " " + lastNameRef.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/59576734?v=4",
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
              alert("Congrats on signup");
              // navigateTo("/dashboard");
            })
            .catch((error) => {
              error && console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthError(errorCode + "-" + errorMessage);
          authError && console.log(authError);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const signedInUser = userCredential.user;
          alert("Congrats on signin");
          console.log(signedInUser);
          // navigateTo("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthError(errorCode + "-" + errorMessage);
          authError && console.log(authError);
        });
    }
  };

  authError && console.log(authError);
  // auth/invalid-credential-Firebase: Error (auth/invalid-credential).

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
              ref={firstNameRef}
              type="text"
              className="w-8/12 h-14 rounded-md bg-black/10 border-[#60605f] border px-3 my-4 focus:border-white focus:border-2 outline-none focus:placeholder:text-xs focus:placeholder:pl-1 placeholder:text-lg"
              placeholder="First name"
            />
            <input
              ref={lastNameRef}
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
