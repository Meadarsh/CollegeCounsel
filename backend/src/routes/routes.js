import { Router } from "express";
import { loginUser } from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.middleware.js";
import { registerUser } from "../controllers/user.controller.js";
import { PostBlog, getBlogById, getBlogs } from "../controllers/blog.controller.js";
import { ApplyForm } from "../controllers/apply.controller.js";


const router =Router()
router.route("/").get(async(req,res)=>{
    res.send({message:"hello"} )
})
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/apply").post(ApplyForm)
router.route("/blogs").get(getBlogs);
router.route("/getblogbyId:id").get(getBlogById);

//  Secure routes  
router.route("/post_blog").post(PostBlog)
// router.route("/").post(auth,)


export default router
