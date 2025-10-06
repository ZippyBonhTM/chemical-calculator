"use client";

import { redirect, usePathname } from "next/navigation";
import User from "./UserButton";

export default function NavBar() {
  const pathname = usePathname();
  const PageName = pathname.split("/").filter(Boolean).pop() || "Home";
  const homeHandler = () => {
    redirect("/");
  };
  const periodicHandler = () => {
    redirect("/periodic");
  }

  return (
    <div className="flex flex-col mb-2 mx-auto w-[50%] px-2 pb-2 pt-0.5 gap-0.5 bg-neutral-900 border-x border-b rounded-b-xl border-neutral-600 z-500">
      <p className="flex justify-center items-center truncate whitespace-nowrap h-4 overflow-hidden uppercase text-sm">{PageName}</p>
      <div className="flex justify-between w-full">
        <section className="flex justify-stat w-[33%]">
          <button onClick={homeHandler} className="bg-neutral-200 border p-1.5 rounded-2xl text-black">Home</button>
          <button onClick={periodicHandler} className="bg-neutral-200 border p-1.5 rounded-2xl text-black">Periodic Table</button>
        </section>
        <section className="flex justify-center w-[33%]">
          <p className="bg-neutral-700 border p-1.5 rounded-2xl">Meio</p>
        </section>
        <section className="flex justify-end w-[33%]">
          <User />
        </section>
      </div>
    </div>
  );
}