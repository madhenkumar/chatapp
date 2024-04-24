import React, { useRef, useEffect, useState } from "react";

const UserMessage = ({ message }) => {
  const ref = useRef();
  const [profileImagePath, setProfileImagePath] = useState("");

  useEffect(() => {
    
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      
      const userData = JSON.parse(userDataString);
      
      setProfileImagePath(userData[0].profileImagePath);
    }
  }, []);
  return (
    <div  className="message owner">
      <div className="messageInfo">
        <img
          src={profileImagePath || "/man.png"}
          alt=""
        />
      </div>
      <div className="messageContent">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default UserMessage;