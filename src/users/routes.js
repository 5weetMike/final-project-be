const { Router } = require("express");
const userRouter = Router();


const {signup, allUsers,updateUser} = require("./controllers");

const {signup, allUsers, deleteUserByUsername} = require("./controllers");


// signup
userRouter.post("/users/signup", signup);

//Find all Users
userRouter.get("/users/allusers", allUsers);


// update user profile
userRouter.put("/user/updateuser", updateUser);



userRouter.delete("/users/deleteuserbyusername", deleteUserByUsername);



module.exports = userRouter;