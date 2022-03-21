const Registratiion_Model = require("../Models/Registration_model");
const bcrypt = require("bcryptjs");
const Login_contoller = (req, res) => {
  res.render("Login");
};

const Login_Validation_contoller = async (req, res) => {
  try {
    const email = req.body.Email;
    const Password1 = req.body.Password;

    console.log(email + Password1);

    const data = await Registratiion_Model.Registratiion_Model.findOne({
      Email: email,
    });

    const macthing = await bcrypt.compare(Password1, data.Password);
    console.log(macthing);
    if (macthing === true) {
      res.cookie("jwt", data.tokens,{httpOnly:true});
      res.render("Home");
    } else {
      res.render("Login");
    }
  } catch (error) {
    console.log(error);
  }
};
exports.login_contoller = Login_contoller;
exports.Login_Validation_contoller = Login_Validation_contoller;
