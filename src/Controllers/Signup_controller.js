require("dotenv").config();
const Registratiion_Model = require("../Models/Registration_model");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const Signup_Controller = (req, res) => {
  res.render("Signup",{msg:""});
};

const Submit_Registration_Controller = async (req, res) => {
  try {
    console.log(req.body);

    const token = await jsonwebtoken.sign(
      { _id: req.body.Email },
      process.env.Secret_Key
    );

    console.log(token);
    console.log(process.env.Secret_Key);
    const bcrypet_password = await bcrypt.hash(req.body.Password, 10);

    const New_User = new Registratiion_Model.Registratiion_Model({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      PhoneNumber: req.body.PhoneNumber,
      Password: bcrypet_password,
      ConfirmPassword: bcrypet_password,
      Gender: req.body.Gender,
      tokens: token,
    });
    const data_result = await New_User.save();
    console.log("new User Added  => ", data_result);
    res.status(201).render("Login");
  } catch (error) {

    console.log(error);
    res.render("Signup",{msg:"Email Already Exist"});
    
  }
};

exports.Signup_Controller = Signup_Controller;
exports.Submit_Registration_Controller = Submit_Registration_Controller;
