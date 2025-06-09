import React from 'react'
import Persona from './cards/Persona'
import kaioPersona from '@/app/public/personas/kaio-persona.svg'
import kaioProfile from '@/app/public/personas/kaio-profile.jpeg'
import joaoPersona from '@/app/public/personas/joao-persona.svg'
import joaoProfile from '@/app/public/personas/joao-profile.jpg'
import douglasPersona from '@/app/public/personas/henrique-persona.svg'
import douglasProfile from '@/app/public/personas/douglas-profile.jpg' 
import viniciusPersona from '@/app/public/personas/vinicius-persona.svg'
import viniciusProfile from '@/app/public/personas/vinicius-profile.jpeg'

const Team: React.FC = () => {
 return (
  <div className="h-full flex flex-col justify-center items-center bg-[#F4F5F7] gap-12 pt-32" id="Team">
        <h2 className='font-display text-2xl font-bold'>Nossa equipe</h2>
        <div className='flex flex-col justify-center items-center gap-8 md:flex-row md:flex-wrap'>
          <Persona name='Kaio Bruno' image={kaioPersona} profileImage={kaioProfile} username='bmkaiobruno' role='Programador' links={{
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
            github: 'https://github.com/dghenri'
          }}/>
          <Persona name='Vinicius Teles' image={viniciusPersona} profileImage={viniciusProfile} username='viny.caina' role='Técnico em TI' links={{
            linkedin: 'https://www.linkedin.com/in/vin%C3%ADcius-teles-099284268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram: 'https://www.instagram.com/viny.caina?igsh=MTJyc3JteHdlZ3Yxdw==',
          }}/>
        </div>
  </div>
 )
 }

export default Team;
