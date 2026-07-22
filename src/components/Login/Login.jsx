// import React from 'react'


// const Login = () => {
//   return (
//     <>
//       <Navbar/>
//       <h1>Login</h1>
//     </>
//   )
// }

// export default Login


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login details submitted:", formData);
    // Yahan aap backend API call integration kar sakte hain
  };

  return (
    <>
    <div className="login-container">
      <div className="login-card">
        {/* Header Section */}
        <div className="login-header">
          <h2>Welcome Back 👋</h2>
          <p>Login to manage your properties and saved searches</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <div className="password-header">
              <label htmlFor="password">Password</label>
              <Link to="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </div>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? "👁️‍🗨️" : "👁️"}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        {/* Footer / Register Prompt */}
        <div className="login-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="signup-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;