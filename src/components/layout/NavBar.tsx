"use client";

import { redirect, usePathname } from "next/navigation";
import User from "./UserButton";

export default function NavBar() {
  const pathname = usePathname();
  const PageName = pathname.split("/").filter(Boolean).pop() || "Home";
  const homeHandler = () => {
    redirect("/");
  };

  return (
    <div className="flex flex-col mb-2 mx-auto w-[50%] p-1.5 bg-neutral-900 border-x border-b rounded-b-xl border-neutral-600">
      <p className="text-center truncate whitespace-nowrap overflow-hidden uppercase font-bold">{PageName}</p>
      <div className="flex justify-between w-full">
        <section>
          <button onClick={homeHandler} className="bg-neutral-200 border p-1.5 rounded-2xl text-black">Home</button>
        </section>
        <section>
          <p className="bg-neutral-700 border p-1.5 rounded-2xl">Mei</p>
        </section>
        <section><User /></section>
      </div>
    </div>
  );
}