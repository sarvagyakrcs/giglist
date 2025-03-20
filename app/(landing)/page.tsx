import React from 'react'
import HeroSection from '@/modules/landing/components/hero-section'
import BentoSection from '@/modules/landing/components/bento'
type Props = {}

const Page = (props: Props) => {
  return (
    <div className="">
      <HeroSection />
      <BentoSection />
    </div>
  )
}

export default Page