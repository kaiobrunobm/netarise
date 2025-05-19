'use client'
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import React from 'react'

const LargeButton: React.FC = () => {
  return (
      <button className='flex flex-row items-center justify-center gap-8 px-16 py-4 bg-[#212740] text-[#F4F5F7] rounded-xs font-medium cursor-pointer hover:bg-[#282C41] transition-all duration-300 ease-in-out active:bg-[#202335]'>
         Nossos serviços
        <ArrowUpRightIcon size={32} />
      </button>

  )
}

export default LargeButton;