import express from "express";
import {createCart,deleteCart ,getCart,getIdCart} from "../controllers/cart.js"
import {verifyToken,verifyTokenAndAdmin,verifyTokenAndAuthorization} from "../utils/verifyToken.js";
const router = express.Router();


//Create
router.post("/",verifyToken , createCart)

//Delete
router.delete("/:id" , verifyTokenAndAdmin ,deleteCart )

//GetId
router.get("/find/:userId" ,verifyTokenAndAuthorization  ,getIdCart )

//Get

router.get("/" , verifyTokenAndAdmin,getCart )




export default router ;



