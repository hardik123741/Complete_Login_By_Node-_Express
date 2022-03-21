const express=require('express');
const  Logout_Controller  = require('../Controllers/Logout_Controller');
const Logout_Route=express.Router();


Logout_Route.get("/Logout",Logout_Controller.Logout_Controller);

exports.Logout_Route=Logout_Route;
