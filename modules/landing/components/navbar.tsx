"use client"
import Link from 'next/link'
import Logo from '@/components/global/logo'
import { Menu } from 'lucide-react'
import React, { useState } from 'react'

type Props = {}

const LandingPageNavbar = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    
  return (
    <div className="w-full flex justify-between fixed top-0 left-0 right-0 items-center px-10 py-5 z-50">
        <Logo className='opacity-80' />
        <Menu className='text-muted-foreground' onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-background/80 backdrop-blur-sm z-50'>
                <div className='flex flex-col items-center justify-center h-full'>
                    <Link href="/">Home</Link>
                </div>
            </div>
        )}
    </div>
  )
}

export default LandingPageNavbar