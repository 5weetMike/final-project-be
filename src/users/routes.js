const { Router } = require("express");
const userRouter = Router();


const {signup, allUsers, updateUser, deleteUser} = require("./controllers");



// signup
userRouter.post("/users/signup", signup);

//Find all Users
userRouter.get("/users/allusers", allUsers);

userRouter.delete("/users/delete", deleteUser);

// update user profile
userRouter.put("/user/updateuser", updateUser);

module.exports = userRouter;