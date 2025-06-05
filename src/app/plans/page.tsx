import React from 'react'
import PlanCard from '@/app/plans/components/PlanCard'

const Plans: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-start h-screen'>
      <h1>Planos</h1>
      <PlanCard planTitle='Basico' planDescription='Ideal para pequenos escritorios e autônomos' planBenefits={['1 visita técnica mensal' , 'Suporte remoto ilimitado (Horario comercial)', 'Verificação básica de rede', 'Tempo de resposta de até 48h utéis' ]}/>
      <PlanCard planTitle='Empresarial' planDescription='Para empresas com demandas contínuas' planBenefits = {['4 visitas técnicas mensais', 'Suporte remoto ilimitado (Horario estendido)', 'Monitoramento de rede (basico)', 'Prioridade no atendimento emergencial', 'Gestão de backup e antivirus']}/>
      <PlanCard planTitle='Profissioal' planDescription='Para empresas com 5 a 15 equipamentos' planBenefits={['2 visitas técnicas mensais', 'Suporte remoto ilimitado', 'Verificação e manutenção de rede e computadores', 'Atendimento emergencial 1x/mês incluso']} />
    </div>
  )
}

export default Plans; 
