import { Schema, model } from "mongoose";

const ApplyModel= new Schema({
    name:String,
    email: String, 
    PhoneNumber:String,
    dob: String,   
    state:String, 
    country:String,
 }, { timestamps: true },
)

export const Apply = model("Apply",ApplyModel)