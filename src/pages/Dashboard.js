import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Dashboard = () => {
  const dispatch = useDispatch();
  const storedUser = useSelector((state) => state.userSliceReducer);
  const navigateTo = useNavigate();
  const auth = getAuth();

  console.log("user from store", storedUser);
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
      <div>
        <img src={storedUser.photoURL} alt="User dp" className="w-20 h-20" />
        <button onClick={handleSignOut}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
