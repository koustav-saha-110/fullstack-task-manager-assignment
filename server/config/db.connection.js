import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected using", conn.connections[0].host);
    } catch (error) {
        console.error("MongoDB not connected", error.message);
        process.exit(1);
    }
}
