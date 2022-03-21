const res = require("express/lib/response");

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("Your Auth file token" + token);
  if (token===undefined ) {
    console.log("inif")
    res.render("Login");
  } else {
    next();
  }
};
exports.auth = auth;
