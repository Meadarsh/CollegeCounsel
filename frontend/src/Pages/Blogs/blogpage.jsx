import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Blogpage = () => {
    const { id } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(()=>{
    async function fetchh(){
    try {
       const blogdata= await fetch(import.meta.env.VITE_BASE_URL+`/getblogbyId${id}`)
      const data = await blogdata.json();
      setBlog(data);
    } catch (error) {
      console.error(error);
    }}
    fetchh()
  },[])
  return (
    <div className="expand fixed left-0 flex flex-col lg:flex-row items-center right-0 w-full h-full p-2 lg:p-10 gap-10 bg-gray-200 z-30" >
        <img className="lg:w-1/3 object-cover  rounded-3xl" src={blog?.path} alt="N/a" />
        <div className="lg:w-2/3 h-full  flex-col justify-center  flex overflow-y-auto">
          <h1 className="text-3xl font-semibold">{blog?.title} </h1>
          <h1 className="text-2xl mt-5 font-semibold">{blog?.subtitle} </h1>
          <p className='mt-10'>{blog?.content} </p>
        </div>
       </div>
  )
}

export default Blogpage