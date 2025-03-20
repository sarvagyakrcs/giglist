import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const UseNavigation = () => {
    const pathname = usePathname()
    const [section, setSection] = useState(pathname)
    const onSetSection = (section: string) => {
        setSection(section)
    }
  return {
    section,
    onSetSection
  }
}

export default UseNavigation