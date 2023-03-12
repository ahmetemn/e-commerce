

import express from "express";
import{AddProduct,UpdateProduct,deleteProduct,getProducts,getIdProducts} from "../controllers/products.js"
import {verifyTokenAndAdmin} from "../utils/verifyToken.js"
const router =express.Router();

//Create
router.post("/" , verifyTokenAndAdmin , AddProduct)

//Update
router.put("/:id",verifyTokenAndAdmin , UpdateProduct);

//DELETE
router.delete("/:id", verifyTokenAndAdmin,deleteProduct);

//GET ID
router.get("/:id", getIdProducts);

//GET
router.get("/", getProducts);


export default router;
