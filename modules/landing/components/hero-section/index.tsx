import React from 'react'
import HeroDark from './hero-dark'
import HeroLight from './hero-light'

const HeroSection = () => {
  return (
    <div className="">
        <div className="dark:block hidden">
            <HeroDark />
        </div>
        <div className="block dark:hidden">
            <HeroLight />
        </div>
    </div>
  )
}

export default HeroSection