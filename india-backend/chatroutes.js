const express = require("express");
const router = express.Router();
const Chat = require("./chat"); // same folder

// POST message
router.post("/", async (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  let botReply = "I’m still learning 🤖";

  if (userMessage.includes("hello") || userMessage.includes("hi")) {
    botReply = "Hello! I’m Bharat.AI — your smart BTech chatbot!";
  } else if (userMessage.includes("name")) {
    botReply = "I’m Bharat.AI — built with MERN stack 😎";
  } else if (userMessage.includes("college")) {
    botReply = "College life is fun! Keep learning 🚀";
  } else if (userMessage.includes("bye")) {
    botReply = "Goodbye! See you soon 👋";
  }

  const chat = new Chat({ userMessage, botReply });
  await chat.save();

  res.json({ reply: botReply });
});

// GET chat history
router.get("/", async (req, res) => {
  const chats = await Chat.find().sort({ timestamp: 1 });
  res.json(chats);
});

module.exports = router;
