import React, { useState, useEffect } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import chatsData from "../data/chats.json";

const Chat = () => {
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    
    const chatId = localStorage.getItem("currentChatId");
    
    if (chatId) {
      const chat = chatsData.find(chat => chat.chatId === chatId);
      setCurrentChat(chat);
      console.log(chat);
    }
  }, []);

  if (!currentChat) {
    return  <div className="chat">
    <div className="chatInfo">
      <span>Click a chat to Begin!</span>
      <div className="chatIcons">
        <img src={Cam} alt="" />
        <img src={Add} alt="" />
        <img src={More} alt="" />
      </div>
    </div>
    <Messages messages={[]} />
    <Input />
  </div>;
  }

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{currentChat.userDetails.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages messages={currentChat.messages} />
      <Input />
    </div>
  );
};

export default Chat;
