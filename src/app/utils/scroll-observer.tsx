'use client'
import React, { useState, useCallback, useEffect } from 'react'

interface ScrollValue {
  scrollY: number
}

export const ScrollContext = React.createContext<ScrollValue>({
  scrollY: 0
})

interface ScrollObserverProps {
  children: React.ReactNode
}

const ScrollObserver: React.FC<ScrollObserverProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => document.removeEventListener('scroll', handleScroll)
  }, [handleScroll])
  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollObserver;