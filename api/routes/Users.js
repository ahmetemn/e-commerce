
import express from "express";
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../utils/verifyToken.js";
import { updateUser, deleteUser, getIdUser, getAllUser, getUserStats } from "../controllers/users.js"
const router = express.Router();


//GET ALL

//UPDATE
router.put("/:id",verifyTokenAndAuthorization , updateUser);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization,deleteUser);

router.get("/stats" , verifyTokenAndAdmin , getUserStats)

//GET
router.get("/:id", verifyTokenAndAdmin, getIdUser);

router.get("/",verifyTokenAndAdmin, getAllUser);

//Get User Stats


export default router;