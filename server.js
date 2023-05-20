import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";


const app = express();

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 8080

app.use("/api/v1/users", userRoute)

app.listen (PORT, console.log(`Server started at ${PORT}`))