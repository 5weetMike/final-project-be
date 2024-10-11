require("dotenv").config();
const serverless = require("serverless-http");
 
const connection = require("../src/db/connection");
const app = require("../src/server");
 
const port = process.env.PORT || 5001;
 
app.listen(port, () => {
  connection();
  console.log(`Local app listening on port ${port}!`);
});
 
const handler = serverless(app);
module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};