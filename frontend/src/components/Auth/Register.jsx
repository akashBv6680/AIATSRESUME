// src/components/Auth/Register.jsx
import React from "react";

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <header className="auth-card-header">
          <h1 className="auth-title">Create an account</h1>
          <p className="auth-subtitle">
            Set up your AI ATS workspace in a few seconds.
          </p>
        </header>

        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: hook to your real register handler
          }}
        >
          <div className="form-row">
            <label className="auth-label" htmlFor="reg-name">
              Name
            </label>
            <input
              id="reg-name"
              className="auth-input"
              type="text"
              placeholder="Your full name"
            />
          </div>

          <div className="form-row">
            <label className="auth-label" htmlFor="reg-email">
              Email
            </label>
            <input
              id="reg-email"
              className="auth-input"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-row">
            <label className="auth-label" htmlFor="reg-password">
              Password
            </label>
            <input
              id="reg-password"
              className="auth-input"
              type="password"
              placeholder="Create a strong password"
            />
          </div>

          <button
            type="submit"
            className="button-primary"
            style={{ width: "100%", marginTop: 10 }}
          >
            Register
          </button>
        </form>

        <p className="auth-footer-text">
          Already have an account?{" "}
          <a href="/login" className="auth-link">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
