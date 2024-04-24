import React, { useEffect, useState } from "react";
import Message from "./Message";
import UserMessage from "./UserMessage";
const Messages = ({ messages: propsMessages }) => {
  const [localStorageMessages, setLocalStorageMessages] = useState([]);

  useEffect(() => {
    
    const currentChatId = localStorage.getItem("currentChatId");

    
    const userMessages = JSON.parse(localStorage.getItem("userMessages")) || [];

    
    const chat = userMessages.find((chat) => chat.chatId === currentChatId);

    
    if (chat) {
      setLocalStorageMessages(chat.messages);
    } else {
      setLocalStorageMessages([]); 
    }
  }, []);

  return (
    <div className="messages">
      {propsMessages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      {localStorageMessages.map((message, index) => (
        <UserMessage key={index} message={message} />
      ))}
    </div>
  );
};

export default Messages;
