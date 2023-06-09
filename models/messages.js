const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  content: String,
  timestamp: Date,
});

const Message = new mongoose.model("Message", messageSchema);
module.exports = Message;
