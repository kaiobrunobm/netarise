'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import TextButton from './buttons/TextButton';
import instagramIcon from '@/app/public/icons/instagramIcon.svg'
import linkedinIcon from '@/app/public/icons/linkedinIcon.svg'
import githubIcon from '@/app/public/icons/githubIcon.svg'
import facebookIcon from '@/app/public/icons/facebookIcon.svg'

const Footer: React.FC = () => {
  return (
    <div className='w-full px-8 py-6 bg-[#E5E7ED] flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between md:flex-wrap'>
      <div className='flex flex-col items-center justify-center gap-3 md:flex-row'>
        <TextButton text='Termos de uso' href='/terms' />
        <TextButton text='Políticas de privacidade' href='/politics' />
        <TextButton text='Preferências de cookies' href='/cookies' />
      </div>
      <div>
        <div className='flex flex-col items-center justify-center gap-4 md:flex-row'>
          <div className='flex flex-row items-center justify-center gap-6'>
            <Link href='https://www.google.com' target='_blank'>
              <Image src={instagramIcon} alt='instagram' width={40} height={40} />
            </Link>
            <Link href='https://www.google.com' target='_blank'>
              <Image src={linkedinIcon} alt='linkedin' width={40} height={40} />
            </Link>
            <Link href='https://google.com/' target='_blank'>
              <Image src={githubIcon} alt='github' width={40} height={40} />
            </Link>
            <Link href='https://www.google.com' target='_blank'>
              <Image src={facebookIcon} alt='facebook' width={40} height={40} />
            </Link>
          </div>
          <p className=' text-[#595D70] font-body font-light text-base'>© NetAriseTech | 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
