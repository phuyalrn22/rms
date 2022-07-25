const productRoute = require("./product.route");
const routers = (server) => {
  server.use("/product", productRoute);
};

module.exports = routers;
