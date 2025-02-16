"use client";
import { useStore } from "./Store";
import { auth } from "@/utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";

// No memory leak, but component re-renders. So far working okay!

export default function authListener() {
  const { setUserName, clearUserName } = useStore.getState();

  try {
    onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed : ", user);
      if (user) {
        setUserName(user?.displayName || "Guest");
      } else {
        clearUserName();
      }
    });
  } catch (error) {
    console.error("Auth State Change Error : " + error);
  }
}
