const express = require("express");
const Index_contoller = require("../Controllers/Index_Controller");
const authentication=require('../Models/Authentication');
const Route = express.Router();

Route.get("/Index",authentication.auth, Index_contoller.Index_contoller);

exports.Route = Route;
