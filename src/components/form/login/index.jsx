import React, { useState } from "react";
import "../signup.scss";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const handleChange = (el) => {
    const { name, value } = el.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = () => {
      const userlist = JSON.parse(localStorage.getItem("user"));
      if (userlist.find((el) => el.email === login.email && el.password === login.password)) {
        navigate("/");
      } else{
        alert("User Not Found");
      }
  }
  

  return (
    <div className="signup">
      <div className="container">
        <section>
          <h1>Login</h1>
          <label>
            Username <span></span>
            <input type="email" name="email" onChange={handleChange} />
          </label>
          <div className="password-container">
            <label>
              Password
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                // placeholder="Enter your password"
              />
            </label>
            <button className="show-password" type="button" onClick={togglePasswordVisibility}>  
              {showPassword ? "🙈" : "👁️" }
            </button>
          </div>
          <button className="signup-btn" onClick={handleSubmit}>Login</button>
          <p>
            Already have an account? <Link to="/signup">Signup</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
