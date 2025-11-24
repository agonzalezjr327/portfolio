import React, { useState } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    const newMsg = { sender: "user", text: input };
    setMessages([...messages, newMsg]);

    const res = await fetch("https://arnulfo-ai-backend.vercel.app/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();

    setMessages(prev => [...prev, { sender: "ai", text: data.reply }]);
    setInput("");
  }

  return (
    <div style={styles.container}>
      <h3>Ask Arnulfo AI</h3>

      <div style={styles.chatbox}>
        {messages.map((m, i) => (
          <div key={i} style={m.sender === "user" ? styles.user : styles.ai}>
            {m.text}
          </div>
        ))}
      </div>

      <div style={{ display: "flex" }}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
        />
        <button style={styles.button} onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  container: { width: "100%", maxWidth: 600, margin: "0 auto" },
  chatbox: {
    height: 300,
    overflowY: "auto",
    border: "1px solid #ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8
  },
  user: {
    background: "#007bff",
    color: "white",
    padding: 8,
    borderRadius: 8,
    margin: "5px 0"
  },
  ai: {
    background: "#eee",
    padding: 8,
    borderRadius: 8,
    margin: "5px 0"
  },
  input: {
    flex: 1,
    padding: 8,
    borderRadius: 4,
    border: "1px solid #ccc"
  },
  button: {
    padding: "8px 12px",
    marginLeft: 8,
    borderRadius: 4,
    background: "#28a745",
    color: "white",
    border: "none"
  }
};
