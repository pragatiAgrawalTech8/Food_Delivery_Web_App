import mongoose from "mongoose";
import dns from "dns/promises";
const {username,password} = process.env
dns.setServers(["1.1.1.1", "8.8.8.8"]);
// export const connectionStr = "mongodb+srv://"+username+":"+password+"@cluster0.z5fjl75.mongodb.net/RestroDB?appName=Cluster0"
export const connectionStr = "mongodb://prag90987_db_user:uYzQomDYL77Lnrap@ac-po5wtkz-shard-00-00.z5fjl75.mongodb.net:27017,ac-po5wtkz-shard-00-01.z5fjl75.mongodb.net:27017,ac-po5wtkz-shard-00-02.z5fjl75.mongodb.net:27017/RestroDB?ssl=true&replicaSet=atlas-mys4nt-shard-0&authSource=admin&appName=Cluster0"

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(connectionStr);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}