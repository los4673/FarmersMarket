const router = require("express").Router();
const farmersRoutes = require("./farmers");
const usersRoutes = require("./users");
const transactionsRoutes = require("./transactions");



// Farmers Routes
router.use("/farmers", farmersRoutes);
router.use("/users", usersRoutes);
router.use("/transactions", transactionsRoutes);

module.exports = router;
// 