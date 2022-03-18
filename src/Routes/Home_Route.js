const express = require("express");
const Home_contoller=require('../Controllers/Home_contoller');
const route = express.Router();

route.get("/",Home_contoller.Home_contoller);

exports.route = route;
