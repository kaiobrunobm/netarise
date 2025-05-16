'use client'
import Image from 'next/image'
import logosm from '@/app/public/logo-sm.svg'
import logolg from '@/app/public/logo-lg.svg'
import MediumButton from './buttons/MediumButton'
export default function HomePage() {
  return (
    <div className="h-screen flex flex-col md:flex-row items-center pt-12 md:pt-0 gap-5" id="">
      <Image src={logosm} alt="Netarise logo" width={338} height={313} className='md:hidden w-80 h-72 ' />

      <div className='flex flex-col gap-3 mx-6 md:ml-14 md:gap-12 '>
        <div className='flex flex-col gap-3'>
          <h1 className='font-display text-5xl md:text-6xl md:text-start text-center text-[#212740] mx-4 md:mx-0'>Soluções Para Empresa</h1>
          <p className='font-body text-lg md:text-2xl md:text-start text-center mx-4 md:mx-0 text-[#212740] md:w-[50vw]'>Gestão de TI para empresas que buscam crescimento, inovação e tecnologia.</p>
        </div>

        <div className='flex flex-row items-center justify-center md:justify-start md:mx-0'>

          <MediumButton text="Nossos serviços" onClick={() => { }} />
        </div>
      </div>
      <Image src={logolg} alt="Netarise logo" width={630} height={630} className='md:flex hidden w-[90vh] h-[90vh]  ' />
    </div>
  )
}