//const {Person} = require("./person");

// require("./modules/path");

//const per = new Person("felipe");

//console.log(per.sayMyName());

//require("./modules/fs");

//require("./modules/http");

const dotenv = require("dotenv");

dotenv.config();
const connectToDatabase = require("./src/database/connect");
connectToDatabase();
require('./modules/express');