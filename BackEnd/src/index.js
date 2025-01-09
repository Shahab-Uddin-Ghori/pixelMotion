import dotenv from "dotenv/config.js";
import express from "express";
import connectDB from "./db/dataBase.connect.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.LOCAL_PORT || 8000, () => {
      console.log("Server is running on port", process.env.LOCAL_PORT || 8000);
    });
    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("🚀MONGODB connection failed ~ error:", error);
  });
