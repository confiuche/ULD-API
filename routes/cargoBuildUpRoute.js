import express from "express";

const cargobuildupRoute = express.Router();


//create user
cargobuildupRoute.post("/create", createAccount)


export default cargobuildupRoute