import React from 'react'
import Persona from './cards/Persona'
import kaioPersona from '@/app/public/personas/kaio-persona.svg'
import kaioProfile from '@/app/public/personas/kaio-profile.jpg'
import joaoPersona from '@/app/public/personas/joao-persona.svg'
import joaoProfile from '@/app/public/personas/joao-profile.jpg'
import douglasPersona from '@/app/public/personas/henrique-persona.svg'
import douglasProfile from '@/app/public/personas/douglas-profile.jpg'

const Team: React.FC = () => {
 return (
  <div className="h-full flex flex-col justify-start items-center bg-[#F4F5F7] gap-12" id="Team">
        <h2 className='font-display text-2xl'>Nossa equipe</h2>
        <div className='flex flex-col justify-center items-center gap-8 md:flex-row'>
          <Persona name='Kaio Bruno' image={kaioPersona} profileImage={kaioProfile} username='bmkaiobruno' role='Desenvolvedor web/mobile' links={{
            linkedin: 'https://www.linkedin.com/in/bmkaiobruno/',
            instagram: 'https://www.instagram.com/kaiobrunobm/',
            github: 'https://github.com/kaiobrunobm',
            twitter: 'https://x.com/bmkaiobruno'
          }}/>
          <Persona name='João Marinho' image={joaoPersona} profileImage={joaoProfile} username='juaomarinho' role='Analista de suporte' links={{
            linkedin: 'https://www.linkedin.com/in/juaomarinho/',
            instagram: 'https://www.instagram.com/juao.marinho/',
          }}/>
          <Persona name='Henrique Silva' image={douglasPersona} profileImage={douglasProfile} username='dghenrique' role='Técnico em TI' links={{
            linkedin: 'https://www.linkedin.com/in/dghenrique/',
            instagram: 'https://www.instagram.com/doug.h_/',
          }}/>
        </div>
  </div>
 )
 }

export default Team;