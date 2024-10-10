const { Router } = require("express");
const userRouter = Router();

const {signup, allUsers} = require("./controllers");

// signup
userRouter.post("/users/signup", signup);

//Find all Users
userRouter.get("/users/allusers", allUsers);

module.exports = userRouter;