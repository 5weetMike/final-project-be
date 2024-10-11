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

  const deleteUserByUsername = async (req, res) => {
try {
      const deletedUser = await User.deleteOne({username: req.body.username});
      if (user) 
      res.status(201).json({ message: 'success', deletedUser: deletedUser});
    } catch (error) {
      console.log('error deleting account:', error);
      res.status(501).json({ message: 'failed to delete account', error: error});
    }
  };

module.exports = {
  signup: signup,
  allUsers: allUsers,
  deleteUserByUsername: deleteUserByUsername,
};