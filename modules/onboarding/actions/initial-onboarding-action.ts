"use server"

import * as  z from "zod"
import { InitialOnboardingSchema } from "../schema/initial-onboarding-schema"
import { prisma } from "@/lib/prisma"

export const InitialOnboardingAction = async (formData: z.infer<typeof InitialOnboardingSchema>) => {
    try {
        const {
            data,
            success
        } = InitialOnboardingSchema.safeParse(formData)

        if (!success) {
            throw new Error("Invalid form data")
        }

        await prisma.user.update({
            where: {
                clerkId: data.clerkId
            },
            data: {
                firstname: data.fName,
                lastname: data.lName,
                type: data.type
            }
        })
    } catch (error) {
        console.error("Initial onboarding error", error)
        throw new Error("Failed to submit the form. Please try again.")
    }
}