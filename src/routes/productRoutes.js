const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getFeaturedProducts,
  getBestSellers,
  getNewArrivals,
  getProductById,
} = require("../controllers/productController");

// GET ALL PRODUCTS
router.get("/", getAllProducts);

// FEATURED PRODUCTS
router.get("/featured", getFeaturedProducts);

// BEST SELLERS
router.get("/best-sellers", getBestSellers);

// NEW ARRIVALS
router.get("/new-arrivals", getNewArrivals);

router.get("/:id", getProductById);

module.exports = router;