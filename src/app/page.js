import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
          <div className="flex h-screen flex-row p-11">
      <UserButton afterSignOutUrl="/"/>
    </div>

    
    </main>
  );
}
