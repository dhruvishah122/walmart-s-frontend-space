import React, {useEffect, useState} from 'react'

const useResponsive = () => {
  const [screenSize, setScreenSize] = useState('')

  const getResponsiveSize = () => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 0
    if (width < 576) {
      return 'small'
    } else if (width >= 576 && width < 768) {
      return 'medium'
    } else if (width >= 768 && width < 992) {
      return 'large'
    } else {
      return 'extraLarge'
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getResponsiveSize())
    }
    if (typeof window === 'undefined') {
      console.warn('Window is not available during server-side rendering.')
    } else {
      window.addEventListener('resize', handleResize)
      const initialScreenSize = getResponsiveSize()
      setScreenSize(initialScreenSize)

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenSize
}

export default useResponsive
