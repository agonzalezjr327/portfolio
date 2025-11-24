import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import fs from "fs";

dotenv.config();
const app = express();
app.use(express.json());

// ⚡ Enable CORS for your frontend
app.use(cors({
  origin: [
    "http://localhost:3000", // React dev server
    "https://agonzalezjr327.github.io/" // GitHub Pages URL (replace with your actual URL)
  ]
}));

const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

const myBio = fs.readFileSync("./data/arnulfo_resume.txt", "utf8");

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are Arnulfo Gonzalez Jr's portfolio AI assistant. Use the following bio to answer professionally: ${myBio}`
      },
      { role: "user", content: message }
    ]
  });

  res.json({ reply: completion.choices[0].message.content });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
