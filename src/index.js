const express = require('express');
const { ServerConfig } = require('./config');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
console.log(ServerConfig);

// const port = process.argv[3] || 3000;


app.get('/api', (req, res) => {
  res.json({ "msg": "Hello world" });
});

app.listen(ServerConfig.PORT, () => {
  console.log(`http://${ServerConfig.HOST}:${ServerConfig.PORT}`);
})