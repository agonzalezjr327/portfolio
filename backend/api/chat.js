export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*"); // or specific domains
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  // Set CORS for the actual request
  res.setHeader("Access-Control-Allow-Origin", "*"); // or specific domains

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: `You are Arnulfo Gonzalez Jr's portfolio AI assistant. Use the following bio: ${myBio}` },
        { role: "user", content: message }
      ],
    });

    res.status(200).json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Sorry, something went wrong." });
  }
}
