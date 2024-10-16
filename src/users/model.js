const mongoose = require("mongoose"); 
   
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    dogs: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Dog', // Reference to the Dog model
        }],
  });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;
   