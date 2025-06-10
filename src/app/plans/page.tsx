import React from 'react'
import PlanCard from '@/app/plans/components/PlanCard'
import Image from 'next/image'
import logo from '@/app/public/logo-lg.svg'
import Link from 'next/link'

const Plans: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-start gap-8 self-stretch h-full pt-32'>
      <Image src={logo} alt='Logo netarise image' height={350} className='absolute top-48 right-6 rotate-11 z-50 h-72 w-auto md:h-auto md:top-50 md:right-16 '/>
      <h1 className='text-4xl font-bold md:text-6xl z-60'>Planos</h1>
      <div className='flex flex-col justify-center w-full z-50 py-12 px-4 md:w-auto md:px-24 md:py-24 md:rounded-4xl'>
        <div className='flex flex-col items-start gap-12 xl:flex-row md:justify-center'>
          <PlanCard planTitle='Basico' planDescription='Ideal para pequenos escritorios e autônomos' planBenefits={['1 visita técnica mensal', 'Suporte remoto ilimitado (Horario comercial)', 'Verificação básica de rede', 'Tempo de resposta de até 48h utéis']} contactLink='https://api.whatsapp.com/send?phone=5574988287031&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20contratar%20o%20plano%20de%20servi%C3%A7o%20Basico%20da%20NetArise' />
          <PlanCard planTitle='Empresarial' planDescription='Para empresas com demandas contínuas' planBenefits={['4 visitas técnicas mensais', 'Suporte remoto ilimitado (Horario estendido)', 'Monitoramento de rede (basico)', 'Prioridade no atendimento emergencial', 'Gestão de backup e antivirus']} contactLink='https://api.whatsapp.com/send?phone=5574988287031&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20contratar%20o%20plano%20de%20servi%C3%A7o%20Empresarial%20da%20NetArise' />
          <PlanCard planTitle='Profissional' planDescription='Para empresas com 5 a 15 equipamentos' planBenefits={['2 visitas técnicas mensais', 'Suporte remoto ilimitado', 'Verificação e manutenção de rede e computadores', 'Atendimento emergencial 1x/mês incluso']} isMostPopular contactLink='https://api.whatsapp.com/send?phone=5574988287031&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20contratar%20o%20plano%20de%20servi%C3%A7o%20Profissional%20da%20NetArise' />
        </div>
      </div>
      <div className='flex flex-col items-center px-8 gap-6 '>
        <span className='font-bold text-2xl  text-center md:text-4xl'>Não se identificou com nenhum dos nossos planos?</span>
        <Link href='https://api.whatsapp.com/send?phone=5574988287031&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20contratar%20o%20plano%20de%20servi%C3%A7o%20personalizado%20da%20NetArise' target='_blank' className='text-center text-sm font-light text-[#2B1EBB] hover:underline pb-14 md:text-lg'>Entre em contato e vamos personalizar um plano de acordo com a sua necessidade</Link>
      </div>

    </div>

  )
}

export default Plans;


