import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules"
import "swiper/css";
import 'swiper/css/navigation';
import { homePageCourcesList } from "../../Data/data";
import CourseSelection from "./courseSelection";

const SecondPage = () => {

const [selectedCourse,setSelectedCourse]=useState('UG Courses')

function Selection(e){
  setSelectedCourse(e)
}

  return (
    <div className=" w-full">
      <div className="flex justify-center items-center h-[10vh]">
        <h1 className="lg:text-[2vw] text-2xl text-center text-red-800">
        Welcome to a platform where learning meets excellence! 
        </h1>
      </div>
      <div className="nav flex justify-evenly mt-5">
        <div className="rent p-3 w-40 rounded cursor-pointer bg-red-800 hover:bg-red-500">
          <h1 className="text-center text-xl font-bold text-white tracking-widest">
            Apply Now
          </h1>
        </div>
        <div className="rent p-3 w-40 rounded cursor-pointer bg-red-800 hover:bg-red-500">
          <h1 className="text-center text-xl font-bold text-white tracking-widest">
            Explore
          </h1>
        </div>
      </div>
      <div className="lg:mt-[10vh] mt-[10vh]">
        <div className="flex justify-center   items-center mt-[10vh] lg:h-[10vh]">
          <h1 className="lg:text-[3vw] font-bold text-2xl text-center text-red-800">
            Browse Courses
          </h1>
        </div>
        <div className='lg:min-h-[10vh] h-[7vh] w-full justify-center gap-7 items-center flex-wrap flex mt-[1vh]'>
    {homePageCourcesList.map((data,index)=>(
    <div key={index} onClick={()=>Selection(data)} className={`button font-semibold ${selectedCourse===data&&'bg-red-800 text-white'} lg:mt-0  cursor-pointer h-10 lg:h-12 border lg:hover:bg-red-800  lg:hover:text-white  border-red-800  lg:px-5 px-3 flex items-center justify-center lg:text-xl text-sm rounded-full `}>
        <p>{data}</p>
     </div>)) }
    
    </div> 
    <div className="lg:h-[45vh] lg:mt-[5vh]">
  <CourseSelection course={selectedCourse} />
  

  </div>
       
      </div>
    </div>
  );
};

export default SecondPage;
