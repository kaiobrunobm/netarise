'use client'
import React from 'react';
import MediumButton from './buttons/MediumButton';
import Link from 'next/link';
import { ArrowDownIcon, WhatsappLogoIcon } from '@phosphor-icons/react';
import ContactForm from './form/ContactForm';
const Contact: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-[#F4F5F7] py-20  gap-8 md:px-32" id="Contact">
      <h2 className='font-display text-3xl md:text-5xl font-bold'>Entre em contato</h2>
      <div className='py-24 flex flex-col items-center justify-center gap-24 bg-linear-to-b from-[#E5E7ED] to-[#DFDDF5] w-full md:rounded-4xl'>
        <div className='flex flex-col items-center justify-center gap-1 md:flex-row-reverse md:flex-wrap'>
          <div className='flex flex-col items-center justify-center gap-11 px-8'>
            <h3 className='font-body font-bold text-xl w-full text-end px-10 relative -bottom-10 -right-6 md:text-2xl md:-right-4'>Onde estamos</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15741.77373240866!2d-40.81302514846201!3d-9.470103391202777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjcnNDIuNCJTIDQwwrA0OCcyNS4zIlc!5e0!3m2!1sen!2sbr!4v1749494710813!5m2!1sen!2sbr" width="420" height="420"  referrerPolicy={"no-referrer-when-downgrade"}
                className='rounded-3xl shadow-2xl w-[280px] h-[280px] md:w-[420px] md:h-[420px]'/>

            <p className='relative -top-4 -right-6 text-end w-full px-10 font-body font-light text-sm md:text-lg'>Sobradinho Bahia - 48925000</p>
          </div>

          <div className='flex flex-col items-center justify-center gap-11 px-8 md:items-start'>
            <p className='font-body text-xl text-center max-w-[348px]  text-[#42475D] md:max-w-[728px] md:text-start'>Somos uma startup de soluções em tecnologia focada em entregar inovação, segurança e eficiência para empresas de todos os portes.</p>
            <p className='font-body text-xl text-center max-w-[348px]  text-[#42475D] md:max-w-[728px] md:text-start'>Com uma abordagem moderna e personalizada, atuamos nas áreas de suporte técnico, infraestrutura de rede, desenvolvimento web e mobile, e consultoria em TI. </p>
            <p className='font-body text-xl text-center max-w-[348px]  text-[#212740] md:max-w-[728px] md:text-start'>Quer conversar com a gente? Fale conosco por um dos canais de atendimento abaixo. </p>
            <div className='flex flex-col gap-2.5 justify-center items-center md:flex-row'>
              <Link href='https://api.whatsapp.com/send?phone=5574988287031&text=Gostaria+de+fazer+um+or%C3%A7amento%21&fbclid=PAZXh0bgNhZW0CMTEAAaf9QBmoQGYU6CbBlXDt3eGhLvb5G9CWjlP9z5Ycsfpf9DFE1tk5SIyRTh-87Q_aem_mh31KjuTkiw6qE38YXgWGA' target='_blank'>
              <button
                className={`flex flex-row justify-center items-center text-[#F4F5F7] duration-300 transition-all ease-in-out bg-[#25D366] hover:bg-[#25D366]/80 active:bg-[#25D366]/60 px-6 py-2.5 font-body text-base font-medium rounded-xl cursor-pointer gap-2.5`}
              >
                Whatsapp
                <WhatsappLogoIcon size={24} />
              </button>
              </Link>
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
