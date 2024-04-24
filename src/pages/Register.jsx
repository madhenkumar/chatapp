import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      
      console.log("User created:", { username, email, password });

      
      console.log("Image uploaded:", file);

      
      const profileImagePath = file ? `/${file.name}` : `/images/${username}.jpg`; 

      
      const newUser = {
        username,
        email,
        password,
        profileImagePath,
        loggedIn: true,
        messages: []
      };

      
      const existingData = localStorage.getItem("userData");
      const userData = existingData ? JSON.parse(existingData) : [];

      
      userData.push(newUser);

      
      localStorage.setItem("userData", JSON.stringify(userData));

      if (localStorage.getItem("userData")) {
        console.log("Data has been successfully stored in localStorage.");
      } else {
        console.log("Failed to store data in localStorage.");
      }

      
      navigate("/");
    } catch (err) {
      console.log(err);
      setErr(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">VisageLivre</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="username" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/register">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
