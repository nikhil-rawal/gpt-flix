"use client";
import NetflixLogo from "@/ui/NetflixLogo";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/Firebase";
// import { useEffect } from "react";
import useAuthListener from "@/utils/useAuthListener";

export default function Header() {
  // useEffect(() => {
  //   const unsubscribe = useAuthListener();
  //   return () => unsubscribe();
  // }, []);
  useAuthListener();
  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(`Sign-out error : ${error}`);
    }
  }

  return (
    <div className="flex flex-row justify-between ml-40 mr-28 mt-6">
      <div>
        <NetflixLogo />
      </div>
      <div className={`z-10 flex`}>
        <input type="text" placeholder="Search for movies" className="mr-6" />
        <button
          type="submit"
          className="bg-netflixRed p-2 rounded-md font-semibold"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

{
  /* <div
          className={`z-10 ${pathName === "/dashboard" ? "flex" : "hidden"}`}
        > */
}
