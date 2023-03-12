import Cart from "../models/Cart.js";

import { createError } from "../utils/error.js";



//Create
export const  createCart = async(req,res,next) =>{
        
        const savedCard = new Cart(req.params)
    try {
        
        const save = await savedCard.save();
        res.status(200).json(save);

    } catch (error) {
        next(createError(500 , error))
    }

}   

///Delete

export const deleteCart= async (req,res,next) =>{
     
    try {
            await Cart.findByIdAndDelete(req.params.id)
            res.status(200).send("Cart has been deleted")

    } catch (error) {
        next(createError(500 , error))
    }
}

//Get 
export const getCart = async (req,res,next) =>{
     
    try {
        
        const getAllCart = await Cart.find();
        res.status(200).json(getAllCart)

    } catch (error) {
        next(createError(500 , error))
    }
     
}

//GetIdCart

export const getIdCart = async (req,res,next)=>{
     
    try {
        
            const  getCartId = await Cart.findOne({userId:req.params.userId})
            res.status(200).json(getCartId);

    } catch (error) {
        next(createError(500, error))
    }
}
 