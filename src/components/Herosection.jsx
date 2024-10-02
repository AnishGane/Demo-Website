import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";

const Herosection = () => {
  return (
    <>
      <div className="heroContainer mt-4">
        <div className="herotext1 flex justify-between items-start">
          <h1 className="text-[190px] font-semibold  uppercase tracking-normal">
            Digital
          </h1>
          <div
            className="video px-1 bg-cover bg-center w-[400px] bg-black h-[92px] rounded-[50px] mt-16"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1727189899371-abd5873c4709?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="play cursor-pointer m-[6px] w-[78px] h-[78px] flex justify-center items-center rounded-[50px] bg-black text-white font-[20px]">
              <FaPlay />
            </div>
          </div>
        </div>
        <div className="herotext2 pl-2 -mt-20 flex justify-between items-start">
          <h3 className="text-[120px] tracking-wide font-semibold uppercase">
            Ideas
          </h3>
          <p className="w-[360px] pt-8 tracking-normal text-[#514e4e] flex flex-col gap-1 ">
            <span className="text-black text-[18px] font-normal">
              Description:
            </span>
            <span className="lowercase text-[14px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              laborum nisi autem fugiat veniam qui jhusa ds!
            </span>
          </p>
        </div>

        <div className="textContainer mt-[20px] absolute flex items-center justify-between w-[29%]">
          <div className="text1 flex items-center justify-center gap-2 border-2 py-2 px-12 rounded-full border-black hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
            <FaCrown className="text-[18px] " />
            <p>Be the King</p>
          </div>
          <div className="text2 flex items-center justify-center gap-2 border-2 py-2 px-12 rounded-full border-black hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
            <FaPeopleCarry className="text-[18px]" />
            <p>Help Other</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
