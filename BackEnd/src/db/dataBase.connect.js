import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const connectDB = async () => {
  try {
    const connectionIstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST:${connectionIstance.connection.host}`
    );
  } catch (error) {
    console.log("🚀 ~ MONGOD connention FAILED:", error);
    process.exit(1);
  }
};
export default connectDB;
