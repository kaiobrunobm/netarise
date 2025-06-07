'use client'
import { ArrowUpRightIcon, CheckIcon, CircleNotchIcon } from '@phosphor-icons/react';
import { StringDecoder } from 'node:string_decoder';
import React from 'react'

interface LargeButtonProps {
  text: string ,
  icon?: React.ReactNode,
  type?: "submit" | "reset" | "button" | undefined,
  isMostPopular?: boolean,
  formStatus?: string,
}

const LargeButton: React.FC<LargeButtonProps> = ({ icon, type, formStatus,isMostPopular = false, text = 'Nossos serviços' }) => {
  return (
    <button className={` flex flex-row items-center justify-center gap-8 px-16 py-4  text-[#F4F5F7] bg-[#212740] hover:bg-[#282C41] active:bg-[#202335] active:border-0 rounded-xs font-medium cursor-pointer transition-all duration-300 ease-in-out text-lg ${formStatus === 'sending' && 'cursor-wait  disabled:bg-[#202335]/10'} ${formStatus === 'sent' && 'disabled:bg-green-700'}`} type={type} disabled={formStatus === 'sending' || formStatus === 'sent'}>
      
      {formStatus === 'sending' && <CircleNotchIcon size={28} className='animate-spin' />}
      {formStatus === 'sent' && <CheckIcon size={28} />}
      {formStatus === 'default' && <p>{text}</p>}
      {icon && icon}
    </button>

  )
}

export default LargeButton;
