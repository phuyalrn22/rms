const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;
const MONGO_URL = "";
const router = require("./route");

// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.writeHead(200, { "Content-Type": "text/html" });
//   if (req.url === "/product") {
//     res.write("Product Page");
//   } else {
//     res.write("<h1>Hello World</h1>");
//   }
//   res.end();
// });

// server.listen(8000);

const server = express();
server.use(express.json());
router(server);
mongoose
  .connect(MONGO_URL)
  .then((conn) => console.log(`database connected Success`))
  .catch((err) => console.log(err));
server.listen(PORT, () => console.log(`server at ${PORT}`));
