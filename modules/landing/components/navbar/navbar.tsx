"use client"
import Logo from '@/components/global/logo'
import React, { useEffect, useState } from 'react'
import { ModeToggle } from '@/components/global/buttons/mode-toggle'
import NavMenu from './menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { LogOut, MenuIcon } from 'lucide-react'
import GlassSheet from '@/components/global/glass-sheet'
import { UserButton, useUser } from '@clerk/nextjs'

type Props = {}

const LandingPageNavbar = (props: Props) => {    
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { isSignedIn, user, isLoaded } = useUser()

  return (
    <nav className={cn(
      "w-full flex justify-between fixed top-0 left-0 right-0 items-center px-10 py-5 z-50 transition-all duration-300",
      isScrolled ? "dark:bg-gray-900/60 backdrop-blur-md" : "bg-transparent"
    )}>
        <Logo className='opacity-80' />
        <NavMenu className="ml-20" origin="desktop" />
        <div className="flex items-center justify-center gap-x-2">
          <ModeToggle />
          <div className="flex gap-2">
            {isSignedIn ? <UserButton /> : (
              <>
                <Link 
                  href="/sign-in"
                  className={cn(buttonVariants({
                    variant: "ghost",
                    size: "sm"
                  }))}
                >
                  Login
                </Link>
                <Link 
                  href="/sign-up"
                  className={cn(buttonVariants({
                    variant: "default",
                    size: "sm"
                  }))}
                >
                  Sign Up
                </Link>
              </>
            )}
            <GlassSheet className="flex items-center justify-center" triggerClass='lg:hidden'
              trigger={
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className='hover:bg-none bg-background'
                >
                  <MenuIcon size={30} />
                </Button>
              }
            >
              <NavMenu origin='mobile' />
            </GlassSheet>
          </div>
        </div>
    </nav>
  )
}

export default LandingPageNavbar