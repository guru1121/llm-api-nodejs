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
- Google Gemini 2.5 Flash (Generative Language API)  
- dotenv  
- express-rate-limit  

---

## 📂 Project Structure

.
├── src/
│ ├── app.js
│ ├── server.js
│ ├── routes/
│ │ └── chat.routes.js
│ ├── services/
│ │ └── gemini.service.js
│ └── middleware/
│ └── rateLimiter.js
│
├── .env
├── package.json
└── README.md


---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/guru1121/llm-api-nodejs
cd your-repo-name
2️⃣ Install Dependencies
npm install
3️⃣ Setup Environment Variables
Create a .env file in the root directory:

GOOGLE_API_KEY=gemini_api_key_here
PORT=3000
⚠️ Never commit your .env file.

Add this to .gitignore:

node_modules
.env
▶️ Run the Server
npm start
Or if using nodemon:

npm run dev
Server will start at:

http://localhost:3000
📡 API Endpoints
🔹 Health Check
GET /health
Response:

{
  "status": "OK"
}
🔹 Chat Endpoint
POST /chat
Request Body:

{
  "chat": "Explain JWT in simple terms"
}
Response:

{
  "response": "JWT stands for JSON Web Token..."
}

🔐 Authentication
The Gemini API key is securely sent using request headers:

x-goog-api-key: YOUR_API_KEY
The API key is never exposed in the URL.

📊 Model Used
gemini-2.5-flash

Free Tier Limits
5 requests per minute

20 requests per day

Rate limiting middleware is implemented to prevent quota exhaustion.

❗ Error Handling
Returns 400 for invalid or missing input

Returns actual Gemini API status codes (e.g., 429)

Handles server errors gracefully

🔒 Security Best Practices
API key stored in .env

.env excluded from version control

Rate limiting applied to /chat

Input validation implemented

🚀 Future Improvements
Add Swagger API documentation

Implement chat memory

Add streaming responses

Add JWT authentication

Dockerize application

Deploy to AWS / Render / Railway

👨‍💻 Author
Gurunand Mourya
Software Developer