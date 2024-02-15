// pages/index.js

// import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import ExerciseGrid from "../components/ExerciseGrid";

export default function Home() {
  return (
    <main>

      <div className="flex flex-row p-11">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">Exercise Tracking</h1>
        <ExerciseGrid />
      </div>
    </main>
  );
}
