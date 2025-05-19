'use client'
import React from 'react';
import Image from 'next/image';
import mapImage from '@/app/public/map.svg';
import MediumButton from './buttons/MediumButton';
import { ArrowDownIcon, WhatsappLogoIcon } from '@phosphor-icons/react';
import ContactForm from './form/ContactForm';
const Contact: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-[#F4F5F7] pt-20 gap-8" id="Contact">
      <h2 className='font-display text-4xl'>Entre em contato</h2>
      <div className='py-24 flex flex-col items-center justify-center gap-24'>
        <div className='flex flex-col items-center justify-center gap-32'>
          <div className='flex flex-col items-center justify-center gap-8'>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='font-body font-bold text-xl w-full text-end px-20 relative -bottom-8'>Onde estamos</h3>
              <Image src={mapImage} alt='netarise tech location' width={555} height={555} className='w-[395px] h-[395px]' />
            </div>
            <p className='relative -top-16 text-end w-full px-20 font-body font-light text-sm'>Sobradinho Bahia - 48925000</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-11 px-8'>
            <p className='font-body text-xl text-center max-w-[348px] text-[#42475D]'>Somos uma startup de soluções em tecnologia focada em entregar inovação, segurança e eficiência para empresas de todos os portes.</p>
            <p className='font-body text-xl text-center max-w-[348px] text-[#42475D]'>Com uma abordagem moderna e personalizada, atuamos nas áreas de suporte técnico, infraestrutura de rede, desenvolvimento web e mobile, e consultoria em TI. </p>
            <p className='font-body text-xl text-center max-w-[348px] text-[#212740]'>Quer conversar com a gente? Fale conosco por um dos canais de atendimento abaixo. </p>
            <div className='flex flex-col gap-2.5 justify-center items-center'>
              <button
                className={`flex flex-row justify-center items-center text-[#F4F5F7] duration-300 transition-all ease-in-out bg-[#25D366] hover:bg-[#25D366]/80 active:bg-[#25D366]/60 px-6 py-2.5 font-body text-base font-medium rounded-xl cursor-pointer gap-2.5`}
              >
                Whatsapp
                <WhatsappLogoIcon size={24} />
              </button>

              <MediumButton text='Formulario abaixo' icon={<ArrowDownIcon size={24} className='animate-bounce' />} />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-start gap-8 py-12'>
          <p className='font-display text-2xl'>Envie uma mensagem</p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact;
