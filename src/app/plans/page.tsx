import React from 'react'
import PlanCard from '@/app/plans/components/PlanCard'
import Image from 'next/image'
import logo from '@/app/public/logo-lg.svg'
import Link from 'next/link'

const Plans: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-start gap-8 self-stretch h-full pt-32'>
      <Image src={logo} alt='Logo netarise image' height={350} className='absolute top-48 right-0 rotate-18 z-50 h-72 w-auto' />
      <h1 className='text-4xl font-bold'>Planos</h1>
      <div className='flex flex-col justify-center w-full bg-[#F4F5F7]/40 backdrop-blur-lg z-50 py-12 px-4'>
        <div className='flex flex-col items-start gap-12'>
          <PlanCard planTitle='Basico' planDescription='Ideal para pequenos escritorios e autônomos' planBenefits={['1 visita técnica mensal', 'Suporte remoto ilimitado (Horario comercial)', 'Verificação básica de rede', 'Tempo de resposta de até 48h utéis']} />
          <PlanCard planTitle='Empresarial' planDescription='Para empresas com demandas contínuas' planBenefits={['4 visitas técnicas mensais', 'Suporte remoto ilimitado (Horario estendido)', 'Monitoramento de rede (basico)', 'Prioridade no atendimento emergencial', 'Gestão de backup e antivirus']} />
          <PlanCard planTitle='Profissioal' planDescription='Para empresas com 5 a 15 equipamentos' planBenefits={['2 visitas técnicas mensais', 'Suporte remoto ilimitado', 'Verificação e manutenção de rede e computadores', 'Atendimento emergencial 1x/mês incluso']} isMostPopular />
        </div>
      </div>
      <div className='flex flex-col items-center px-8 gap-6 '>
        <span className='font-bold text-2xl  text-center'>Não se identificou com nenhum dos nossos planos?</span>
        <Link href='/' className='text-center text-sm font-light text-[#2B1EBB] hover:underline pb-14'>Entre em contato e vamos personalizar um plano de acordo com a sua necessidade</Link>
      </div>

    </div>

  )
}

export default Plans;


