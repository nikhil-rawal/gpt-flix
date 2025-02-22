"use client";
import { useStore } from "./Store";
import { auth } from "@/utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
// import resetForm from "@/utils/resetForm";
import { useEffect } from "react";

export default function AuthListener() {
  const router = useRouter();
  const { setUserName, clearUserName } = useStore.getState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          setUserName(user?.displayName || "Guest");
          // resetForm();
          router.push("/dashboard");
          console.log("Signed-in to dashboard: from AuthListener");
        } else {
          clearUserName();
          router.push("/");
          // resetForm();
          console.log("Sign-out successful: from AuthListener");
        }
      } catch (error) {
        console.error("Error handling auth state change:", error);
      }
    });

    return () => {
      console.log("Unsubscribing : useAuthListener");
      unsubscribe();
    };
  }, [router, setUserName, clearUserName]);

  // try {
  //   onAuthStateChanged(auth, (user) => {
  //     console.log("Auth state changed : ", user);
  //     if (user) {
  //       setUserName(user?.displayName || "Guest");
  //       resetForm();
  //       router.push("/dashboard");
  //       console.log("Signed-in to dashboard : from useAuthListener");
  //     } else {
  //       clearUserName();
  //       router.push("/");
  //       resetForm();
  //       console.log("Sign-out successful : from useAuthListener");
  //     }
  //   });
  // } catch (error) {
  //   console.error("from useAuthListener Error : " + error);
  // }
}
