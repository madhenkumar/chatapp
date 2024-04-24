import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("userData");
    if (userDataFromStorage) {
      
      setUserData(JSON.parse(userDataFromStorage));
      console.log(userData);
      setLoading(false); 
    }
  }, []);

  const handleLogout = () => {
    
    if (userData) {
      
      userData[0].loggedIn = false;
    
      
      localStorage.setItem("userData", JSON.stringify(userData));
    }
    
    navigate("/login");
  };

  return (
    <div className='navbar'>
      <span className="logo">VisageLivre</span>
      <div className="user">

        {loading ? (
          <span>Loading...</span>
        ) : (
          <>
            <img src={userData ? userData[0].profileImagePath : "/man.png"} alt="" />
            <span>{userData ? userData[0].username : "Guest"}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
