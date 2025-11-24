const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

// Enable CORS
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || [
      "http://localhost:3000",
      "https://agonzalezjr327.github.io"
    ].includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

// Import your chat route
const chatRoute = require("./chat");
app.use("/chat", chatRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
