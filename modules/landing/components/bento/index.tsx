import React from 'react'
import BentoDark from './bento-dark'
import BentoLight from './bento-light'
const BentoSection = () => {
  return (
    <div className="w-full border-t dark:border-gray-700">
        <div className="dark:block hidden">
            <BentoDark />
        </div>
        <div className="block dark:hidden">
            <BentoLight />
        </div>
    </div>
  )
}

export default BentoSection