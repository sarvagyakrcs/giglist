import React from 'react'
import ContactDark from './contact-dark'
import ContactLight from './contact-light'


const ContactSection = () => {
  return (
    <div className="">
        <div className="dark:block hidden">
            <ContactDark />
        </div>
        <div className="block dark:hidden">
            <ContactLight />
        </div>
    </div>
  )
}

export default ContactSection