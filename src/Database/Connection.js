const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/MERN")
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log("Connection problem" + err);
  });
exports.mongoose=mongoose;