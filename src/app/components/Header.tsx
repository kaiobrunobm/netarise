"use client"
import { Squash as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import { useState } from 'react'
export default function Header() {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className='flex flex-row justify-between items-center sticky top-6 pl-6 pr-6 pb-4 pt-4 ml-3 mr-3 bg-[#F4F5F7]/5 backdrop-blur-sm rounded-2xl shadow-xl'>
      <Link href="#/" ><p className='font-display  bg-linear-to-r from-[#1182CD] to-[#000000] bg-clip-text text-transparent duration-300 transition-all ease-in-out hover:to-[#1182CD] hover:from-[#000000]' >Netarise</p></Link>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  )
}