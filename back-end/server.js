import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
// import path for connecting front end with backend to resolve back and front end under same ip
import path from "path";

import productRoutes from "./routes/product.route.js";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

const __dirname = path.resolve();

app.use(express.json()); // allows us to json data comes from the body

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/front-end/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front-end", "dist", "index.html"));
  });
}

app.listen(5000, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${port}`);
});
