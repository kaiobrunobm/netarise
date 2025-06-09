import React from 'react'
import Image from 'next/image'
import logo from '@/app/public/logo-lg.svg'

const Services: React.FC = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-6'>
      <Image src={logo} alt='Netarise Logo' height={300}/>
      <h1 className='font-bold text-8xl text-center'>EM BREVE</h1>
    </div>
  )
}

export default Services
