import React from "react";
import { Outlet } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import AuthForm from "../components/AuthForm";

const Home = () => {
  return (
    <div className="relative h-screen">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/CA-en-20241104-TRIFECTA-perspective_c9918c41-adde-428f-b9f1-3aa64bfa091f_medium.jpg"
        alt="Homepage Background"
        className="w-full h-full object-cover brightness-50"
      />
      <img
        className="absolute w-48 top-2 left-36 brightness-105 contrast-125"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="App Logo"
      />
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="w-4/12">
          {/* <Outlet /> */}
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
