import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/global/buttons/mode-toggle";
import { ArrowLeft } from "lucide-react";
import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const OnboardingLayout = ({ children }: Props) => {
    
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <nav className="w-full flex justify-between fixed top-0 left-0 right-0 items-center px-10 py-5 z-50 transition-all duration-300">
          <Link className={cn("cursor-pointer", buttonVariants({
            variant: "outline",
            size: "sm"
          }))} href="/"> <ArrowLeft size={30} /> Home</Link>
          <ModeToggle />
        </nav>
      { children }
    </div>
  )
};

export default OnboardingLayout;
