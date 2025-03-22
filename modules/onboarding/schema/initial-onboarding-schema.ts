import * as z from "zod";

export const InitialOnboardingSchema = z.object({
    clerkId: z.string().min(1),
    fName: z.string().min(1),
    lName: z.string().min(1),
    type: z.enum(["BUYER", "SELLER", "ADMIN"]),
});