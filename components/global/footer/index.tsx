import React from 'react'
import FooterDark from './footer-dark'
import FooterLight from './footer-light'

const Footer = () => {
  return (
    <div className="w-full border-t dark:border-gray-700">
        <div className="dark:block hidden">
            <FooterDark />
        </div>
        <div className="block dark:hidden">
            <FooterLight />
        </div>
    </div>
  )
}

export default Footer