

import Product from "../models/Product.js"

import { createError } from "../utils/error.js"

//Add Product
export const AddProduct = async (req, res, next) => {

    const newAddProduct = new Product(req.body)

    try {
        const savedProduct = await newAddProduct.save()
        res.status(200).json(savedProduct);

    } catch (error) {

        next(createError(500, error))
    }
}

///Update Product 
export const UpdateProduct = async (req, res, next) => {

    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updateProduct)
    } catch (error) {
        next(createError(500, error))
    }
}


///Delete

export const deleteProduct = async (req, res, next) => {
    try {

        await Product.findByIdAndDelete(req.params.id)
        res.status(200).send("Products Has Been Deleted")

    } catch (error) {
        next(createError(500, error))
    }
}


//Get Product 

export const getProducts = async (req, res, next) => {

     //sort rating ! 
    try {

        const getProducts = await Product();
        res.status(200).json(getProducts)

    } catch (error) {
        next(createError(500, error))
    }
}

//Get Id Products


export const getIdProducts = async (req, res, next) => {
    try {

        const getproductsId = await Product.findById(req.params.id)
        if (!getproductsId) {
            res.status(200).json(getproductsId)
        }
        else{
            res.send("Product has been deleted")
        }

    } catch (error) {
        next(createError(500, error))
    }
}