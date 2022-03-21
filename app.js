const express = require("express");
const { env } = require("process");
const connection = require("./src/Database/Connection");
const bodyParser = require("body-parser");
const HomeRoutes = require("./src/Routes/Home_Route");
const loginRoutes = require("./src/Routes/Login_Route");
const path = require("path");
const ejs = require("ejs");
const Signup_Route = require("./src/Routes/Signup_Route");
const Submit_Registration_Route = require("./src/Routes/Submit_Registration_Route");
const LoginValidation_Route = require("./src/Routes/Login_Validation_Route");
const Index_Route = require("./src/Routes/Index_Route");
const Logout_Route = require("./src/Routes/Logout_Route");
const cookiePrser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 2000;

app.set("view engine", "ejs");
app.set("views", "./src/Views");

app.use(express.static(path.join(__dirname, "./public/")));
console.log(path.join(__dirname, "./Public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookiePrser());

app.use(LoginValidation_Route.LoginValidation_Route);
app.use(Submit_Registration_Route.Submit_Registration_Route);
app.use(Signup_Route.Signup_Route);
app.use(Logout_Route.Logout_Route);
app.use(Index_Route.Route);

app.use(loginRoutes.route);

app.use(HomeRoutes.route);

app.listen(port);
