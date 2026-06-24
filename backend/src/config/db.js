import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO DB CONNECTED SUCCESSFULLY!");
    
    
  } catch (error) {
    console.log("Error connecting to Mongo DB", error);
    process.exit(1); // exit with failure
  }
}