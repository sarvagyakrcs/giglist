import * as z from "zod";

export const LogInSchema = z.object({
    email: z.string().email("You must give a valid email"),
    password: z
        .string()
        .min(8, { message: "Your password must be at least 8 characters long" })
        .max(64, { message: "Your password cannot be longer than 64 characters" })
        .refine(
            (value) => /^[a-zA-Z0-9_.-]*$/.test(value), 
            { message: "Password should contain only alphabets, numbers, and _ . -" }
        ),
});

export type LogInSchemaType = z.infer<typeof LogInSchema>;