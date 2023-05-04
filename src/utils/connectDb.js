import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGO_URL;
if (!MONGODB_URL)
  throw new Error("Please define the MONGO_URL environment inside .env");

let cached = global.mongoose;
console.log(cached)
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
const dbConnect = async () => {
    if (cached.conn) return cached.conn;
    // If a connection does not exist, we check if a promise is already in progress. If a promise is already in progress, we wait for it to resolve to get the connection
    if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose
      .connect(MONGODB_URL, opts)
      .then((mongoose) => mongoose);
  }
  try {
    cached.conn = await cached.promise;

  } catch (error) {
    cached.promise = null;
    throw error;
  }
  return cached.conn;
};

export default dbConnect;