import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
}

export default function Input({ placeholder = "input", className = "", ...rest }: InputProps) {
  return (
    <input
      className={`border rounded-xl p-1 text-xl w-full ${className}`}
      {...rest}
      placeholder={placeholder}
    />
  );
}
