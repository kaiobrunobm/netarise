import Link from "next/link"
import React from 'react'


interface TextButtonProps {
  text: string,
  onClick?: () => void,
  className?: string
  href?: string
}

const TextButton: React.FC<TextButtonProps> = ({text, onClick, className, href}) =>  {
  return (
    <Link href={href ? href : "#/"} onClick={onClick} className={`bg-transparent duration-300 cursor-pointer transition-all ease-in-out hover:bg-[#D5D5D5]/20 active:bg-[#D4D4D4]/30 hover:underline px-4 py-1.5 font-body text-base font-medium rounded-xl text-[#212740] ${className}`}>

      {text}

    </Link>

  )
}

export default TextButton;
