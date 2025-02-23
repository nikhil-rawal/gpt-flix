"use client";
import NetflixLogo from "@/ui/NetflixLogo";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/Firebase";
import useAuthListener from "@/utils/useAuthListener";
import { useStore } from "@/utils/Store";

export default function Header() {
  useAuthListener();
  const userName = useStore((state) => state.userName);
  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(`Sign-out error : ${error}`);
    }
  }

  return (
    <div
      className={`flex flex-row justify-between mt-6 transition-all
 ${!userName ? "ml-40 mr-28" : "mx-6"}`}
    >
      <div className="z-10">
        <NetflixLogo />
      </div>
      {userName && (
        <div className="flex z-10">
          <input type="text" placeholder="Search for movies" className="mr-6" />
          <button
            type="submit"
            className="bg-netflixRed p-2 rounded-md font-semibold"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

{
  /* <div
          className={`z-10 ${pathName === "/dashboard" ? "flex" : "hidden"}`}
        > */
}
