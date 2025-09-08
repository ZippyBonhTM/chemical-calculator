import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string
}

export default function Button({ text='Default', className='', ...rest }: ButtonProps) {
  return (
    <button className={`flex text-center border p-2 font-bold border-neutral-600 rounded-xl bg-neutral-900 ${className}`} {...rest}>{text}</button>
  );
}
