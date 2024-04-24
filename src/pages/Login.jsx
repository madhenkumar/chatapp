import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      
      const userData = JSON.parse(localStorage.getItem("userData"));

      
      if (userData && userData[0].email === email && userData[0].password === password) {
        
        userData[0].loggedIn = true;
        localStorage.setItem("userData", JSON.stringify(userData));
        
        
        navigate("/");
      } else {
        
        setErr(true);
      }
    } catch (err) {
      
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">VisageLivre</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Email or password is incorrect</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;