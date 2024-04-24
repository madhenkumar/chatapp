import React, { useEffect, useState } from "react";
import chatsData from "../data/chats.json";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  useEffect(() => {
    setChats(chatsData);
  }, []);

  
  const getLastMessage = (messages) => {
    if (messages && messages.length > 0) {
      return messages[messages.length - 1];
    }
    return null;
  };

  const handleSelect = (chatId) => {
    setCurrentChatId(chatId);
    
    localStorage.setItem("currentChatId", chatId);
    console.log(chatId);
    window.location.reload();
  };

  return ( 
    <div className="chats">
      {chats.map((chat) => (
        <div
        className={`userChat ${chat.chatId === currentChatId ? "active" : ""}`}
        key={chat.chatId}
        onClick={() => handleSelect(chat.chatId)}
      >
          <img src={chat.userDetails.imagePath} alt="" />
          <div className="userChatInfo">
            <span>{chat.userDetails.displayName}</span>
            {/* <p>{getLastMessage(chat.messages)}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
