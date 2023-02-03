const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const NODE_ENV = process.env.NODE_ENV;

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(NODE_ENV.DB, connectionParams);
  } catch (error) {
    console.log(error);
    console.log("could not connect to database");
  }
};
