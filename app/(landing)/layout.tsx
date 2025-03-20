import LandingPageLayout from '@/modules/landing/layout/layout'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <LandingPageLayout>
        {props.children}
    </LandingPageLayout>
  )
}

export default Layout