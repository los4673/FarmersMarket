const db = require("../models");

// Controller methods that will be used by API to POST new transactions
module.exports = {
  create: function(req, res) {
    db.Transactions.create(req.body)
      .then(dbTransaction =>
        db.User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { transactions: dbTransaction.id } },// Save transaction to users transaction history
          { new: true }
        )
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .populate("Transactions") // Populate all Transactions associated with this user.
      .then(dbModel => res.json(dbModel.Transactions))
      .catch(err => res.status(422).json(err));
  }
};
