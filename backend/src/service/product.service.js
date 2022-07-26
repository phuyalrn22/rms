const Product = require("../Modal/Product");

exports.orderProduct = async (productId, quantity) => {
  const product = await Product.findById(productId).select("quantity");
  product.quantity = product.quantity - quantity;
};

exports.getQuantity = async (productId) => {
  const product = await Product.findById(productId).select("quantity");
  return product.quantity;
};
