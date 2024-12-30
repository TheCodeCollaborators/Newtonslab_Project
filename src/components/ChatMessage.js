import React from "react";
import "./ChatMessage.css";

const ChatMessage = ({ message }) => {
  // Ensure message has sender and text properties to avoid undefined errors
  const sender = message?.sender || "bot"; // Default to "bot" if sender is missing
  const text = message?.text || ""; // Default to empty string if text is missing

  return (
    <div
      className={`message ${
        sender === "user" ? "user-message" : "bot-message"
      }`}
    >
      {text}
    </div>
  );
};

export default ChatMessage;
