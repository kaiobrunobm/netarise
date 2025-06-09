'use client'
import Image from 'next/image'
import logosm from '@/app/public/logo-sm.svg'
import { AnimatePresence, motion } from 'framer-motion'
import MediumButton from './buttons/MediumButton'

import React, { useState, useRef, useCallback, useContext, useEffect } from 'react'
import { ScrollContext } from '../utils/scroll-observer'
const HomePage: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  const words = ['Empresa', 'Escritorio', 'Casa']
  const [wordsIndex, setWordsIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordsIndex((prev) => (prev + 1) % words.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-screen flex flex-col items-center pt-12 pb-20 gap-5 md:pt-0 md:flex md:flex-row-reverse sticky top-0 -z-10 justify-center bg-linear-to-bl from-[#B5B0E7] to-[#DFDDF5]" id="Home" ref={refContainer} style={{
      transform: `translateY(-${progress * 20}vh)`
    }}>
      <Image src={logosm} alt="Netarise logo" width={650} height={650} className='w-80 h-72 md:w-1/2 md:h-auto' />

      <div className='flex flex-col gap-12 mx-6 md:ml-14 md:gap-12'>
        <div className='space-y-3'>
          <div className='2xl:flex 2xl:gap-4'>

            <h1
              className='font-body text-5xl font-bold text-center text-[#212740] mx-4 md:mx-0 md:text-6xl md:text-start lg:flex lg:flex-row lg:gap-[20px]'>Soluções Para
            </h1>
            <AnimatePresence mode='wait'>
              <motion.div
                key={words[wordsIndex]}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0, y: 50 }}
                className={`
            font-body text-5xl font-bold text-center  mx-4 md:mx-0 md:text-6xl md:text-start
            ${wordsIndex === 0 && 'text-[#212740]'}
            ${wordsIndex === 1 && 'text-[#2B1EBB]'}
            ${wordsIndex === 2 && 'text-[#ED9923]'}
            `}
              > {words[wordsIndex]}</motion.div>
            </AnimatePresence>
          </div>

          <p className='font-body text-lg  text-center mx-4 md:mx-0 text-[#212740] md:w-[50vw] md:text-2xl md:text-start'>Gestão de TI para empresas que buscam crescimento, inovação e tecnologia.</p>
        </div>

        <div className='flex flex-row items-center justify-center md:justify-start md:mx-0 '>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
