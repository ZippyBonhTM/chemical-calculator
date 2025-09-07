import { useState } from "react";
import UserPannel from "./UserPannel/UserPannel";
import useAuthContext from "@/hooks/useAuthContext";
import { redirect, RedirectType } from "next/navigation";

export default function UserButton() {
  const context = useAuthContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const userButtonHandler = () => {
    setIsOpen(!isOpen);
  };

  const loginButtonHandler = () => {
    redirect("/welcome", RedirectType.push)
  }

  if (!context?.user) {
    return (
      <button onClick={loginButtonHandler} className="flex justify-center text-black items-center rounded-full bg-neutral-400 p-1 h-10">
        Login
      </button>
    )
  }
  
  return (
    <>
      <button onClick={userButtonHandler} className="flex justify-center items-center rounded-full bg-neutral-600 p-1 w-10 h-10">
        User
      </button>
      {isOpen ? <UserPannel /> : null}
    </>
  );
}