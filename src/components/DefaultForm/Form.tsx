import { FormHTMLAttributes, ReactNode } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  children: ReactNode;
}

export default function Form({ className='', children, ...rest }: FormProps) {
  return (
    <form className={`flex flex-col w-min h-min gap-2 p-2 justify-center items-center border border-neutral-600 rounded-xl bg-neutral-900 ${className}`} {...rest}>
      {children}
    </form> 
  );
}
