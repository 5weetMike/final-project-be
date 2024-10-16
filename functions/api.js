require("dotenv").config();
const serverless = require("serverless-http");
const cors = require("cors")
 
const connection = require("../src/db/connection");
const app = require("../src/server");
 
const port = process.env.PORT || 5001;

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
 
app.listen(port, () => {
  connection();
  console.log(`Local app listening on port ${port}!`);
});
 
const handler = serverless(app);
module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};