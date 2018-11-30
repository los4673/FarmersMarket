const router = require("express").Router();
const transactionController = require("../../controllers/transactionsController");

// Matches with "/api/farmers"
router
  .route("/:id")
  .get(transactionController.findById)
  .post(transactionController.create);

// Matches with "/api/farmers/:id"

module.exports = router;
