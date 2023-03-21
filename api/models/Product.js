import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({

    title: {
        type: String,
        unique:true,
        required: true,

    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
    },
    categories: {
        type: Array ,
        required: true ,
 
    },
    size: {
        type: Array ,
        required: true ,
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    inStock:{
        type:Boolean,
        default:true,
    }



} , {timestamps:true})


export default mongoose.model("Product", ProductSchema)