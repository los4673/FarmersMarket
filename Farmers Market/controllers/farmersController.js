const db = require("../models");

// Controller methods that will be used by API
module.exports = {
  findAll: function(req, res) {
    db.Farmer
      .find(req.query)
      .sort({ date: -1 })// Sort by latest 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findById: function(req, res) {
    db.Farmer
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Farmer
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Update function
  // Not currently working 
  update: function(req, res) {
    db.Farmer
      .findOneAndUpdate({ _id: req.params.id }, {$set: {"inventory": req.body}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Farmer
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
