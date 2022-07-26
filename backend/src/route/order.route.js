const {
  addOrder,
  getOrder,
  checkOut,
} = require("../controller/orderController");

const router = require("express").Router();

router.post("/:seatId", addOrder);

router.get("/:seatId", getOrder);
router.patch("/:seatId", checkOut);

module.exports = router;
