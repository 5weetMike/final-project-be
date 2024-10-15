require("dotenv").config();
const express = require("express");
const cors = require("cors");

const netlifyUrl = "/.netlify/functions/api"

const connection = require("./db/connection");
const userRouter = require("./users/routes");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

const corsOrigin =process.env.ORIGIN

app.use(cors({origin: corsOrigin}));

app.get("/.netlify/functions/api/health", (req, res) => {
    res.status(200).json({ message: "API is healthy" });
  });
   
  app.use(netlifyUrl, userRouter);
   
  module.exports = app;
