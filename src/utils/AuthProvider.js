import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { addUser, removeUser } from "./userSlice";

const AuthProvider = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigateTo("/dashboard");
      } else {
        dispatch(removeUser());
        navigateTo("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigateTo]);

  return null; // This component doesn't render anything
};

export default AuthProvider;
