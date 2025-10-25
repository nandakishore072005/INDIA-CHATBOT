const mongoose = require("mongoose");

// Schema for chat messages
const chatSchema = new mongoose.Schema({
  userMessage: { type: String, required: true },
  botReply: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Chat", chatSchema);
