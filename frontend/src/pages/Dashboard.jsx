// src/pages/Dashboard.jsx
import React from "react";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      {/* Left column: Resume Builder */}
      <section>
        <header style={{ marginBottom: 18 }}>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">
            Build an ATS‑safe resume with live compatibility scoring.
          </p>
        </header>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Resume Builder</h2>
            <p className="card-subtitle">
              Fill the key sections; the system will optimize wording for ATS.
            </p>
          </div>

          <form
            className="form-grid"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: hook to your generate + save handler
            }}
          >
            <div className="form-row">
              <label className="label" htmlFor="profession">
                Profession
              </label>
              <input
                id="profession"
                className="input"
                type="text"
                placeholder="e.g., Data Scientist"
              />
            </div>

            <div className="form-row">
              <label className="label" htmlFor="seniority">
                Seniority
              </label>
              <input
                id="seniority"
                className="input"
                type="text"
                placeholder="e.g., Junior, Mid‑level, Senior"
              />
            </div>

            <div className="form-row">
              <label className="label" htmlFor="summary">
                Summary
              </label>
              <textarea
                id="summary"
                className="textarea"
                placeholder="2–4 lines showing role, years of experience, and core skills."
              />
            </div>

            <div className="form-row">
              <label className="label" htmlFor="experience">
                Experience
              </label>
              <textarea
                id="experience"
                className="textarea"
                placeholder="Role, company, dates, key bullet points with measurable impact."
              />
            </div>

            <div className="form-row">
              <label className="label" htmlFor="education">
                Education
              </label>
              <textarea
                id="education"
                className="textarea"
                placeholder="Degree, institution, year, relevant coursework or achievements."
              />
            </div>

            <div className="form-row">
              <label className="label" htmlFor="skills">
                Skills
              </label>
              <textarea
                id="skills"
                className="textarea"
                placeholder="Separate technical skills with commas; include tools, languages, frameworks."
              />
            </div>

            <button type="submit" className="button-primary">
              Generate &amp; Save Resume
            </button>
          </form>
        </div>
      </section>

      {/* Right column: Live preview */}
      <aside className="preview-card">
        <h2 className="preview-title">Live ATS Preview</h2>

        <div className="preview-score">
          <span className="preview-score-value">0%</span>
          <span className="preview-score-label">Match score</span>
        </div>

        <p className="preview-note">
          Start typing your summary and experience to see the compatibility
          score update here. Once you integrate the backend, this panel can show
          missing keywords, section warnings, and recruiter‑friendly hints.
        </p>
      </aside>
    </div>
  );
}

export default Dashboard;
