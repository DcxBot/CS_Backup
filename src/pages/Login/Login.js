import React, { useState } from "react";
import "./Login.css";
import "../../styles/variables.css";
import "../../styles/animations.css";
import crossSwitchLogo from "../../assets/cross-switch-logo-new.png";
import {
  UserIcon,
  LockIcon,
  EyeIcon,
  EyeSlashIcon,
} from "../../Icons/SVGicons";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value && !validateEmail(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both email and password");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // Login successful - navigate to home page
    console.log("Login attempt:", { email, password, rememberMe });
    if (onLogin) {
      onLogin();
    }
  };

  const fillDemoCredentials = () => {
    setEmail("demo@crossswitch.com");
    setPassword("demo123");
  };

  return (
    <div className="login-container theme-transition">
      <div className="background-shapes"></div>

      <div className="center-wrapper">
        <div className="content-wrapper">
          {/* Header Section */}
          <div className="header-container fade-in">
            <div className="logo-container">
              <img src={crossSwitchLogo} alt="CrossSwitch" className="logo" />
            </div>
            <h1 className="title">Welcome Back</h1>
            <p className="subtitle">
              Sign in to your{" "}
              <span style={{ color: "var(--accent)" }}>
                CrossSwitch Reconciliation
              </span>{" "}
              account
            </p>
          </div>

          {/* Form Section */}
          <div className="form-container slide-up stagger-1">
            <form onSubmit={handleSubmit} className="login-form">
              {/* Email Field */}
              <div className="field-group">
                <label htmlFor="email" className="field-label">
                  Email Address
                </label>
                <div className="input-container">
                  <span className="input-icon">
                    <UserIcon />
                  </span>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className={`form-input input-focus ${
                      emailError ? "input-error" : ""
                    }`}
                    required
                  />
                </div>
                {emailError && (
                  <span className="error-text shake">{emailError}</span>
                )}
              </div>

              {/* Password Field */}
              <div className="field-group">
                <label htmlFor="password" className="field-label">
                  Password
                </label>
                <div className="input-container">
                  <span className="input-icon">
                    <LockIcon />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="form-input input-focus"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              {/* Remember Me Section */}
              <div className="remember-section">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="checkbox-input"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-link forgot-password-btn"
                  onClick={() => console.log("Forgot password clicked")}
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-button button-press">
                Sign In
              </button>

              {/* Demo Credentials */}
              <div className="demo-divider">
                <span>Demo Credentials</span>
              </div>

              <div className="credentials-box scale-in stagger-2">
                <p className="demo-text">
                  <span className="demo-label">Email:</span>{" "}
                  demo@crossswitch.com
                </p>
                <p className="demo-text">
                  <span className="demo-label">Password:</span> demo123
                </p>
                <button
                  type="button"
                  onClick={fillDemoCredentials}
                  className="demo-button hover-lift"
                >
                  Use Demo Credentials
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
