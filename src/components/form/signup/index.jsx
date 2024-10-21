import React, { useState } from "react";
import "../signup.scss";
import { Link } from "react-router-dom";

export default function Signup() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
  const handleChange = (el) => {
    const { name, value } = el.target;
    setUserInfo({ ...userInfo, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

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
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userInfo.email)
    ) {
      error.email = "Invalid email address";
      isValid = false;
    }

    if (userInfo.password === "") {
      error.password = "Password is required";
      isValid = false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/g.test(
        userInfo.password
      )
    ) {
      error.password = "Must be special character";
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
          <h1>Signup</h1>
          <label>
            Username <span>{errors.username}</span>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={handleChange}
              value={userInfo.username}
            />
          </label>
          <label>
            Email <span>{errors.email}</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={userInfo.email}
            />
          </label>
          <div className="password-container">
            <label>
              Password <span>{errors.password}</span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={userInfo.password}
                onChange={handleChange}
                // placeholder="Enter your password"
              />
            </label>
            <button className="show-password" type="button" onClick={togglePasswordVisibility}>  
              {showPassword ? "🙈" : "👁️" }
            </button>
          </div>
          <button className="signup-btn" onClick={handleSubmit}>Sign up</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
