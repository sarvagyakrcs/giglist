import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const GlobalProvider = ({ children }: Props) => {
  return (
    <div className=""></div>
  )
}

export default GlobalProvider