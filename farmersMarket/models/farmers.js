const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const farmersSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  location: {
    type: String,
    trim: true,
    required: true
  },
  picURL: String,
  ethAddress: {
    type: String,
    trim: true,
    validate: [
      function(input) {
        return (input.length = 40);
      },
      "Ethereum address should be 40 Characters long."
    ]
  },
  price: {
    type: Number,
    trim: true
  },
  transactions: {
    type: Schema.Types.ObjectId,
    ref: "Transactions"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Farmer = mongoose.model("Farmer", farmersSchema);

module.exports = Farmer;
