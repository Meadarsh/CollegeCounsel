import React, { useState } from 'react';
import Loader from '../Components/Loader';

const PostBlogs = () => {
  const [loading,setLoading]=useState(false)
  const [formD, setFormD] = useState({
    title: '',
    subtitle: '',
    content: '',
    images: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormD({
      ...formD,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormD({
      ...formD,
      images: e.target.files[0]
    });
  };

  const handleSubmit = async () => {
    if(!formD.images){
      alert("Please select an image");
      return;
    }
    const formData = new FormData();
    formData.append('title', formD.title);
    formData.append('subtitle', formD.subtitle);
    formData.append('content', formD.content);
    formData.append('images', formD.images);
    try {
      setLoading(true)
      const response = await fetch(import.meta.env.VITE_BASE_URL+`/post_blog`, {
        method: 'POST',
        body: formData,
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // }
      });
      setLoading(false)
      if (response.ok) {
        alert('Blog post successful');
      } else {
        alert('Failed to post blog');
      }
    } catch (error) {
      console.error('Error posting blog:', error);
    }
  };
  

  return (
    <div className='w-full flex-col h-screen flex justify-center items-center'>
      <h1 className='text-3xl'>Post blog</h1>
      <div className='flex flex-col  lg:border border-gray-200 lg:w-1/3 w-full h-2/3 justify-between p-3 lg:p-5 lg:rounded-3xl lg:shadow-lg'>
        <div className="w-full flex flex-col gap-3">
          <input
            type="text"
            className=' h-8 border rounded-xl text-xl pl-2 focus:outline-none'
            name="title"
            id="title"
            placeholder="Title"
            value={formD.title}
            onChange={handleChange}
          />
          <input
            type="text"
            className=' h-8 border rounded-xl text-lg pl-2 focus:outline-none'
            name="subtitle"
            id="subtitle"
            placeholder="Subtitle"
            value={formD.subtitle}
            onChange={handleChange}
          />
          <textarea
            className='focus:outline-none  border rounded-lg overflow-y-auto pl-2'
            name="content"
            id="content"
            cols={30}
            rows={10}
            placeholder="Content"
            value={formD.content}
            onChange={handleChange}
          ></textarea>
          <input
            className='focus:outline-none'
            type="file"
            name="images"
            id="images"
            onChange={handleImageChange}
          />
        </div>
        <div
          className="submit w-full h-12 bg-red-800 rounded-xl hover:bg-red-600 flex items-center justify-center text-xl text-white"
          onClick={handleSubmit}
        >
         {loading?<Loader/>:'Submit'}
        </div>
      </div>
    </div>
  );
};

export default PostBlogs;
