// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import ResumeHistory from "./pages/ResumeHistory";
import AdminPanel from "./pages/AdminPanel";
import QAPanel from "./pages/QAPanel";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import "./styles.css";

function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-header-title">AI ATS Resume Generator</div>

      <nav className="app-header-nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            "app-header-link" + (isActive ? " app-header-link-active" : "")
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            "app-header-link" + (isActive ? " app-header-link-active" : "")
          }
        >
          History
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            "app-header-link" + (isActive ? " app-header-link-active" : "")
          }
        >
          Admin
        </NavLink>
        <NavLink
          to="/qa"
          className={({ isActive }) =>
            "app-header-link" + (isActive ? " app-header-link-active" : "")
          }
        >
          QA
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            "app-header-link" + (isActive ? " app-header-link-active" : "")
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            "app-header-link" + (isActive ? " app-header-link-active" : "")
          }
        >
          Register
        </NavLink>
      </nav>
    </header>
  );
}

function AppFooter() {
  return (
    <footer className="app-footer">
      © {new Date().getFullYear()} AI ATS Resume Generator · All rights reserved
    </footer>
  );
}

function App() {
  return (
    <div className="app-background">
      <Router>
        <div className="app-shell">
          <AppHeader />

          <main className="app-main">
            <div className="app-main-inner">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/history" element={<ResumeHistory />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/qa" element={<QAPanel />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </main>

          <AppFooter />
        </div>
      </Router>
    </div>
  );
}

export default App;
