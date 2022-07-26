const Product = require("../Modal/Product");

exports.add = async (req, res) => {
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
    res.json({
      message: "This is product / route",
      product: savedProduct,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  await Product.deleteOne({ _id: id });
  res.json({
    message: "Successfully deleted",
  });
};
exports.get = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
exports.getOne = async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id).select("description name");
  res.json(product);
};
exports.edit = async (req, res, next) => {
  const { id } = req.params;
  const { name, imageUrl, description, price, quantity } = req.body;

  await Product.findByIdAndUpdate(id, {
    name,
    imageUrl,
    description,
    price,
    quantity,
  });
  const product = await Product.findById(id);

  // product.name = name || product.name;
  // product.imageUrl = imageUrl || product.imageUrl;
  // product.description = description || product.description;
  // product.quantity = quantity || product.quantity;
  // await product.save();
  res.json(product);
};
