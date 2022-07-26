const { get, add, deleteSeat } = require("../controller/seat.controller");

const router = require("express").Router();
router.get("/", get);
router.post("/", add);
router.delete("/:id", deleteSeat);

module.exports = router;
