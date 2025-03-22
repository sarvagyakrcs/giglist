import * as z from "zod";

export const InitialOnboardingSchema = z.object({
    fName: z.string().min(1),
    lName: z.string().min(1),
    type: z.enum(["BUYER", "SELLER", "ADMIN"]),
});