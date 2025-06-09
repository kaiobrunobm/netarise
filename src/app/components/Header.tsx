"use client"
import { Squash as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import TextButton from './buttons/TextButton'
import MediumButton from './buttons/MediumButton'
import { usePathname } from 'next/navigation'
export default function Header() {
  
  const [isOpen, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname()

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);


  return (
    <div className="flex flex-row justify-between items-center sticky top-6 px-8 md:px-10 py-4 mx-4 md:mx-10  bg-[#F4F5F7]/50 backdrop-blur-sm rounded-2xl shadow-xl z-100 ">
      <div className='flex flex-row items-center justify-between gap-11
      '>
        <Link href="/" onClick={scrollToTop} className='font-display text-italic  bg-linear-to-r from-[#1182CD] to-[#000000] bg-clip-text text-transparent duration-300 transition-all ease-in-out hover:to-[#1182CD] hover:from-[#000000] text-xl font-bold cursor-pointer'>NetArise</Link>
      
            {pathname === "/" && 
            <div className='hidden md:flex flex-row gap-4'>
          <TextButton text="Clientes" onClick={() => { setOpen(false) }} href='#Clients' />
          <TextButton text="Serviços" onClick={() => { setOpen(false) }} href='#Services' />
          <TextButton text="Equipe" onClick={() => { setOpen(false) }} href='#Team' />
          <TextButton text="Contato" onClick={() => { setOpen(false) }} href='#Contact' />
            </div> 
            
            }

      </div>

      {pathname === "/" && 
      
      <div className='flex md:hidden'>
        <Hamburger toggled={isOpen} toggle={setOpen} size={32} />
      </div>
      
      }

      <div className={isOpen ? "absolute right-6 top-16 flex flex-col bg-[#F4F5F7] rounded-lg px-9 py-6 gap-2.5 shadow-lg" : "hidden "}>
        <TextButton text="Clientes" onClick={() => { setOpen(false) }} href='#Clients' />
        <TextButton text="Serviços" onClick={() => { setOpen(false) }} href='#Services' />
        <TextButton text="Equipe" onClick={() => { setOpen(false) }} href='#Team' />
        <TextButton text="Contato" onClick={() => { setOpen(false) }} href='#Contact' />
        <Link  href="/plans">
        <MediumButton text="Planos" onClick={() => { setOpen(false) }} />
        </Link>
      </div>
      <div className='hidden md:flex'>
        {pathname === "/" && 
      <Link href="/plans" >
      <MediumButton text="Planos" />
      </Link>
        
        }
      </div>
     
    </div>

  )
}
