'use client'
import React from 'react';
import Image from 'next/image';
import mapImage from '@/app/public/map.svg';
import MediumButton from './buttons/MediumButton';
import Link from 'next/link';
import { ArrowDownIcon, WhatsappLogoIcon } from '@phosphor-icons/react';
import ContactForm from './form/ContactForm';
const Contact: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-[#F4F5F7] py-20  gap-8 md:px-32" id="Contact">
      <h2 className='font-display text-4xl md:text-6xl'>Entre em contato</h2>
      <div className='py-24 flex flex-col items-center justify-center gap-24 bg-linear-to-b from-[#E5E7ED] to-[#DFDDF5] w-full md:rounded-4xl'>
        <div className='flex flex-col items-center justify-center gap-1 md:flex-row-reverse md:flex-wrap'>
          <div className='flex flex-col items-center justify-center gap-11 px-8'>
            <h3 className='font-body font-bold text-xl w-full text-end px-20 relative -bottom-18 -right-5 md:text-2xl md:-right-4'>Onde estamos</h3>
            <Image src={mapImage} alt='netarise tech location' width={395} height={395} className='relative left-2 md:w-[420px] md:h-[420px]' />
            <p className='relative -top-18 -right-3 text-end w-full px-20 font-body font-light text-sm md:text-lg'>Sobradinho Bahia - 48925000</p>
          </div>

          <div className='flex flex-col items-center justify-center gap-11 px-8 md:items-start'>
            <p className='font-body text-xl text-center max-w-[348px]  text-[#42475D] md:max-w-[728px] md:text-start'>Somos uma startup de soluções em tecnologia focada em entregar inovação, segurança e eficiência para empresas de todos os portes.</p>
            <p className='font-body text-xl text-center max-w-[348px]  text-[#42475D] md:max-w-[728px] md:text-start'>Com uma abordagem moderna e personalizada, atuamos nas áreas de suporte técnico, infraestrutura de rede, desenvolvimento web e mobile, e consultoria em TI. </p>
            <p className='font-body text-xl text-center max-w-[348px]  text-[#212740] md:max-w-[728px] md:text-start'>Quer conversar com a gente? Fale conosco por um dos canais de atendimento abaixo. </p>
            <div className='flex flex-col gap-2.5 justify-center items-center md:flex-row'>
              <button
                className={`flex flex-row justify-center items-center text-[#F4F5F7] duration-300 transition-all ease-in-out bg-[#25D366] hover:bg-[#25D366]/80 active:bg-[#25D366]/60 px-6 py-2.5 font-body text-base font-medium rounded-xl cursor-pointer gap-2.5`}
              >
                Whatsapp
                <WhatsappLogoIcon size={24} />
              </button>
              <Link href='/#Form'>
                <MediumButton text='Formulario abaixo' icon={<ArrowDownIcon size={24} className='animate-bounce' />} />

              </Link>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col items-center justify-start gap-8 py-12 ' id='Form'>
          <p className='font-display text-2xl md:text-3xl'>Envie uma mensagem</p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact;
