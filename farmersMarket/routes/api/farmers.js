const router = require("express").Router();
const farmersController = require("../../controllers/farmersController");
const transactionController = require("../../controllers/transactionsController");

// Matches with "/api/farmers"
router.route("/")
  .get(farmersController.findAll)
  .post(farmersController.create);

// Matches with "/api/farmers/:id"
router
  .route("/:id")
  .get(farmersController.findById)
  .post(transactionController.create)
  .put(farmersController.update)
  .delete(farmersController.remove);

module.exports = router;
