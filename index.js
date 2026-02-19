import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { chat } = req.body;

    if (!chat) {
      return res.status(400).json({ error: "chat field is required" });
    }

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GOOGLE_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: chat }]
            }
          ]
        })
      }
    );

    const data = await geminiRes.json();
    console.log("GEMINI RESPONSE:", data);

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

    return res.json({ response: reply });

  } catch (err) {
    console.error("Server Error:", err);
    return res.status(500).json({ error: "LLM request failed" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
