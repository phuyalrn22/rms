const express = require("express");
const Product = require("../Modal/Product");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const products = await Product.find();
  res.json(products);
});

router.post("/", async (req, res) => {
  const { name, imageUrl, description, price, quantity } = req.body;
  const newProduct = new Product({
    name,
    imageUrl,
    description,
    price,
    quantity,
  });
  try {
    var savedProduct = await newProduct.save();
    console.log(newProduct);
    res.json({
      message: "This is product / route",
      product: savedProduct,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
