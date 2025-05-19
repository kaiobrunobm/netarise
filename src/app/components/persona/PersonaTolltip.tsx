import React from 'react'
import Image from 'next/image'
import linkedin from '@/app/public/icons/linkedin.svg'
import instagram from '@/app/public/icons/instagram.svg'
import github from '@/app/public/icons/github.svg'
import twitter from '@/app/public/icons/twitter.svg'

import type { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface SocialLinks {
  linkedin: string,
  instagram?: string,
  github? : string,
  twitter?: string,
}

interface PersonaTolltipProps {
  name: string,
  image: StaticImageData,
  username: string,
  role: string,
  links: SocialLinks
}

const PersonaTolltip: React.FC<PersonaTolltipProps> = ({name, image, username, role, links}) => {
  return (
  <div className="border-none bg-[#F4F5F7] shadow-xl w-2xs px-10 py-4 rounded-xl border-2 border-zinc-900" >
      <div className=" flex gap-3">
        <Image
          src={image}
          alt={name}
          width={250}
          height={250}
          objectFit='cover'
          className="rounded-full w-15 h-15 border-2 border-zinc-300"
        

          />
        <div className="flex flex-col items-start justify-center">
          <h4 className="font-body text-base font-medium leading-none">{name}</h4>
          <h5 className="text-small tracking-tight font-light text-[#008EFF]">@{username}</h5>
          <p className="text-sm text-zinc-500 ">
      &#40;{role}&#41;
      </p>        </div>
      </div>
   
  
    <div className='border-t border-zinc-300/50 my-4'/>
    <div className='flex  flex-row gap-6 justify-center items-center'>
      {links.linkedin && <Link href={links.linkedin} target='_blank'>
      <Image
        src={linkedin}
        alt='linkedin'
        width={24}
        height={24}
        className='w-10 h-10'
      />
      </Link>}
      {links.instagram && <Link href={links.instagram} target='_blank'>
      <Image
        src={instagram}
        alt='linkedin'
        width={24}
        height={24}
        className='w-10 h-10'
      />
      </Link>}
      {links.github && <Link href={links.github} target='_blank'>
      <Image
        src={github}
        alt='linkedin'
        width={24}
        height={24}
        className='w-10 h-10'
      />
      </Link>}
      {links.twitter && <Link href={links.twitter} target='_blank'>
      <Image
        src={twitter}
        alt='linkedin'
        width={24}
        height={24}
        className='w-10 h-10'
      />
      </Link>}
    </div>
  </div>
  )
  
}

export default PersonaTolltip;