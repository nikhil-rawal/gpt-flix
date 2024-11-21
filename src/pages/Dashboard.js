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
        dispatch(removeUser());
        navigateTo("/");
      })
      .catch((error) => {
        error && console.log(error);
      });
  };

  if (!storedUser) {
    return <div>Loading...</div>; // Show loading state if user data is not available
  }

  return (
    <div>
      <h1>Welcome {storedUser.displayName} You are successfully signed-in.</h1>
      <br />
      <div className="flex">
        <img src={storedUser.photoURL} alt="User dp" className="w-40 h-40" />
        <button onClick={handleSignOut}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
