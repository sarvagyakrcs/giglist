import React from 'react'
import LandingPageNavbar from '../components/navbar/navbar'
import Footer from '@/components/global/footer'

type Props = {
    children: React.ReactNode
}

const LandingPageLayout = ({ children }: Props) => {
  return (
    <main className="h-screen">
        <LandingPageNavbar />
        {children}
        <Footer />
    </main>
  )
}

export default LandingPageLayout