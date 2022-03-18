const express = require("express");
const LoginValidation_Route = express.Router();
const Login_contoller = require("../Controllers/Login_contoller");

LoginValidation_Route.post(
  "/LoginValidation",
  Login_contoller.Login_Validation_contoller
);
exports.LoginValidation_Route = LoginValidation_Route;
