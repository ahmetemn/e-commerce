import express from "express";
import {createOrder , deleteOrder , updateOrder,getOrderId , getOrders,getMothlyIncome }  from  "../controllers/order.js"
import  {verifyToken , verifyTokenAndAdmin , verifyTokenAndAuthorization} from "../utils/verifyToken.js"
const router = express.Router();


//Create Order
router.post("/", verifyToken , createOrder)


//Update Order 
router.put("/:id" , verifyTokenAndAdmin , updateOrder )


//Delete Order 
router.delete("/:id" , verifyTokenAndAdmin , deleteOrder)

//Get Monthly Income 

router.get("/income" ,verifyTokenAndAdmin, getMothlyIncome)

//Get User Orders

router.get("/:id" , verifyTokenAndAuthorization , getOrderId)

router.get("/" , verifyTokenAndAdmin , getOrders)




export default router; 