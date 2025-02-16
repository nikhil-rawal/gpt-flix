"use client";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/Firebase";
import { useStore } from "@/utils/Store";
import authListener from "@/utils/authListener";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    authListener();
  }, []);

  const userName = useStore((state) => state.userName);
  const clearUserName = useStore((state) => state.clearUserName);

  async function handleSignOut() {
    try {
      await signOut(auth);
      console.log("Sign-out successful");
      clearUserName();
      router.push("/");
    } catch (error) {
      console.error(`Sign-out error : ${error}`);
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut}>Sign Out</button>
      <br />
      <h1>Welcome {userName || "Guest"} !</h1>
    </div>
  );
}
