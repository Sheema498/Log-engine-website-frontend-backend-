import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import logRoutes from "./routes/logRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/logs", logRoutes);

app.listen(5000, () => console.log("Server running"));
console.log("ENV:", process.env.MONGO_URI);