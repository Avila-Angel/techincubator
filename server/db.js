const mongoose = require("mongoose");
require('dotenv').config({ path: '/Users/Angel/Desktop/dev/techincubator/.env' });

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.DB, connectionParams);
    console.log("connected to db");
  } catch (error) {
    console.log(error);
    console.log("could not connect to database");
  }
};
