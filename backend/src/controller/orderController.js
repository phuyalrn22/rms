const Order = require("../Modal/Order");
const { getQuantity } = require("../service/product.service");

exports.getOrder = async (req, res) => {
  const { seatId } = req.params;
  const order = await Order.find({ status: false, seatId: seatId })
    .populate({
      select: "name",
      path: "productId",
    })
    .populate("seatId");
  return res.json(order);
};

exports.addOrder = async (req, res) => {
  const { seatId } = req.params;
  const { productId, quantity } = req.body;
  const existingQuantity = await getQuantity(productId);
  if (existingQuantity < quantity) {
    return res.status(400).json({
      message: "Insufficient quantity",
    });
  }
  const order = new Order({
    status: false,
    quantity,
    seatId,
    productId,
  });
  await order.save();
  res.json({ order });
};

exports.checkOut = async (req, res) => {
  const { seatId } = req.params;
  const order = await Order.updateMany(
    { status: false, seatId: seatId },
    { status: true }
  );
  return res.json({ message: "Successfully checkout" });
};
