import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import faqRoutes from "./routes/faqRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/api/faqs", faqRoutes);
app.use(express.static("public")); // Serve frontend files

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
