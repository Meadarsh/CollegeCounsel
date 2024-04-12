import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./Courses";
import { FaUniversity } from "react-icons/fa";
import { pgCourseData, ugCourseData } from "../../../Data/data";

const CourseSelection = ({ course }) => {
  const [selected, setSelected] = useState(ugCourseData);
  const [selectedCourse, setSelectedCourse] = useState();
  const [selectedKey, setSelectedKey] = useState();

  useEffect(() => {
    if (course === "PG Courses") {
      setSelected(pgCourseData);
    }
    if (course === "UG Courses") {
      setSelected(ugCourseData);
    }
    if (course === "Other Courses") {
      setSelected([]);
    }
    const keys = Object.keys(selected); // Get all keys of the object
    const firstKey = keys[0];
    setSelectedCourse(selected[firstKey]);
    setSelectedKey(firstKey);
  }, [course, selected]);
  function SelectCourse(key) {
    setSelectedCourse(selected[key]);
    setSelectedKey(key);
  }
  return (
    <div className="h-full flex flex-col lg:flex-row w-full ">
      <div className=" w-[100%]  lg:w-[20%] lg:pt-5 h-16 lg:h-full overflow-x-auto lg:overflow-y-auto flex lg:flex-col items-center justify-center gap-5">
        {Object.keys(selected).map((key) => (
          <div
            key={key}
            onClick={() => SelectCourse(key)}
            className={`flex items-center ${
              selectedKey === key && "bg-red-800 text-white"
            } font-bold border-red-800 justify-center rounded-3xl w-16 lg:w-36 border py-1 lg:py-3`}
          >
            <h1>{key}</h1>
          </div>
        ))}
      </div>
      <div
        className="lg:h-full h-[40vh] w-[100%] lg:w-[60%] overflow-y-auto  rounded-xl border ">
        <OfferingCollegesLIst college={selectedCourse} />
      </div>
    </div>
  );
};

export default CourseSelection;

const OfferingCollegesLIst = ({ college }) => {
  return (
    <div className="flex p-2 pt-7 flex-wrap gap-3 justify-center">
      {college?.map((college) => (
        <div className="flex border w-32 lg:w-40 rounded-lg text-nowrap overflow-hidden flex-col  justify-center p-2 border-red-800">
          <FaUniversity className="m-auto text-2xl lg:text-4xl" />
          <p className="text-ellipsis w-[100%] overflow-hidden whitespace-nowrap">
            {college}
          </p>
        </div>
      ))}
    </div>
  );
};
