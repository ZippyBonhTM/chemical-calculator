import * as z from "zod";

export const loginSchema = z.object({
  userNameOrEmail: z.string().min(1, 'Required field.').max(255),
  password: z
    .string()
    .min(8, 'The password must be at least 8 characters long.')
    .max(255),
  confirmPassword: z.string()
}).refine((data) => (data.password === data.confirmPassword), {
  path: ["confirmPassword"],
  error: "The passwords must be equals."
});

export type LoginFormSchema = z.infer<typeof loginSchema>;