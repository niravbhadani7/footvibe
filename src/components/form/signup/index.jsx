import React, { useState } from "react";
import "../signup.scss";
import { Link } from "react-router-dom";

export default function Signup() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (el) => {
    const { name, value } = el.target;
    setUserInfo({ ...userInfo, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const [errors, setErrors] = useState({});
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
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userInfo.email)){
      error.email = "Invalid email address";
      isValid = false;
    }

    if (userInfo.password === "") {
      error.password = "Password is required";
      isValid = false;
    }else if(userInfo.password.length < 6){
      error.password = "Password must be at least 6 characters";
      isValid = false;
    }
    setErrors(error);
    return isValid;
  };
  const handleSubmit = () => {
    if (validForm()) {
      const userData = JSON.parse(localStorage.getItem("user")) || [];
      userData.push(userInfo);
      localStorage.setItem("user", JSON.stringify(userData));
      setUserInfo({
        username: "",
        email: "",
        password: "",
      });
    }
  };
  return (
    <div className="signup">
      <div className="container">
        <section>
          <h1>Sign up</h1>
          <label>
            Username <span>{errors.username}</span>
            <input type="text" name="username" onChange={handleChange} value={userInfo.username}/>
          </label>
          <label>
            Email <span>{errors.email}</span>
            <input type="email" name="email" onChange={handleChange} value={userInfo.email}/>
          </label>
          <label>
            Password <span>{errors.password}</span>
            <input type="password" name="password" onChange={handleChange} value={userInfo.password}/>
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
