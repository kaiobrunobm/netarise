'use client'
import React from 'react';

import LargeButton from '@/app/components/buttons/LargeButton';
import { CheckIcon } from '@phosphor-icons/react';
import Link from 'next/link';

interface PlanCardProps {
  planTitle: string;
  planDescription: string;  
  planBenefits: string[];
  isMostPopular?: boolean;
  contactLink: string;
}

const PlanCard: React.FC<PlanCardProps> = ({planTitle, planDescription, planBenefits, isMostPopular, contactLink}) => {
  return (
    <div className={`flex flex-col items-center gap-12 self-stretch rounded-2xl px-10 py-12 bg-white ${isMostPopular && 'outline-[#2B1EBB] outline-4  relative'} md:max-w-90 md:px-14`}>
      {isMostPopular && <span className='absolute right-4 text-sm top-4 bg-[#2B1EBB] px-6 py-1.5 text-white rounded-full'>Popular</span>}
      <div className='flex flex-col items-center gap-6 self-stretch'>
        <div className='flex flex-col items-start gap-1.5 self-stretch text-[#212740]'>
         <h2 className='font-bold text-2xl md:text-3xl'>{planTitle}</h2>
          <p className='text-[#636363] text-sm md:text-base'>{planDescription}</p>
        </div>
          <Link href={contactLink} target='_blank'>
            {isMostPopular && <button className={` flex flex-row self-stretch items-center justify-center gap-8 px-6 py-4  text-[#F4F5F7] bg-[#2B1EBB] hover:bg-[#2B1EBB]/80 active:bg-[#2B1EBB]/60 active:border-0 rounded-xs font-medium text-lg cursor-pointer transition-all duration-300  ease-in-out`}>
              Entre em contato
            </button>}

            {!isMostPopular && 
            <LargeButton text='Entre em contato' formStatus='default'/>
            }
          </Link>
      </div>
      <ul className='flex flex-col jusify-start items-start gap-2 pb-32'>
        {planBenefits.map((benefit, index) => {
          return (
            <li className='flex justify-center items-center gap-2.5' key={index}>
              <CheckIcon size={16} weight='bold' color='#212740' className='min-h-4 min-w-4'/>
              <p className='text-sm md:text-base text-[#636363]'>{benefit}</p> 
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PlanCard;
