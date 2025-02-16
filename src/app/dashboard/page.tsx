"use client";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/Firebase";

export default function Dashboard() {
  const router = useRouter();

  async function handleSignOut() {
    try {
      await signOut(auth);
      console.log("Sign-out successful");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
