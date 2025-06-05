'use client'
import Image from 'next/image'
import logosm from '@/app/public/logo-sm.svg'
import Link from 'next/link'
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
    <div className="h-screen flex flex-col items-center pt-12 pb-20 gap-5 md:pt-0 md:flex md:flex-row-reverse sticky top-0 -z-10 md:justify-center bg-linear-to-bl from-[#B5B0E7] to-[#DFDDF5]" id="Home" ref={refContainer} style={{
      transform: `translateY(-${progress * 20}vh)`
    }}>
      <Image src={logosm} alt="Netarise logo" width={650} height={650} className='w-80 h-72 md:w-1/2 md:h-auto' />

      <div className='flex flex-col gap-12 mx-6 md:ml-14 md:gap-12'>
        <div className='space-y-3'>
          <h1 className='font-body text-5xl font-bold text-center text-[#212740] mx-4 md:mx-0 md:text-6xl md:text-start'>Soluções Para Empresa</h1>
          <p className='font-body text-lg  text-center mx-4 md:mx-0 text-[#212740] md:w-[50vw] md:text-2xl md:text-start'>Gestão de TI para empresas que buscam crescimento, inovação e tecnologia.</p>
        </div>

        <div className='flex flex-row items-center justify-center md:justify-start md:mx-0 '>
          <Link href="/services">
          <MediumButton text="Nossos serviços" className='' />
          </Link>
         
        </div>
      </div>
    </div>
  )
}

export default HomePage;
