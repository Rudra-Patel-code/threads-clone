import mongoose from "mongoose";

let isConnected = false;

export const connectDb = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.DB_URI) return console.log("MONGODB_URL NOT PROVIDED");
  if (isConnected) return console.log("Already Connected");

  try {
    await mongoose.connect(process.env.DB_URI);
    isConnected = true;
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};
