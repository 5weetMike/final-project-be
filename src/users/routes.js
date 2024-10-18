const { Router } = require("express");
const userRouter = Router();

const {signup, allUsers,updateUser} = require("./controllers");

// signup
userRouter.post("/users/signup", signup);

//Find all Users
userRouter.get("/users/allusers", allUsers);

// update user profile
userRouter.put("/users/updateuser", updateUser);




module.exports = userRouter;