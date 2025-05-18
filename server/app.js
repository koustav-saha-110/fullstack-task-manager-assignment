import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";

// Connecting to MongoDB
import { connectDB } from "./config/db.connection.js";

dotenv.config({});
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
};

const PORT = process.env.PORT || 8000;
const app = express();

// Middlewares
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// Importing Routes
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";

// Routers
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/tasks", taskRoutes);

// Index EndPoint
app.get('/', (_, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to the Backend of Task-Management Web App"
    });
});

// Listening to the Server
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running at: http://localhost:${PORT}`);
});
