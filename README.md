# 🚀 Gemini LLM API Integration (Node.js + Express)

A simple REST API built with **Node.js** and **Express** that integrates with **Google Gemini LLM (`gemini-2.5-flash`)** to generate AI-powered responses.

---

## 📌 Features

- REST API endpoint for chat interaction  
- Integration with Gemini 2.5 Flash model  
- Environment variable support using `dotenv`  
- Error handling for API failures  
- Lightweight and easy to extend  

---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- Gemini 2.5 Flash (Google Generative Language API)  
- dotenv  

---

## 📂 Project Structure

.
├── index.js
├── .env
├── package.json
└── README.md


---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2️⃣ Install Dependencies
npm install
3️⃣ Setup Environment Variables
Create a .env file in the root directory:

GOOGLE_API_KEY=your_gemini_api_key_here
⚠️ Never commit your .env file.
Add this to .gitignore:

.env
▶️ Run the Server
node index.js
Server will start on:

http://localhost:3000
📡 API Endpoint
POST /chat
Request Body
{
  "chat": "Explain JWT in simple terms"
}
Response
{
  "response": "JWT stands for JSON Web Token..."
}
📊 Model Used
gemini-2.5-flash

Free Tier Limits
5 requests per minute

20 requests per day

❗ Error Handling
Returns 400 if chat field is missing

Returns 500 if Gemini API fails

Handles API error responses gracefully

🔐 Security Notes
Store API key securely in .env

Do not expose API key in frontend

Add rate limiting in production

🚀 Future Improvements
Add rate limiter middleware

Implement chat history memory

Add streaming responses

Add authentication (JWT)

Deploy on AWS / Render / Railway

👨‍💻 Author
Gurunand Mourya
Software Developer