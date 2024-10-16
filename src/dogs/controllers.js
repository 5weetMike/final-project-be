const Dog = require("./model");
const User = require("../users/model");

const addDogs = async (req, res) => {
    try {
        const dog = await Dog.create({
            owner: req.body.ownerId,
            dog: req.body.dogId,
            name: req.body.name,
            breed: req.body.breed,
            age: req.body.age,
            size: req.body.size,
            toy: req.body.toy,
        });
        const updatedUser = await User.findOneAndUpdate({username: req.body.username}, { $push: { dogs: dog._id } });
        res.status(201).json({message: "success", dogs: dog, updateduser: updatedUser});
    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};

module.exports = {
    addDogs: addDogs,
};