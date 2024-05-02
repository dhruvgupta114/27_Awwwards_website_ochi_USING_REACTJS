import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap/all";

const Featured = () => {
  const cards = [useAnimation(),useAnimation()];

  const handleHover =(index) =>{
    cards[index].start({y:"0"})
  }
  const handleHoverEnd =(index) =>{
    cards[index].start({y:"100%"})
  }

  return (
    <div data-scroll data-scroll-section className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20 ">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10">
          <motion.div 
          onHoverStart={()=>handleHover(0)} 
          onHoverEnd={()=>handleHoverEnd(0)}
          className=" relative cardContainer w-1/2 h-[75vh]   ">
            <h1 className="text-[#cdea68] card absolute left-full -translate-x-1/2 top-1/2  -translate-y-1/2 leading-none tracking-tighter flex overflow-hidden z-[9] text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                initial={{y:"100%"}}
                animate={cards[0]}
                transition={{delay:index*.10, ease:[0.22,1,0.36,1]}}
                  className="inline-block translate-y-full"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="overflow-hidden card rounded-2xl w-full h-full ">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                className="w-full h-full bg-cover"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div onHoverStart={()=>handleHover(1)}
          onHoverEnd={()=>handleHoverEnd(1)}
           className="relative cardContainer w-1/2 h-[75vh]">
            <h1 className="text-[#cdea68] card absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter  z-[9] text-8xl  flex overflow-hidden">
              {"VISE".split("").map((item, index) => (
                <motion.span
                initial={{y:"100%"}}
                animate={cards[1]}
                transition={{delay:index*.10, ease:[0.22,1,0.36,1]}}
                  className="inline-block translate-y-full"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="overflow-hidden card rounded-2xl w-full h-full ">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
