import dotenv from "dotenv";
dotenv.config();
module.exports = {
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || 'localhost'
};