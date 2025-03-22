import OnboardingLayout from '@/modules/onboarding/layout/onboarding-layout'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <OnboardingLayout>
        {children}
    </OnboardingLayout>
  )
}

export default Layout