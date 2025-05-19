
import React from 'react'
import Image from 'next/image'



interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({title, description, image}) => {

  
  
  return (
    <div className='flex flex-col gap-8 justify-center items-center max-w-80 md:items-start md:gap-2.5 '>
      <Image src={image} alt="Service Card" width={52} height={52} className='w-14 h-14' />
      <div className='flex flex-col gap-4'>
        
      <h3 className='text-xl font-medium font-body text-center cursor-pointer md:text-4xl md:text-start'>{title}</h3>
      <p className='text-xl text-gray-500 font-light text-center md:text-start'>{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard;