import React from 'react'

type Props = {
    children: React.ReactNode
}

const LandingPageLayout = ({ children }: Props) => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
        {children}
    </main>
  )
}

export default LandingPageLayout