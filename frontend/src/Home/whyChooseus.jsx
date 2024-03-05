import React from "react";

const WhyChooseus = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[10vh] h-[10vh]">
        <h1 className="lg:text-[3vw] font-bold text-4xl text-center text-red-800">
          Why Choose Us?
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:px-14 px-3 gap-4 mt-10">
        <div className="lg:w-1/3 w-full lg:text-lg p-2 rounded-md border border-red-700">
          <h1 className="text-xl font-bold">Exceptional Faculty</h1>
          <p>
            Our renowned faculty comprises industry experts and experienced
            educators dedicated to delivering top-notch education.
          </p>
        </div>
        <div className="lg:w-1/3 w-full lg:text-lg p-2 rounded-md border border-red-700">
          <h1 className="text-xl font-bold">Flexible Learning Paths</h1>
          <p>
            Enjoy the convenience of learning on your own schedule with our
            flexible online platform designed for working professionals and busy
            students.{" "}
          </p>
        </div>
        <div className="lg:w-1/3 w-full lg:text-lg p-2 rounded-md border border-red-700">
          <h1 className="text-xl font-bold">Cutting-Edge Curriculum</h1>
          <p>
            Stay ahead with a curriculum that evolves with industry trends,
            providing you with relevant skills for today's dynamic job market.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyChooseus;
