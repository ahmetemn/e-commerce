

import User from "../models/User.js"
import { createError } from "../utils/error.js"


//Update 
export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updateUser)

    } catch (error) {
        next(createError(500, error))
    }
}


//Delete 

export const deleteUser = async (req, res, next) => {

    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).send("User has been deleted")

    } catch (error) {

        next(createError(500, error))
    }

}

//GetId 

export const getIdUser = async (req, res, next) => {

    try {
        const getId = await User.findById(req.params.id)
        if (!getId) {
            res.send("User not found")
        }
        else {
            res.status(200).json(getId)
        }


    } catch (error) {
        next(createError(500, error))
    }
}

//GetAllUser

export const getAllUser = async (req, res, next) => {
       
    try {
        const users = await User.find()  
        res.status(200).json(users)
    } catch (error) {
        next(createError(500, error))
    }
}

///Get User Stats 

export const getUserStats= async(req,res,next) =>{
     
    const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
              $project: {
                month: { $month: "$createdAt" },
              },
            },
            {
              $group: {
                _id: "$month",
                total: { $sum: 1 },
              },
            },
          ]);
          res.status(200).json(data)
    } catch (error) {
        next(createError(500, error))
    }
}