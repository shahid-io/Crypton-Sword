// const express = require('express');
import express from "express"
import ServerConfig from "./config/server.config"

const app = express();
const PORT = ServerConfig.PORT;
// const port = process.argv[3] || 3000;


app.get('/api', (req, res) => {
  res.json({ "msg": "Hello world" });
});

app.listen(PORT, () => {
  console.log(`http://${ServerConfig.HOST}:${PORT}`);
})