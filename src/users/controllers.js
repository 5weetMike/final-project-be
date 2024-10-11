const User = require("./model");

const signup = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
          });
        console.log(user);
      res.status(201).json({message: "success", user: user})
    } catch (error) {
      console.log("error", error)
        res.status(501).json({message: error.message, error: error})
    }
  }

  const allUsers = async (req, res) => {
    try {
      const users = await User.find({});
      res.status(201).json({message: "success", users: users});
    } catch (error) {
      console.log("error", error)
      res.status(501).json({message: error.message, error: error});
    }
  };

module.exports = {
  signup: signup,
  allUsers: allUsers,
};