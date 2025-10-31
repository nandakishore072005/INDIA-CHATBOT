require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const chatRoutes = require("./chatroutes"); // same folder

const app = express();

app.use(
  cors({
    origin: [
      "https://india-chatbot-2.onrender.com", // your frontend render link
      "http://localhost:3000",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection failed:", err));

// ✅ Routes
app.use("/chat", chatRoutes);

// ✅ Root route to prevent “Cannot GET /” or 502 error
app.get("/", (req, res) => {
  res.send("✅ Bharat.AI Backend is Running Successfully!");
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
