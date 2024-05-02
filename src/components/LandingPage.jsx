import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-speed="-.2" data-scroll-section className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div key={index} className="masker ">
              <div className="w-fit flex items-end ">
                {index === 1 && (
                  <motion.div 
                  initial={{width:0}}
                  animate={{width:"8vw"}}
                  transition={{ease:"linear", duration:3, type:"spring", stiffness:50,}}
                  className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative top-[1vw] bg-green-500"></motion.div>
                )}
                <h1
                  className="pt-[2vw] -mb-[1vw] text-[9vw] leading-[.75] uppercase 
            font-['Founders Grotesk X-Condensed'] "
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For Public and Private Companies",
          "From the First Pitch to the IPO",
        ].map((item, index) => (
          <p
            className="text-md font-light tracking-tight leading-none"
            key={index}
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-4">
          <div className="px-6 py-3 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            Start the Project
          </div>
          <div className="w-12 h-12 flex items-center justify-center  border-[1px] border-zinc-400   rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
