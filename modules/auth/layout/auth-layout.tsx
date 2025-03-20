import React from 'react'

type Props = {
    children: React.ReactNode
}

const AuthLayout = ({children}: Props) => {
  return (
    <main className='flex items-center justify-center h-screen'>
        {children}
    </main>
  )
}

export default AuthLayout