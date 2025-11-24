const express = require("express");
const OpenAI = require("openai");
const cors = require("cors");
const router = express.Router();
const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });
const myBio = process.env.MY_BIO;

router.use(cors());

router.post("/", async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: `You are Arnulfo Gonzalez Jr's portfolio AI assistant. Use this bio: ${myBio}` },
        { role: "user", content: message }
      ]
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Oops! Something went wrong." });
  }
});

module.exports = router;
