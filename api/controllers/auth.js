
import User from "../models/User.js"
import { createError } from "../utils/error.js";

export const registerUser = async (req, res, next) => {
        try {
          const newUser = new User({
             username:req.body.username,
             email : req.body.email ,
             password:req.body.password
          }) 
          
           await newUser.save();
           res.status(200).json("User has been created")

        } catch (error) {
             // next(createError(399 , "Eksik İçerik  "))
                next (error)
        }

}