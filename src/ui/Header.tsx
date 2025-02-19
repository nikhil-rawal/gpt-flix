"use client";
import NetflixLogo from "./NetflixLogo";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/Firebase";
export default function Header({ path }: { path: boolean }) {
  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(`Sign-out error : ${error}`);
    }
  }
  return (
    <header>
      <div className="flex flex-row justify-between absolute pl-32 pr-12 pt-6 w-full">
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
    </header>
  );
}
