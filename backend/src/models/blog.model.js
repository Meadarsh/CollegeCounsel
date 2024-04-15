import { Schema, model } from "mongoose";

const BlogModel= new Schema({
    uploaded_by:String||'',
    title: String, 
    content:String,
    path: String,   
    upload_time: {type: Date, default: Date.now}, 
    updatedTime:String, 
    public_id:String,
})

export const Blog = model("Blogs",BlogModel)