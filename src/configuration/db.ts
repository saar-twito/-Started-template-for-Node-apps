import mongoose from "mongoose";

export const connectMongoose = () => {
  mongoose.connect(process.env.MONGODB_CONNECTION as string)
    .then(() => console.log("MongoDB is up and running!"))
    .catch(() => console.log("MongoDB is down..."));
}