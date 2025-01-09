import dotenv from "dotenv/config.js";
import express from "express";
import connectDB from "./db/dataBase.connect.js";

const app = express();

connectDB();
