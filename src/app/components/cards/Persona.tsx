import Image, { type StaticImageData } from 'next/image'
import React from 'react'
import {Popover, PopoverTrigger, PopoverContent} from "@heroui/popover";
import PersonaTolltip, { type SocialLinks } from '../persona/PersonaTolltip';

interface PersonaProps {
  name: string,
  image: any,
  username: string,
  role: string,
  profileImage: StaticImageData,
  links: SocialLinks
}

const Persona: React.FC<PersonaProps> = ({name, image, username, role, links, profileImage}) => {
  return (
    <Popover showArrow placement="top">
    <div className='flex flex-col justify-center items-center gap-2.5'>
 
      <Image src={image} alt={`${name} ilustration `} width={402} height={545} /> 
      <div className='flex flex-col justify-center items-center gap-1'>
        <h3 className='font-body text-3xl font-normal'>{name}</h3>
        <PopoverTrigger>

        <p  className='font-body font-light text-xl text-[#008EFF] cursor-pointer'>
            @{username}
        </p>
        </PopoverTrigger>
      </div>
    </div>
    <PopoverContent className="p-1">
          <PersonaTolltip name={name} image={profileImage} username={username} role={role} links={links}/>
      </PopoverContent>
    </Popover>
  )
}

export default Persona