import React from 'react'
import LandingPageNavbar from '../components/navbar'

type Props = {
    children: React.ReactNode
}

const LandingPageLayout = ({ children }: Props) => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
        <LandingPageNavbar />
        {children}
    </main>
  )
}

export default LandingPageLayout