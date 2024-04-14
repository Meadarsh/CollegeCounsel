import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Iconify from "src/components/iconify";
import { IoClose } from "react-icons/io5";
import PostCard from "../../ProtectedPages/Admin/sections/blog/post-card";
import { posts } from "../../ProtectedPages/Admin/_mock/blog";
import PostSearch from "../../ProtectedPages/Admin/sections/blog/post-search";
import PostSort from "../../ProtectedPages/Admin/sections/blog/post-sort";
const Blogs = () => {
  
  const [blogs, setBlogs] = useState([1]);
  const [Index, setIndex ] = useState(1);
  const [expandBlog, setExpandBlog] = useState(false);

  const GetBlogs =(async () => {
    try{
      const response = await fetch(import.meta.env.VITE_BASE_URL+'/blogs');
      const data = await response.json();
      return setBlogs(data);
    } catch (error) {
      console.error(error);
    }
  })
  useEffect(()=>{
    GetBlogs()
  },[])

  function ExpandBlog(Index){
    setExpandBlog(true);
    setIndex(Index);
  }
 
  return (
    <>
     
      <div className="w-full h-full relative pt-20">
      {expandBlog&&<div className="expand fixed left-0 flex flex-col lg:flex-row items-center right-0 w-full h-full p-2 lg:p-10 gap-10 bg-gray-200 z-30" >
        <img className="lg:w-1/3 object-cover  rounded-3xl" src={blogs[Index]?.path} alt="N/a" />
        <div className="lg:w-2/3 overflow-y-auto ">
          <h1 className="text-3xl my-3 font-semibold">{blogs[Index]?.title} </h1>
          <p>{blogs[Index]?.content} </p>
        </div>
          <IoClose
          className="absolute top-2 text-white lg:text-black lg:hover:text-red-800 cursor-pointer right-4"
            size={50}
            onClick={() => {
              setExpandBlog(false);
            }}
          />
       </div>}
        <Container>
        <div className="w-full flex flex-col ">
        <h1 className="text-3xl font-semibold">Our blogs</h1>
        <p className="text-red-800">
          Unlocking Boundless Opportunities: Your Path to Online Degrees with
          College counsel
        </p>
      </div>
          <Stack
            mb={5}
            mt={5}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <PostSearch posts={blogs} />
            <PostSort
              options={[
                { value: "latest", label: "Latest" },
                { value: "popular", label: "Popular" },
                { value: "oldest", label: "Oldest" },
              ]}
            />
          </Stack>

          <Grid container spacing={3}>
            {blogs.map((post, index) => (
              <PostCard key={post.id} ExpandBlog={ExpandBlog} post={post} index={index} />
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Blogs;
