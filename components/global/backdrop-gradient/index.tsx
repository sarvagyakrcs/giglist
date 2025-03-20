import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    className?: string
    container?: string
    children: React.ReactNode
}

const BackdropGradient = ({ className, container, children }: Props) => {
  return (
    <div className={cn(
        "relative w-full flex flex-col",
        container
    )}>
      <div className={
        cn(
            "absolute rounded-[50%] radial-gradient-blur mx-10",
            className
        )
      }>
        {children}
      </div>
    </div>
  )
}

export default BackdropGradient