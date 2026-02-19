import express from "express";
import { generateResponse } from "../services/gemini.service.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { chat } = req.body;

    if (!chat || typeof chat !== "string") {
      return res.status(400).json({
        error: "Valid chat field is required"
      });
    }

    const reply = await generateResponse(chat);

    res.json({ response: reply });

  } catch (error) {
    console.error("Chat Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;