'use client'
import { ArrowUpRightIcon, CheckIcon, CircleNotchIcon } from '@phosphor-icons/react';
import { type } from 'os';
import React from 'react'

interface LargeButtonProps {
  text: string,
  icon?: React.ReactNode,
  type?: "submit" | "reset" | "button" | undefined,
  formStatus?: string,
}

const LargeButton: React.FC<LargeButtonProps> = ({ text, icon, type, formStatus }) => {
  return (
    <button className={`flex flex-row items-center justify-center gap-8 px-16 py-4 bg-[#212740] text-[#F4F5F7] rounded-xs font-medium cursor-pointer hover:bg-[#282C41] transition-all duration-300 ease-in-out text-lg active:bg-[#202335] ${formStatus === 'sending' && 'cursor-wait  disabled:bg-[#202335]/10'} ${formStatus === 'sent' && 'disabled:bg-green-700'}`} type={type} disabled={formStatus === 'sending' || formStatus === 'sent'}>
      
      {formStatus === 'sending' && <CircleNotchIcon size={28} className='animate-spin' />}
      {formStatus === 'sent' && <CheckIcon size={28} />}
      {formStatus === 'default' && <p>{text}</p>}
      {icon && icon}
    </button>

  )
}

export default LargeButton;
