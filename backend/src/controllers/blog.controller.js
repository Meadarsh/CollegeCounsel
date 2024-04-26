import { asyncHandler } from "../utility/asyncHandler.js";
import { v2 as cloudinary } from "cloudinary";
import { Blog } from "../models/blog.model.js";

cloudinary.config({
  cloud_name: `dkfnivsuv`,
  api_key: "144754317187248",
  api_secret: "OoO5TQ4ERiM54dcBuQjdicyizkg",
});

export const PostBlog = asyncHandler(async (req, res) => {
  try {
    const { title, content,subtitle } = req.body;
    const imageFile = req?.files?.images;
    if (req.files?.images) {
      const fileBuffer = Buffer.from(imageFile.data);
      const dataUrl =
        "data:" +
        imageFile.mimetype +
        ";base64," +
        fileBuffer.toString("base64");
      const result = await cloudinary.uploader.upload(dataUrl);
      const create = await Blog.create({
        public_id: result.public_id,
        title: title,
        content: content,
        subtitle:subtitle,
        path: result.secure_url,
      });
      if (!create) {
        res.send({ status: false, message: "Unable to post" });
      }

      res.send({ status: true, message: "Posted successfully" });
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    res.send({ status: false, message: "Internal server error" });
  }
});

export const getBlogs = asyncHandler(async (req, res) => {
  try {
  const blogs = await Blog.find();
  res.send(blogs);
  } catch (error) {
    res.send({ status: false, message: "Internal server error" });
  }
});
export const getBlogById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if(!blog) {
      return res.send({status: false, message: "Blog not found"});
    }
    res.send(blog);
  } catch (error) {
    res.send({ status: false, message: "Internal server error" });
  }
});
