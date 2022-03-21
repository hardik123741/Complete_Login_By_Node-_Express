const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const Registration_Schema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  Password: {
    type: String,
    required: true,
    unique: true,
  },
  ConfirmPassword: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  tokens: {
    type: String,
    required: true,
  },
});

const Registratiion_Model = new mongoose.model(
  "Registratiion",
  Registration_Schema
);

exports.Registratiion_Model = Registratiion_Model;
