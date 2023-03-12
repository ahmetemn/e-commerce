

import Order from "../models/Order.js"
import { createError } from "../utils/error.js"


//Create
export const createOrder = async (req, res, next) => {

    const newOrder = new Order(req.body)
    try {

        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)

    } catch (error) {
        next(createError(500, error))
    }
}

//Update 

export const updateOrder = async (req, res, next) => {

    try {
        const update = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(update)
    } catch (error) {
        next(createError(500, error))
    }
}

//Delete
export const deleteOrder = async (req, res, next) => {

    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).send("Order has been deleted")
    } catch (error) {

    }
}

//Get User Orders
export const getOrderId = async (req, res, next) => {
    try {

        const get = await Order.find({ userId: req.params.userId })
        res.status(200).json(get)

    } catch (error) {
        next(createError(500, error))
    }
}

//Get All 

export const getOrders = async (req, res, next) => {

    try {
        const getAll = await Order.find();
        res.status(200).json(getAll)

    } catch (error) {
        next(createError(500, error))
    }
}


export const getMothlyIncome = async (req, res, next) => {

    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
}
