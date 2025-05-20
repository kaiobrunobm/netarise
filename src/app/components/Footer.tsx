'use client'
import React from 'react'
import TextButton from './buttons/TextButton';

const Footer: React.FC = () => {
  return (
    <div className='w-full px-16 py-6 bg-[#E5E7ED] flex flex-col items-center justify-center gap-3'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <TextButton text='Termos de uso' onClick={() => { }} />
        <TextButton text='Políticas de privacidade' onClick={() => { }} />
        <TextButton text='Preferências de cookies' onClick={() => { }} />
      </div>
      <div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='flex flex-row items-center justify-center gap-6'>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Linkedin</p>
            <p>Github</p>
          </div>
          <p className=' text-[#595D70] font-body font-light text-base'>© NetAriseTech | 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;