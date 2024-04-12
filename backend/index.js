import  express  from "express";
import  mongoose  from "mongoose";
import { configDotenv } from "dotenv";
import cors from 'cors'
import connectDB from "./src/db/index.js";
import fileUpload from 'express-fileupload';
import cookieParser from "cookie-parser"

const app = express();

configDotenv({ path: "./.env" });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',
    credentials: true,
  }));
  
  connectDB()


import router from './src/routes/routes.js'
app.use(router)

app.listen( process.env.PORT,  () => console.log("Server is running on port 3000"));

