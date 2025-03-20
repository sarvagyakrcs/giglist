import BackdropGradient from "@/components/global/backdrop-gradient"
import { ModeToggle } from "@/components/global/buttons/mode-toggle"
import GlassCard from "@/components/global/glass-card"
import Logo from "@/components/global/logo"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type React from "react"

type Props = {
  children: React.ReactNode
}

const AuthLayout = async ({ children }: Props) => {
  // const user = await onAuthenticatedUser()
  // if(user){
  //     redirect("/callback/login")
  // }

  return (
    <main className="flex max-h-screen mt-40">
      <div className="flex flex-col w-full items-center gap-8">
        <nav className="w-full flex justify-between fixed top-0 left-0 right-0 items-center px-10 py-5 z-50 transition-all duration-300">
          <Link className={cn("cursor-pointer", buttonVariants({
            variant: "outline",
            size: "sm"
          }))} href="/"> <ArrowLeft size={30} /> Home</Link>
          <ModeToggle />
        </nav>
        <Logo className="opacity-80" />
        <BackdropGradient className="w-full max-w-md h-64 opacity-70 " container="flex flex-col items-center">
          <GlassCard className="w-full max-w-md p-7">{children}</GlassCard>
        </BackdropGradient>
      </div>
    </main>
  )
}

export default AuthLayout

