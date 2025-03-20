import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    children: React.ReactNode
    trigger: React.ReactNode
    className?: string
    triggerClass?: string
}

const GlassSheet = ({ children, trigger, className, triggerClass }: Props) => {
  return (
    <Sheet>
        <SheetTrigger className={cn(triggerClass)} asChild>
            {trigger}
        </SheetTrigger>
        <SheetContent className={cn(className, "bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 bg-background/20 border")}>
            <SheetHeader className='hidden'>
                <SheetTitle className='text-2xl font-bold'>
                    <p className='not-sr-only'>
                        Menu
                    </p>
                </SheetTitle>
            </SheetHeader>
            {children}
        </SheetContent>
    </Sheet>
  )
}

export default GlassSheet