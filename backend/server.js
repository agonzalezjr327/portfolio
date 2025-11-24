import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

// Load your resume or biography text
import fs from "fs";
const myBio = fs.readFileSync("./arnulfo_resume.txt", "utf8");

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: `You are Arnulfo Gonzalez Jr's portfolio AI assistant. You know all about his resume, skills, experience, projects, and education. Use the biography below:

${myBio}

Answer professionally.` },
      { role: "user", content: message }
    ]
  });

  res.json({ reply: completion.choices[0].message.content });
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
