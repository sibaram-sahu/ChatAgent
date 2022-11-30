const express = require("express");
const routes = express.Router();

routes.get("/chatlist", require('./getchat').getChat);
routes.post("/join", require('./joinchat').join);


module.exports = routes