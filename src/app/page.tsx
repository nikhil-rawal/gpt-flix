"use client";
import AuthForm from "@/components/AuthForm";
import BackgroundImage from "@/ui/BackgroundImage";
import useAuthListener from "@/utils/useAuthListener";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/Firebase";
import { usePathname } from "next/navigation";
import NetflixLogo from "@/ui/NetflixLogo";

export default function App() {
  useAuthListener();
  const pathName = usePathname();
  console.log("pathName from App", pathName);

  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(`Sign-out error : ${error}`);
    }
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <BackgroundImage />
      <div className="flex flex-row justify-between ml-40 mr-28 mt-6">
        <div className="z-10">
          <NetflixLogo />
        </div>
        <div
          className={`z-10 ${pathName === "/dashboard" ? "flex" : "hidden"}`}
        >
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

      <div className=" flex items-center justify-center h-screen z-10">
        {/* {pathName === "/" ? (
          <AuthForm />
        ) : pathName === "/dashboard" ? (
          <Dashboard />
        ) : null} */}
        <AuthForm />
      </div>
    </div>
  );
}
