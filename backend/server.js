const express = require("express");
const serverless = require("serverless-http");
const chatRoute = require("./api/chat");

const app = express();
app.use(express.json());
app.use("/chat", chatRoute);

module.exports.handler = serverless(app);
