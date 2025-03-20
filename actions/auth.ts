"use server"

import { prisma } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export const onAuthenticatedUser = async () => {
    try {
        const clerk = await currentUser()
        if (!clerk) {
            throw new Error("Unauthorized")
        }
        const user = await prisma.user.findUnique({
            where: {
                clerkId: clerk.id
            }
        })
        if (!user) {
            throw new Error("User not found")
        }
        return user
    } catch (error) {
        console.error(error)
        throw new Error("Internal server error")
    }
}