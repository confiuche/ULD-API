import express from "express";
import { createAccount } from "../controller/userController.js";

const userRoute = express.Router();

//create user
userRoute.post("/create", createAccount)


export default userRoute