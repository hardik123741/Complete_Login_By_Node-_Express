const express = require("express");
const Login_contoller=require('../Controllers/Login_contoller');
const route = express.Router();

route.get("/login",Login_contoller.login_contoller);

exports.route = route;
