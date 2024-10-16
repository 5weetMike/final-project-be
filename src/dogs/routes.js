const {Router} = require("express");
const dogRouter = Router();

const {addDogs, newDog} = require("./controllers");

dogRouter.post("/dogs/adddogs", addDogs);

module.exports = dogRouter;