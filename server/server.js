import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import URLRoute from "./Routes/urls.js";
import { connectDB } from "./Utils/mongodb.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Ensure DB connection before every request
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({ ok: false, error: "Database connection failed" });
  }
});

app.use("/", URLRoute);

const PORT = process.env.PORT || 5050;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is Running on Port: ${PORT}`);
  });
}

export default app;
