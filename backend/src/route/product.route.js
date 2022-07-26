const express = require("express");
const {
  get,
  add,
  getOne,
  edit,
  deleteProduct,
} = require("../controller/product.controller");
const router = express.Router();

router.get("/", get);

router.post("/", add);

router.get("/:id", getOne);

router.put("/:id", edit);

router.delete("/:id", deleteProduct);

module.exports = router;
