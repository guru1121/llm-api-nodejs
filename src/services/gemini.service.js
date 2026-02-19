import dotenv from "dotenv";

dotenv.config()
export const generateResponse = async (chat) => {
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": process.env.GOOGLE_API_KEY
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: chat }]
          }
        ]
      })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Gemini API Error");
  }

  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
};
