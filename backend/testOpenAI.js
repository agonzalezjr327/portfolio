// testOpenAI.js
require("dotenv").config(); // load .env
const OpenAI = require("openai");

const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

async function test() {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are testing the OpenAI API." },
        { role: "user", content: "Say hello!" }
      ]
    });

    console.log("OpenAI response:", response.choices[0].message.content);
  } catch (err) {
    console.error("Error:", err);
  }
}

test();
