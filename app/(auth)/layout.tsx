import React from 'react'
import AuthLayout from '@/modules/auth/layout/auth-layout'
type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <AuthLayout>
        {children}
    </AuthLayout>
  )
}

export default Layout