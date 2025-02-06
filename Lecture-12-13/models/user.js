const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/CrudApplication");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  imageUrl: String
});

module.exports = mongoose.model('user', userSchema);