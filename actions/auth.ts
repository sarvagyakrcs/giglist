"use server"

import { prisma } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export const onAuthenticatedUser = async () => {
    try {
        const clerk = await currentUser()
        if (!clerk) {
            throw new Error("Unauthorized")
        }
        const user = await prisma.user.findFirst({
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

export const onSignUpUser = async (data : {
    clerkId: string,
    image: string
}) => {
    try {
        const createdUser = await prisma.user.create({
            data: {
                clerkId: data.clerkId,
            }
        })

        if(createdUser){
            return {
                status: 200,
                message: "User created successfully",
                id: createdUser.id
            }
        }

        return {
            status: 500,
            message: "Something went wrong"
        }
    } catch (error) {
        console.error(error)
        return {
            status: 500,
            message: "Something went wrong"
        }
    }
}