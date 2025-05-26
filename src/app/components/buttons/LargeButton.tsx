'use client'
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { type } from 'os';
import React from 'react'

interface LargeButtonProps {
  text: string,
  icon?: React.ReactNode,
  type?: "submit" | "reset" | "button" | undefined,
  disabled?: boolean
}

const LargeButton: React.FC<LargeButtonProps> = ({ text, icon, type, disabled }) => {
  return (
    <button className='flex flex-row items-center justify-center gap-8 px-16 py-4 bg-[#212740] text-[#F4F5F7] rounded-xs font-medium cursor-pointer hover:bg-[#282C41] transition-all duration-300 ease-in-out active:bg-[#202335]' type={type} disabled={disabled}>
      {text}
      {icon && icon}
    </button>

  )
}

export default LargeButton;