
import User from "../models/User.js"
import { createError } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"


      export const registerUser = async (req, res, next) => {

        const salt = await bcryptjs.genSaltSync(8);
        const hash = await bcryptjs.hashSync(req.body.password, salt);

        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: hash
        });
        try {
          await newUser.save();
          //succesfully added  201
          res.status(201).json("User has been created")

        } catch (error) {
          // next(createError(399 , "Eksik İçerik  "))
          res.status(500).json(error)
        }

      }

      export const loginUser = async (req, res, next) => {
        try {
          const user = await User.findOne({ email: req.body.email });
          if (!user) return next(createError(404, "User not found!"));

          const isPasswordCorrect = await bcryptjs.compare(
            req.body.password,
            user.password
          );
          if (!isPasswordCorrect)
            return next(createError(400, "Wrong password or username!"));

          const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SEC
          );

          const { password, isAdmin, ...otherDetails } = user._doc;
          res.cookie("access_token", token, {
              httpOnly: true,
            })
            .status(200)
            .json({ details: { ...otherDetails }, isAdmin });
        } catch (err) {
          next(err);
        }
      };
           