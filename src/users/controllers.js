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

  const login = async (req, res) => {
try {
const user = await User.findOne(
  {$or: [{username: req.body.username}, { email: req.body.email }] 
})
    res.status(201).json({message: "success", user: user});
  } catch (error) {
    res.status(501).json({message: error.message, error: error});
  }
};


// Update user details 
async function updateUser(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { $or: [{ username: req.body.username }, { email: req.body.email }] },
      {
        username: req.body.newusername || req.body.username,
        email: req.body.newemail || req.body.email
      },
      { new: true }
    );

    res.status(201).json({ message: "success", user: user });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
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

//   const deleteUser = async (req, res) => {
//     const user = await User.deleteOne({
//         username: req.body.username
//     });
//     res.send({message: "success", deleteUser: user});
// };

  // const deleteUser = async (req, res) => {
  //   try {
  //     const username = req.user.username;
  //     const user = await User.deleteOne(username);
  
  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }
  //     res.status(200).json({ message: 'Account deleted successfully' });
  //   } catch (error) {
  //     console.error('Error deleting account:', error);
  //     res.status(500).json({ message: 'Failed to delete account' });
  //   }
  // };

  const deleteUser = async (req, res) => {
try {
      const deletedUser = await User.deleteOne({username: req.body.username});
      res.status(201).json({ message: 'success', deletedUser: deletedUser});
    } catch (error) {
      console.log('error deleting account:', error);
      res.status(501).json({ message: 'failed to delete account', error: error});
    }
  };



module.exports = {
  signup: signup,
  allUsers: allUsers,
  updateUser: updateUser,
  deleteUser: deleteUser,
  login: login,
};