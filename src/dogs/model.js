const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User modelrequired: true,
          },
    name: {
        type: String,
        required: true,
        unique: false,
    },
    breed: {
        type: String,
        required: true,
        unique: false,
    },
    age : {
        type: Number,
        required: true,
        unique: false,
    },
    size : {
        type: String,
        required: true,
        unique: false,
    },
    toy : {
        type: String,
        required: true,
        unique: false,
    },
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;