import React, { useState } from "react";
import "../signup.scss";
import { Link } from "react-router-dom";

export default function Login() {
  
  return (
    <div className="signup">
      <div className="container">
        <section>
          <h1>Login</h1>
          <label>
            Username <span></span>
            <input type="text" name="username" />
          </label>
          <label>
            Password <span></span>
            <input type="password" name="password"/>
          </label>
          <button >Login</button>
          <p>
            Already have an account? <Link to="/signup">Signup</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
