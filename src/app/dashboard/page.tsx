"use client";
import { useStore } from "@/utils/Store";

export default function Dashboard() {
  const userName = useStore((state) => state.userName);

  return (
    <div>
      <h1>Dashboard</h1>
      <br />
      <h1>Welcome {userName || "Guest"} !</h1>
    </div>
  );
}
