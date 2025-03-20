import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'

const UseNavigation = () => {
    const pathname = usePathname()
    const [section, setSection] = useState(pathname)

    useEffect(() => {
        setSection(pathname)
    }, [pathname])

    const onSetSection = (newSection: string) => {
        setSection(newSection)
    }

    return {
        section,
        onSetSection
    }
}

export default UseNavigation