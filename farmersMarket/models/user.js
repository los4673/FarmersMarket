// Dependecies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  company: {
    type: String,
    trim: true,
    required: true
  },
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
  transactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Transactions"
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
