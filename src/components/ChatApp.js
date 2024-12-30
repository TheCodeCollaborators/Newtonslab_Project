// src/components/ChatApp.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import "../App.css";

const ChatApp = () => {
  const [searches, setSearches] = useState([]); // State for storing sidebar searches

  const addToSidebar = (query) => {
    setSearches((prevSearches) => [query, ...prevSearches]); // Add new query at the top
  };

  return (
    <div className="chat-app">
      <Sidebar searches={searches} />
      <ChatWindow addToSidebar={addToSidebar} />
    </div>
  );
};

export default ChatApp;
