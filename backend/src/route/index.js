const productRoute = require("./product.route");
const seatRoute = require("./seat.route");
const orderRoute = require("./order.route");

const routers = (server) => {
  server.use("/product", productRoute);
  server.use("/seat", seatRoute);
  server.use("/order", orderRoute);
};

module.exports = routers;
