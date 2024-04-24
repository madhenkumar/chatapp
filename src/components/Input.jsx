import React, { useState } from "react";

const Input = ({ currentChatId }) => {
  const [text, setText] = useState("");

  const handleSend = async () => {
    
    sendMessage(text);

    
    setText("");
  };

  
  const sendMessage = (text) => {
    
    const currentChatId = localStorage.getItem("currentChatId");
  
    
    let userMessages = JSON.parse(localStorage.getItem("userMessages")) || [];
  
    
    const chatIndex = userMessages.findIndex((chat) => chat.chatId === currentChatId);
  
    
    if (chatIndex !== -1) {
      userMessages[chatIndex].messages.push(text);
    } else {
      
      userMessages.push({ chatId: currentChatId, messages: [text] });
    }
  
    
    localStorage.setItem("userMessages", JSON.stringify(userMessages));
    console.log(userMessages);
    window.location.reload();
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
