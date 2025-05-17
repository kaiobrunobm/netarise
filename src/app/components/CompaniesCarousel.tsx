'use client'
import Image from "next/image";
import logo1 from '@/app/public/companies/spotify.svg'
import logo2 from '@/app/public/companies/adobe.svg'
import logo3 from '@/app/public/companies/amazon.svg'
import logo4 from '@/app/public/companies/dribble.svg'
import logo5 from '@/app/public/companies/microsoft.svg'
import logo6 from '@/app/public/companies/netflix.svg'
import logo7 from '@/app/public/companies/twitch.svg'
import { motion } from "motion/react"
import React from "react";

const CompanyLogoData: Array<{ src: any; alt: string }> = [
  { src: logo1, alt: "Spotify" },
  { src: logo2, alt: "Adobe" },
  { src: logo3, alt: "Amazon" },
  { src: logo4, alt: "Dribble" },
  { src: logo5, alt: "Microsoft" },
  { src: logo6, alt: "Netflix" },
  { src: logo7, alt: "Twitch" }
];


export default function CompaniesCarousel() {
  return (
    <div className="container p-5">
    <div className="flex relative overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <motion.div
        transition={{
          duration: 15,
          ease: 'linear',
          repeat: Infinity,
        }}
        initial={{ translateX: 0 }}
        animate={{ translateX: '-50%' }}
        className="flex flex-none gap-16 pr-16"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {CompanyLogoData.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="h-[40%] w-auto flex-none"
              />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  </div>
  )
}