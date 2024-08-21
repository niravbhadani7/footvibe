import React, { useState } from "react";
import "./signup.scss";
import { Link } from "react-router-dom";

export default function Signup() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  const [errors, setErrors] = useState({})
  console.log(errors)
  const validForm = () => {
    let error = {};
    let isValid = true;

    if (userInfo.username === "") { 
      error.username = "Username is required";
      isValid = false;
    }

    if (userInfo.email === "") {
      error.email = "Email is required";
      isValid = false;
    }

    if (userInfo.password === "") {
      error.password = "Password is required";
      isValid = false;
    } 
    setErrors(error);
    return isValid;
  }
  const handleSubmit = (e) => {
    if (validForm()) {
      
    }
  }
  return (
    <div className="signup">
      <div className="container">
        <section>
          <h1>Sign up</h1>
          <label>
            <span>Username  {userInfo.errors}</span>
            <input type="text" name="username" onChange={handleChange}/>
          </label>
          <label>
            <span>Email {userInfo.errors}</span>
            <input type="email" name="email" onChange={handleChange}/>
          </label>
          <label>
            <span>Password {userInfo.errors}</span>
            <input type="password" name="password" onChange={handleChange}/>
          </label>
          <button onClick={handleSubmit}>Sign up</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
