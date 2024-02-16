const Product = require("../models/product.model.js");

const getProducts = async (req, res) => {
    try {
    const prod = await Product.find();
    res.status(200).json(prod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const prodById = await Product.findById(id);
    res.status(200).json(prodById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createProd = async (req, res) => {
  try {
    const prod = await Product.create(req.body);
    res.status(200).json(prod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateProd = async (req, res) => {
  try {
    const { id } = req.params;
    const prod = await Product.findByIdAndUpdate(id, req.body);

    if (!prod) {
      res.status(400).json({ message: "Product not found" });
    }

    const updatedProd = await Product.findById(id);
    res.status(200).json(updatedProd);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteProd = async (req, res) => {
  try {
    const { id } = req.params;
    const prod = await Product.findByIdAndDelete(id);

    if (!prod) {
      res.status(404, "Product not found");
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getProducts,
  getProductById,
  createProd, 
  updateProd, 
  deleteProd
};