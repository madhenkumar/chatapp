import React, { useState,useRef, useEffect } from "react";
import chatsData from "../data/chats.json";


const Message = ({ message }) => {
  const ref = useRef();
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    
    const currentChatId = localStorage.getItem("currentChatId");

    
    const chatData = chatsData.find(chat => chat.chatId === currentChatId);

    
    if (chatData) {
      setImagePath(chatData.userDetails.imagePath);
    }
  }, []);

  
  
  

  return (
    <div  className={`message`}>
      <div className="messageInfo">
        <img
        src={imagePath}
        alt=""
        />
      </div>
      <div className="messageContent">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;