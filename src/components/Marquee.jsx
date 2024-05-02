import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-speed=".1"  data-scroll-section className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap items-center ">
        <motion.h1 
        initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:'linear', duration:5, repeat:Infinity}} 
        className='pr-20 text-[24vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase -mb-[1vw] pt-10 pb-10 '>WE ARE OCHI</motion.h1>
        <motion.h1 
        initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:'linear', duration:5, repeat:Infinity}} 
        className='pr-20 text-[24vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase -mb-[1vw] pt-10 pb-10  '>WE ARE OCHI</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
