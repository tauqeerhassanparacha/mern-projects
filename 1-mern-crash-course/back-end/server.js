import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  console.log(`Server is running at http://localhost:5000`);
});
