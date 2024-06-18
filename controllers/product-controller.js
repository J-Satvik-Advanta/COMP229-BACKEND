const Product = require('../models/product');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: error.message });
  }
};

// Update an existing product
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (deletedProduct) {
      res.status(200).json(deletedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: error.message });
  }
};

// Delete all products
const deleteAllProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.status(200).json({ message: 'All products deleted' });
  } catch (error) {
    console.error("Error deleting all products:", error);
    res.status(500).json({ message: error.message });
  }
};

// Find products by name
const findProductsByName = async (req, res) => {
  try {
    const name = req.query.name;
    if (!name) {
      return res.status(400).json({ message: "Name query parameter is required" });
    }

    const regex = new RegExp(`^${name}$`, 'i');

    const products = await Product.find({ name: regex });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found with the given name" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error finding products by name:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
  findProductsByName
};
