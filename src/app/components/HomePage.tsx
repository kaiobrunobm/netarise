'use client'
import Image from 'next/image'
import logosm from '@/app/public/logo-sm.svg'
import logolg from '@/app/public/logo-lg.svg'
import MediumButton from './buttons/MediumButton'

import React, { useState, useRef, useCallback, useContext } from 'react'
import { ScrollContext } from '../utils/scroll-observer'
const HomePage: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  return (
    <div className="h-screen flex flex-col items-center pt-12 gap-5 md:pt-0 md:flex-row md:flex md:justify-around sticky top-0 -z-10" id="Home" ref={refContainer} style={{
      transform: `translateY(-${progress * 20}vh)`
    }}>
      <Image src={logosm} alt="Netarise logo" width={650} height={650} className='w-80 h-72' />

      <div className='flex flex-col gap-12 mx-6 md:ml-14 md:gap-12 '>
        <div className='space-y-3'>
          <h1 className='font-display text-5xl text-center text-[#212740] mx-4 md:mx-0 md:text-6xl md:text-start'>Soluções Para Empresa</h1>
          <p className='font-body text-lg  text-center mx-4 md:mx-0 text-[#212740] md:w-[50vw] md:text-2xl md:text-start'>Gestão de TI para empresas que buscam crescimento, inovação e tecnologia.</p>
        </div>

        <div className='flex flex-row items-center justify-center md:justify-start md:mx-0'>

          <MediumButton text="Nossos serviços" onClick={() => { }} />
        </div>
      </div>
    </div>
  )
}

export default HomePage;