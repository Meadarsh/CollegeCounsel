import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { coursesName } from "../../../Data/data";
import '../Style/textLoop.css'

const LandingPage = () => {
  useEffect(() => {
    gsap.to(".txt h1 ", {
      y: 1,
      duration: 0.8,
      ease: "power2",
      stagger: 0.08,
    })
  }, []);
  return (
    <div className=" h-[100vh] overflow-hidden relative w-[100vw]">
      <img
        className=" brightness-90 w-full h-full object-cover"
        src="home.jpg"
        alt=""
      />
      <div className="txt h-full w-full text-white lg:text-[5vw] text-[10vw] font-semibold absolute z-10 top-0 -left-10 lg:-left-28 flex  justify-center">
        <div className=" lg:h-[8vw] h-[14vw] mt-[40vh] flex gap-1 overflow-hidden leading-none">
          <h1 className="translate-y-full ">C</h1>
          <h1 className="translate-y-full leading-none">O</h1>
          <h1 className="translate-y-full leading-none">L</h1>
          <h1 className="translate-y-full leading-none">L</h1>
          <h1 className="translate-y-full leading-none">E</h1>
          <h1 className="translate-y-full leading-none">G</h1>{" "}
          <h1 className="translate-y-full leading-none">E</h1>
        </div>
      </div>
      <div className="txt h-full w-full text-white lg:text-[5vw] text-[10vw] font-semibold absolute z-10 lg:top-20 top-10 left-8 flex  lg:left-24 justify-center">
        <div className=" lg:h-[8vw] h-[14vw] mt-[40vh] flex gap-1 overflow-hidden leading-none">
          <h1 className="translate-y-full ">C</h1>
          <h1 className="translate-y-full leading-none">O</h1>
          <h1 className="translate-y-full leading-none">U</h1>
          <h1 className="translate-y-full leading-none">N</h1>
          <h1 className="translate-y-full leading-none">S</h1>
          <h1 className="translate-y-full leading-none">E</h1>
          <h1 className="translate-y-full leading-none">L</h1>
        </div>
      </div>
      <div className="absolute top-[80%] w-[100vw] overflow-hidden flex  h-10 lg:h-20 items-center">
        <div className=" bg-white flex items-center px-2 lg:px-3 h-10 lg:h-20">
          <h1 className="lg:text-3xl text-nowrap font-bold">We Offers</h1>
        </div>
        <div className=" h-full  relative w-full">
          <div className="bg-gradient-to-r absolute top-0 z-10 from-white to-transparent w-6 lg:w-16 h-full">
    
          </div>
          <div id="loop" className="Moving-text-animation lg:text-3xl  text-white overflow-hidden items-center w-full h-full flex">             
               <div className="marquee-text whitespace-nowrap text-white items-center flex gap-5 w-full"> 
               {coursesName.map((e)=>(<p>{e} <span className=" text-lg">⚪</span> </p>)) }
               {/* {coursesName.map((e)=>(<p>{e} <span className=" text-lg">⚪</span> </p>)) }
               {coursesName.map((e)=>(<p>{e} <span className=" text-lg">⚪</span> </p>)) }
               {coursesName.map((e)=>(<p>{e} <span className=" text-lg">⚪</span> </p>)) } */}
               </div>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
