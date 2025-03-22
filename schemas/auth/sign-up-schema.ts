import { z } from "zod";

export const SignUpSchema = z.object({
  // firstname: z
  //   .string()
  //   .min(3, { message: "First name must be at least 3 characters long" }),
  
  // lastname: z
  //   .string()
  //   .min(3, { message: "Last name must be at least 3 characters long" }),
  
  email: z
    .string()
    .email({ message: "You must provide a valid email" }),
  
  password: z
    .string()
    .min(8, { message: "Your password must be at least 8 characters long" })
    .max(64, { message: "Your password cannot be longer than 64 characters" })
    .refine(
      (value) => /^[a-zA-Z0-9_.-]*$/.test(value),
      { message: "Password should contain only alphabets, numbers, underscores, dots, and hyphens" }
    ),
});
