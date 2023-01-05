import UserModel from "../models/UserModel.js";
import { withErrorHandler } from "../utils/withErrorHandler.js";
import bcrypt from "bcrypt";
import {HttpError} from "../utils/HttpError.js";
import jwt from "jsonwebtoken"

export const createUser = withErrorHandler(async (req, res, next) => {
  const { userName, email, password } = req.body;

  const existingUser = await UserModel.findOne({ email });
  if(existingUser){
    throw new HttpError({status: 422, message: "User existiert bereits in db"})
  }

  const hashedPw = await bcrypt.hash(password, 13);

  const createdUser = await UserModel.create({
    userName,
    email,
    password: hashedPw,
  });

  res.status(201).json(createdUser);
});


export const loginUser = withErrorHandler(async (req, res, next) => {
    const {  email, password } = req.body;
  
    const existingUser = await UserModel.findOne({ email });

    if(!existingUser){
        throw new HttpError({status: 401, message: "Wrong email or password"});
    }

    const comparedPw = await bcrypt.compare(password, existingUser.password)

    if(!comparedPw){
        throw new HttpError({status: 401, message: "Wrong email or password"});
    }
   
    const newJwt = jwt.sign({id: existingUser.id}, process.env.JWT_SECRET, {expiresIn: "5h"});

    res.json(newJwt);
  });