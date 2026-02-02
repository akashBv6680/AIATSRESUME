// src/components/Auth/Login.jsx
import React from "react";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <header className="auth-card-header">
          <h1 className="auth-title">Login</h1>
          <p className="auth-subtitle">
            Access your AI ATS workspace to manage resumes and scores.
          </p>
        </header>

        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: hook to your real login handler
          }}
        >
          <div className="form-row">
            <label className="auth-label" htmlFor="login-email">
              Email
            </label>
            <input
              id="login-email"
              className="auth-input"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-row">
            <label className="auth-label" htmlFor="login-password">
              Password
            </label>
            <input
              id="login-password"
              className="auth-input"
              type="password"
              placeholder="Your password"
            />
          </div>

          <button
            type="submit"
            className="button-primary"
            style={{ width: "100%", marginTop: 10 }}
          >
            Login
          </button>
        </form>

        <p className="auth-footer-text">
          New here? <a href="/register" className="auth-link">Create an account</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
