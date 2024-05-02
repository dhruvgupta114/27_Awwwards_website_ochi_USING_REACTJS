import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-section className="w-full p-20 bg-[#cdea68] rounded-tr-3xl rounded-tl-3xl text-black flex flex-col gap-[6vw]">
      <h1 className='font-["Neue_Montreal"] text-[3vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="flex justify-between items-start border-t-[1px] border-b-[1px] border-zinc-600 pt-5 pb-16 text-xl font-light tracking-tight leading-none w-full ">
        <p className="">What you can expect:</p>
        <p className="w-[22vw]">
            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it&apos;s live or
            digital, delivered for one or a hundred people. <br /> <br />
            We believe the mix
            of strategy and design (with a bit of coffee) is what makes your
            message clear, convincing, and captivating.
          </p>
          <p className="flex flex-col leading-5 self-end">
            S: <br /> Instagram <br /> Behance <br /> Facebook <br /> Linkedin
          </p>
      </div>
      <div className="w-full flex gap-5">
        <div className="w-1/2 ">
          <h1 className="text-7xl">Our approach: </h1>
          <button className="px-10 py-6 bg-zinc-900 rounded-full mt-10 text-white flex gap-10 items-center uppercase">Read More <div className="w-2 h-2 bg-zinc-100 rounded-full"></div> </button>
        </div>
        <div className="bg-[#b0c859] rounded-3xl w-1/2 h-[70vh]"></div>
      </div>
    </div>
  );
};

export default About;
