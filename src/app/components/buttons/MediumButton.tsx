'use client'
import React from 'react'

interface MediumButtonProps {
  text: string,
  onClick?: () => void,
  className?: string,
  icon?: React.ReactNode
}
const MediumButton: React.FC<MediumButtonProps> = ({ text, onClick, className, icon }) => {
  return (
    <button
      className={`flex flex-row justify-center items-center bg-[#212740] text-[#F4F5F7] duration-300 transition-all ease-in-out hover:bg-[#282C41] active:bg-[#202335] px-6 py-2.5 font-body text-base font-medium rounded-xl cursor-pointer gap-2.5 z-100 ${className}`}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  )

}

export default MediumButton;