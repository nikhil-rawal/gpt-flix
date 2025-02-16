"use client";
import { useStore } from "./Store";
import { auth } from "@/utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function authListener() {
  const { setUserName, clearUserName } = useStore.getState();

  try {
    onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);
      if (user) {
        setUserName(user?.displayName || "Guest");
      } else {
        clearUserName();
      }
    });
  } catch (error) {
    console.error("Error Fetching Auth State Data : " + error);
  }
}
