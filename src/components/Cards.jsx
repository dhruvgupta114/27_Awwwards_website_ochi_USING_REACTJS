import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex gap-5 items-center px-32">
      <div className="cardContainer h-[50vh] w-1/2">
        <div className="relative card w-full  bg-[#004d43] rounded-2xl flex items-center justify-center h-full">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            className="w-32"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">
            &copy; HEY
          </button>
        </div>
      </div>
      <div className=" flex gap-cardContainer h-[50vh] w-1/2 gap-5">
        <div className="card relative flex items-center justify-center w-1/2  bg-[#192826] rounded-2xl h-full">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            className="w-32"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">
            &copy; HEY
          </button>
        </div>
        <div className="card w-1/2 relative flex items-center justify-center  bg-[#192826] rounded-2xl h-full">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            className="w-32"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">
            &copy; HEY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
