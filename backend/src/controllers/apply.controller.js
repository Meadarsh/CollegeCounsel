import { asyncHandler } from "../utility/asyncHandler.js"
import { Apply } from "../models/apply.model.js";
export const  ApplyForm = asyncHandler(async(req,res)=>{
    try {
         const create = await Apply.create(req.body)
         console.log(create);
         if (create){
             res.status(201).json({success:true,message:"Applied Successfully!"})
         }else{
            res.status(401).json({success:false,message:"Failed Apply"})
        }
    } catch (error) {
        console.log(error);
    }
})