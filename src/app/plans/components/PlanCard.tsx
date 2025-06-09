'use client'
import React from 'react';

import LargeButton from '@/app/components/buttons/LargeButton';
import { CheckIcon } from '@phosphor-icons/react';

interface PlanCardProps {
  planTitle: string;
  planDescription: string;  
  planBenefits: string[];
  isMostPopular?: boolean
}

const PlanCard: React.FC<PlanCardProps> = ({planTitle, planDescription, planBenefits, isMostPopular}) => {
  return (
    <div className={`flex flex-col items-center gap-12 self-stretch rounded-2xl px-10 py-12 bg-white ${isMostPopular && 'outline-[#2B1EBB] outline-4  relative'}`}>
      {isMostPopular && <span className='absolute right-4 text-sm top-4 bg-[#2B1EBB] px-6 py-1.5 text-white rounded-full  '>Popular</span>}
      <div className='flex flex-col items-center gap-6 self-stretch'>
        <div className='flex flex-col items-start gap-1.5 self-stretch text-[#212740]'>
         <h2 className='font-bold text-2xl'>{planTitle}</h2>
          <p className='text-[#636363] text-sm'>{planDescription}</p>
        </div>
            <LargeButton text='Entre em contato' formStatus='default'/>
      </div>
      <ul className='flex flex-col jusify-start items-start gap-2 pb-32'>
        {planBenefits.map((benefit, index) => {
          return (
            <li className='flex justify-center items-center gap-2.5' key={index}>
              <CheckIcon size={16} weight='bold' color='#212740' className='min-h-4 min-w-4'/>
              <p className='text-sm text-[#636363]'>{benefit}</p> 
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PlanCard;
