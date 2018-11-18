// Dependecies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  company: {
    type: String,
    trim: true
  },
  to: {
    type: String,
    trim: true
  },

  from: {
    type: String,
    trim: true
  },
  amount: {
    type: Number,
    trim: true
  },
  total: {
    type: Number,
    trim: true
  },
  tx: {
    type: Number,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Transactions = mongoose.model("Transactions", transactionSchema);

module.exports = Transactions;
