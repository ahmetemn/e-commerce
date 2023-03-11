

import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/Auth.js"
import usersRoute from "./routes/Users.js"
import cookieParser from "cookie-parser";



mongoose.set('strictQuery', false)
dotenv.config()
const app  = express()
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/users" , usersRoute)
app.use('/api/auth' , authRoute)
app.use((err,req,res,next)=>{

    const errorStatus = err.status ||500
    const errorMessage = err.message ||"Something went wrong"


    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})














const connect = async () =>{
    try {

        await mongoose.connect(process.env.MONGO)
    } catch (error) {
        throw error
    }
}

mongoose.connection.on('connected' , () =>{
     console.log("MongoDb Connected")
})

mongoose.connection.on("disconnected" , ()=>{
    console.log("MongoDb not connected")
})



const Port =2800
app.listen(Port , ()=>{
    connect();
} )
