const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM products"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
});

// Featured Products

router.get("/featured", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM products WHERE featured = true"
    );

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Best Sellers

router.get("/best-sellers", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM products WHERE bestseller = true"
    );

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
}); 

// New Arrivals

router.get("/new-arrivals", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM products WHERE new_arrival = true"
    );

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;