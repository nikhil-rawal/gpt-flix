import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // dispatch(removeUser())
        navigateTo("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <h1>Welcome. You are successfully signed-in.</h1>
      <br />
      <button onClick={handleSignOut}>Logout</button>
    </div>
  );
};

export default Dashboard;
