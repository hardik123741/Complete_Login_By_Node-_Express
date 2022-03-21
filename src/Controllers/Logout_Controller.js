const res = require("express/lib/response");

const Logout_Controller = (req, res) => {
  res.clearCookie("jwt");

  res.render("Home");
};
exports.Logout_Controller = Logout_Controller;
