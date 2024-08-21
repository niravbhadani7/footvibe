import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <section>
          <h1>Login</h1>
          <label>
            <span>Username</span>
            <input type="text" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <button>Login</button>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Login;
