const express = require("express");
const Submit_Registration_Route = express.Router();
const Signup_Controller = require("../Controllers/Signup_controller");

Submit_Registration_Route.post(
  "/submitRegisteration",
  Signup_Controller.Submit_Registration_Controller
);
exports.Submit_Registration_Route = Submit_Registration_Route;
