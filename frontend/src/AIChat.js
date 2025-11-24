import React, { useState } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const newMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, newMsg]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", { // Use serverless path
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      setMessages(prev => [...prev, { sender: "ai", text: data.reply }]);
    } catch (err) {
      console.error("Error sending message:", err);
      setMessages(prev => [...prev, { sender: "ai", text: "Oops! Something went wrong." }]);
    } finally {
      setInput("");
      setLoading(false);
    }
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
        {loading && <div style={styles.ai}>Thinking...</div>}
      </div>

      <div style={{ display: "flex" }}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button style={styles.button} onClick={sendMessage} disabled={loading}>
          Send
        </button>
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
    borderRadius: 8,
    display: "flex",
    flexDirection: "column"
  },
  user: {
    background: "#007bff",
    color: "white",
    padding: 8,
    borderRadius: 8,
    margin: "5px 0",
    alignSelf: "flex-end",
    maxWidth: "80%"
  },
  ai: {
    background: "#eee",
    padding: 8,
    borderRadius: 8,
    margin: "5px 0",
    alignSelf: "flex-start",
    maxWidth: "80%"
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
    border: "none",
    cursor: "pointer"
  }
};
