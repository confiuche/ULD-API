import express from "express";

const awbRoute = express.Router();


//create user
awbRoute.post("/create", createAccount)


export default awbRoute