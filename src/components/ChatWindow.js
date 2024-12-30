// src/ChatWindow.js
import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import "../App.css";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "How may I help you today?" },
  ]);

  // const handleSend = (messageText) => {
  //   const newMessage = { sender: "user", text: messageText };
  //   setMessages([...messages, newMessage]);

  //   // Simulate bot response
  //   setTimeout(() => {
  //     const botResponse = {
  //       sender: "bot",
  //       text: `Searching for "${messageText}"...`,
  //     };
  //     setMessages((prevMessages) => [...prevMessages, botResponse]);
  //   }, 1000);
  // };

   const handleSend = (messageText) => {
     const newMessage = { sender: "user", text: messageText };
     setMessages([...messages, newMessage]);

     // Simulate bot response
     setTimeout(() => {
       const botResponse = {
         sender: "bot",
         text: `Searching for "${messageText}"...`,
       };
       setMessages((prevMessages) => [...prevMessages, botResponse]);
     }, 1000);
   };

  return (
    <div className="chat-window">
      <div className="chat-header">Newton Bot</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
