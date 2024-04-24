import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToRegister = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    const userData = userDataString ? JSON.parse(userDataString) : null; 
    console.log(userData);
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    delay(10000);

    
    
    if (userData && userData[0] && userData[0].loggedIn) {
      navigate("/");
      console.log("if statement")
    } else if (userData && userData[0] && userData[0].loggedIn==false) {
      
      navigate("/login");
      console.log("else if statement")

    } else {
      
      navigate("/register");
      console.log("else statement")

    }
  }, [navigate]);

  return null; 
};

export default RedirectToRegister;
