const express=require('express');
const Signup_Route=express.Router();
const Signup_Controller=require('../Controllers/Signup_controller');


Signup_Route.get("/Signup",Signup_Controller.Signup_Controller);

exports.Signup_Route=Signup_Route;
