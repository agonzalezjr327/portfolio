const express = require("express");
const chatRouter = require("./api/chat"); // ensure path is correct

const app = express();
app.use(express.json());

app.use("/api/chat", chatRouter); // must be a router function

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
