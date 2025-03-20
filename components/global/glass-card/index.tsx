import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

const GlassCard = ({ children, className }: Props) => {
  return (
    <Card
        className={cn(
            className,
            "rounded-2xl bg-background/40 border bg-clip-padding backdrop-filter backdrop-blur-4xl"
        )}
    >
        { children }
    </Card>
  )
}

export default GlassCard