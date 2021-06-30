const mongoose = require("mongoose");
var mongodbUrl = "mongodb://localhost:27017/mern-pizza";
// mongodb://[username:password@]host1[:port1]/[database][?options]]
mongoose.connect(mongodbUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
var db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongodb Connection successfully");
});

db.on("error", () => {
  console.log("Mongodb failed connection");
});

module.exports = mongoose;
