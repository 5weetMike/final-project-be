require("dotenv").config();
const express = require("express");
const cors = require("cors");

const netlifyUrl = "/.netlify/functions/api"

const connection = require("./db/connection");
const userRouter = require("./users/routes");

const port = process.env.PORT || 5001;

const app = express();
console.log(process.env.ORIGIN)
const origin = process.env.ORIGIN
const whitelist = [origin]

app.use(express.json());

const corsOrigin = {origin:function(origin,callback){
  if(whitelist.includes(origin)){
    callback(null,true)
  }else{
    console.log("origin: ", origin, " not allowed")
    callback(new Error("not allowed by cors"))
  }
}, credentials:true}

app.use(cors(corsOrigin));

app.get("/.netlify/functions/api/health", (req, res) => {
    res.status(200).json({ message: "API is healthy" });
  });
   
  app.use(netlifyUrl, userRouter);
   
  module.exports = app;
