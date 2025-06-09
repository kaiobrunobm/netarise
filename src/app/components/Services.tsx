'use client'
import React from 'react'
import cabling from '@/app/public/icons/cabling.svg'
import development from '@/app/public/icons/development.svg'
import helpdesk from '@/app/public/icons/helpdesk.svg'
import servers from '@/app/public/icons/servers.svg'
import ServiceCard from './cards/ServiceCard'
import LargeButton from '@/app/components/buttons/LargeButton'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import Link from 'next/link'

const Services: React.FC = () => {
  return (
    <div className=" bg-[#F4F5F7] h-full flex flex-col gap-6 justify-center items-center px-8 py-16 " id="Services">
      <div className="flex flex-col  gap-6 justify-center items-center bg-[#E5E7ED] w-screen py-12 md:px-16 md:py-24 md:rounded-4xl md:w-auto  ">
        <h2 className='text-xl font-body font-bold px-12 py-4 md:text-5xl'>Nossos serviços</h2>
        <div className='flex flex-col flex-wrap gap-9 px-8 py-8 md:flex-row'>
          <ServiceCard title='Cabeamento Estruturado' description='Confecção, organização  e padronização de cabos de rede, que facilita manutenção, expansão e garante desempenho.' image={cabling} />
          <ServiceCard title='Desenvolvimento de Sistemas' description='Criação de sites e sistemas funcionais, modernos e responsivos, focados na performance e na experiência do usuário.' image={development} />
          <ServiceCard title='Suporte Técnico Especializado' description='Atendimento técnico rápido e eficiente para resolver problemas de TI, garantindo o funcionamento contínuo dos sistemas e a satisfação dos usuários.' image={helpdesk} />
          <ServiceCard title='Suporte para Servidores' description='Manutenção e suporte especializados para servidores físicos e virtuais, assegurando alto desempenho, segurança e disponibilidade dos serviços críticos da sua empresa.' image={servers} />

        </div>
        <div className='w-full flex justify-center items-center md:justify-end'>
          <Link href={'/services'}>
            <LargeButton text='Nossos serviços' formStatus='default' icon={<ArrowUpRightIcon size={32} />} />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Services;
