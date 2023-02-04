const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

//create schema
const userSchema = new mongoose.Schema({
  companyorschool: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

//create jwt token for user
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

//create user model
const User = mongoose.model("user", userSchema);

//validation
const validate = (data) => {
  const schema = Joi.object({
    companyorschool: Joi.string().required().label("companyorschool"),
    name: Joi.string().required().label("name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
