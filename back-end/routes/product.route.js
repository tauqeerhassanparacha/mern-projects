import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Get all the products
router.get("/", getProducts);

// incoming product data handle
router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product by id
router.delete("/:id", deleteProduct);

export default router;
