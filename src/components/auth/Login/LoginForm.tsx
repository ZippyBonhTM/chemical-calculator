"use client";

import DefaultForm from "@/components/DefaultForm";
import { useForm } from "react-hook-form";
import { LoginFormSchema, loginSchema } from "./zodLoginForm";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (payload: LoginFormSchema) => {
    console.log(payload);
  };

  return (
    <DefaultForm.Form onSubmit={handleSubmit(onSubmit)}>
      <DefaultForm.Input type="text" placeholder="Username or Email" {...register("userNameOrEmail")} />
      {errors?.userNameOrEmail && (
        <p className="text-red-600 text-sm">{errors.userNameOrEmail.message}</p>
      )}
      <DefaultForm.Input type="password" placeholder="Password" {...register("password")} />
      {errors?.password && (
        <p className="text-red-600 text-sm">{errors.password.message}</p>
      )}
      <DefaultForm.Input type="password" placeholder="Confirm password" {...register("confirmPassword")} />
      {errors?.confirmPassword && (
        <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>
      )}
      <DefaultForm.Button text="Submit" type="submit" />
    </DefaultForm.Form>
  );
}