const { Router } = require("express");
const userRouter = Router();

const {signup, allUsers, deleteUser} = require("./controllers");

// signup
userRouter.post("/users/signup", signup);

//Find all Users
userRouter.get("/users/allusers", allUsers);

userRouter.del("/user/delete", deleteUser);

module.exports = userRouter;