"use client";
import AuthForm from "@/components/AuthForm";
import BackgroundImage from "@/ui/BackgroundImage";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      <BackgroundImage />
      <div className=" flex items-center justify-center h-screen z-10">
        <AuthForm />
      </div>
    </div>
  );
}
