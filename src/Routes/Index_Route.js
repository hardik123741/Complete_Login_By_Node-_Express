const express = require("express");
const Index_contoller = require("../Controllers/Index_Controller");
const Route = express.Router();

Route.get("/Index", Index_contoller.Index_contoller);

exports.Route = Route;
