"use client";
// import NetflixLogo from "./NetflixLogo";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/Firebase";

export default function Header() {
  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(`Sign-out error : ${error}`);
    }
  }
  return (
    <div className="flex flex-row justify-between">
      <div className="flex z-10">
        <input type="text" placeholder="Search for movies" className="mr-6" />
        <button type="submit" className="bg-red-500" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

{
  /* 
  
  export default function Header({ path }: { path: boolean }) {
  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(`Sign-out error : ${error}`);
    }
  }
  return (
    <div className="flex flex-row justify-between">
      <div className="z-10">
        <NetflixLogo />
      </div>
      <div className={`z-10 ${!path ? "hidden" : "default"}`}>
        <input type="text" placeholder="Search for movies" className="mr-6" />
        <button type="submit" className="bg-red-500" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
  
  */
}
