const User = require("./model");
const Dog = require("../dogs/model");

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
    if (!req.body.username && !req.body.email) {
      return res.status(400).json({ message: "Username or email is required" });
    }
    const user = await User.findOneAndUpdate(
       {username: req.body.username},{email: req.body.email},
      {new: true}
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(201).json({message: "success", user: user});
  } catch (error) {
    res.status(501).json({message: error.message });
  }
}

const allUsers = async (req, res) => {
  try {
      const users = await User.find({}).populate('dogs', 'name breed age size toy _id');
      const response = users.map(user => ({
          userId: user._id,
          username: user.username,
          dogs: user.dogs.map(dog => ({
              dogId: dog._id,
              dogName: dog.name,
              breed: dog.breed,
              age: dog.age,
              size: dog.size,
              toy: dog.toy,
          }))
      }));
      res.status(200).json({ message: "success", users: response });
  } catch (error) {
      console.error("Error fetching dog owners:", error);
      res.status(500).json({ message: error.message });
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
  deleteUser: deleteUser
};