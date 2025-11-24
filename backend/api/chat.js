// backend/api/chat.js
import OpenAI from "openai";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ reply: "Method not allowed" });
    return;
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });
  const myBio = fs.readFileSync(path.join(process.cwd(), "data", "arnulfo_resume.txt"), "utf8");
  const { message } = req.body;

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: `You are Arnulfo Gonzalez Jr's portfolio AI assistant. Use this bio: ${myBio}` },
        { role: "user", content: message }
      ]
    });
    res.status(200).json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Sorry, something went wrong." });
  }
}
