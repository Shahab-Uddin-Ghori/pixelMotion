import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }) //corss origin
);
app.use(
  express.json({
    limit: "16kb",
  })
); // for data formating

app.use(
  express.urlencoded({
    extended: "true",
    limit: "16kb",
  })
); // data in url

app.use(express.static("public")); // public assets
app.use(express.cookieParser()); // access cookies from user browser
export { app };
