import express from "express";
import dotenv from "dotenv";
import chatRoutes from "./routes/chat.routes.js";
import { chatLimiter } from "./middleware/ratelimiter.js";



dotenv.config();

const app = express();

app.use(express.json());

app.use("/chat", chatLimiter, chatRoutes);

export default app;
