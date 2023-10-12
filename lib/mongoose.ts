import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) {
    return console.log("MISSING MONGODB_URI");
  }

  if (isConnected) {
    console.log("Mongodb is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "DevFlo",
    });

    isConnected = true;

    console.log("Mongodb is connected");
  } catch (error) {
    console.log("Mongodb connection error", error);
  }
};
