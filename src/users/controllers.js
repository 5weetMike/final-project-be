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

  const deleteUser = async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findByIdAndDelete(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
      console.error('Error deleting account:', error);
      res.status(500).json({ message: 'Failed to delete account' });
    }
  };

module.exports = {
  signup: signup,
  allUsers: allUsers,
  deleteUser: deleteUser,
};