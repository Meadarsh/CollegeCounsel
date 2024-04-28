import { Schema, model } from "mongoose";

const ApplyModel= new Schema({
    name:String,
    email: String, 
    PhoneNumber:String,
    city: String,   
    state:String, 
    country:String,
    course:String
 }, { timestamps: true },
)

export const Apply = model("Apply",ApplyModel)