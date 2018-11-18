import axios from "axios";

export default {
  // Gets all farmers
  getFarmers: function() {
    console.log("Route Hit")
    return axios.get("/api/farmers");
  },
  // Gets the farmers with the given id
  getFarmer: function(id) {
    return axios.get("/api/farmers/" + id);
  },
  // Deletes the farmer with the given id
  deleteFarmer: function(id) {
    return axios.delete("/api/farmers/" + id);
  },
  // Saves a farmer to the database
  saveFarmer: function(bookData) {
    return axios.post("/api/farmers", bookData);
  },
  updateFarmer: function(id) {
    return axios.put("/api/farmers/" + id);
  },


// Gets all users
  getUsers: function() {
    console.log("getUsers Route")
    return axios.get("/api/users");
  },
  // Gets the User with the given id
  getUser: function(id) {
    console.log("get user called with id: " + id)
    return axios.get("/api/users/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/farmers", userData);
  },

  saveTransaction: function(id, transaction) {
    return axios.post("/api/transactions/" + id, transaction)
  }
};
