"use client";
import AuthForm from "@/components/AuthForm";
import BackgroundImage from "@/ui/BackgroundImage";
import useAuthListener from "@/utils/useAuthListener";
import Header from "@/ui/Header";
import { usePathname } from "next/navigation";
import Dashboard from "./dashboard/page";

export default function App() {
  const pathName = usePathname();
  console.log("pathName from App", pathName);

  useAuthListener();

  return (
    <div className="relative w-full h-screen flex flex-col">
      {pathName === "/" && <BackgroundImage />}
      <Header path={pathName === "/dashboard"} />

      <div className=" flex items-center justify-center h-screen z-10">
        {pathName === "/" ? (
          <AuthForm />
        ) : pathName === "/dashboard" ? (
          <Dashboard />
        ) : null}
      </div>
    </div>
  );
}
