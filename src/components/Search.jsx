import React, { useState } from 'react';
import chatsData from "../data/chats.json";

const Search = () => {
  const [username, setUsername] = useState("");
  const [searchTerm, setSearchTerm] = useState('');
  const [foundChat, setFoundChat] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setFoundChat(null); 
  };

  const foundChatObject = chatsData.find((chat) =>
    chat.userDetails.displayName.toLowerCase() === searchTerm.toLowerCase()
  );

  function handleSelect() {
    console.log("hello");
  }

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>

      {isFocused && searchTerm && !foundChatObject && (
        <p style={{ marginRight:'10px',marginLeft:'10px', color: 'red', fontSize: '16px', fontWeight: 'bold' }}>Chat not found!</p>
      )}

      {foundChatObject && (
        <div className="userChat" onClick={handleSelect}>
          <div className="userChatInfo">
            <img src={foundChatObject.userDetails.imagePath} alt="" />
            <span>{foundChatObject.userDetails.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
