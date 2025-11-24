// require('dotenv').config();
const express = require("express");
const chatRouter = require("./api/chat"); // adjust path if needed

const app = express();
app.use(express.json());

app.use("/api/chat", chatRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;