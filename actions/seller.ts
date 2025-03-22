"use server"

import { prisma } from "@/lib/prisma"

export const getSeller = async (clerkId: string) => {
    try {
        const seller = await prisma.seller.findFirst({
            where: {
                user: {
                    clerkId
                }
            }
        })
        return seller
    } catch (error) {
        throw new Error("Internal server error")
    }
}