'use client'
import React, { useCallback, useContext } from 'react'
import { CarouselContext } from '../ReviewCarousel';
import styles from '../../styles/carousel.module.css';

interface ReviewCardProps {
  review: string;
  author: string;
  company: string;
  index: number;
}


const ReviewCard: React.FC<ReviewCardProps> = ({ review, author, company, index }) => {

  const { embla: emblaApi, selectedIndex} = useContext(CarouselContext)
  const isActive = selectedIndex === index;
  const handleClick = useCallback (() => {
    if(emblaApi === undefined) return
    emblaApi.scrollTo(index) 
  }, [emblaApi, index])
  return (
    <div className={`${styles.slide} relative ${isActive ? 'active' : ''} w-72 md:w-[500px] flex flex-col items-center gap-3 px-5 md:px-10`} onClick={handleClick}>
      <strong className='text-sm text-center font-body font-medium md:text-2xl'>"{review}"</strong>
      <div>
        <p className='text-xs md:text-xl font-body font-light text-center'>{author}</p>
        <p className='text-xs md:text-xl font-body font-light text-center'>&#40;{company}&#41;</p>
      </div>
    </div>
  )
}

export default ReviewCard