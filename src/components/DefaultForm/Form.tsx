import { FormHTMLAttributes, ReactNode } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  children: ReactNode;
  title?: string;
}

export default function Form({ title, className = '', children, ...rest }: FormProps) {
  return (
    <form className={`flex flex-col w-max h-max gap-2 p-2 justify-center items-center border border-neutral-600 rounded-xl bg-neutral-900 ${className}`} {...rest}>
      {title ? (
        <p>{title}</p>
      ) : null
      }
      {children}
    </form>
  );
}
