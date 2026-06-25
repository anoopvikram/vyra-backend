const pool = require("../config/db");

// GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
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
};

// FEATURED PRODUCTS
const getFeaturedProducts = async (req, res) => {
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
};

// BEST SELLERS
const getBestSellers = async (req, res) => {
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
};

// NEW ARRIVALS
const getNewArrivals = async (req, res) => {
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
};

// GET PRODUCT BY ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getAllProducts,
  getFeaturedProducts,
  getBestSellers,
  getNewArrivals,
  getProductById,
};