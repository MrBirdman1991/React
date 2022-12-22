import express, { Router } from "express";
import { createUser, loginUser } from "../controllers/users.controller.js";
import { validate } from "../middlewares/validateResource.js";
import { userLoginValidation, userRegistrationValidation } from "../validation/user.validation.js";


const router = Router();


// @route   POST /api/v1/users/register
// @desc    Creates new User in DB
// @access  public
router.post("/register",validate(userRegistrationValidation) ,createUser)

// @route   POST /api/v1/users/login
// @desc    User get loggin
// @access  public
router.post("/login",validate(userLoginValidation) ,loginUser)

export default router