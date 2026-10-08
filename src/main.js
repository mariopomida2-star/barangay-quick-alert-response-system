<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Barangay Quick-Alert Response System - premium homepage interface for emergency reporting and response coordination."
    />
    <title>Barangay Quick-Alert Response System</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/src/styles.css" />
  </head>
  <body>
    <div class="page-shell">
      <header class="topbar">
        <div class="brand-block">
          <div class="brand-mark">B</div>
          <div>
            <p class="eyebrow">Official barangay platform</p>
            <h1>Barangay Quick-Alert</h1>
          </div>
        </div>

        <nav class="top-actions" aria-label="Primary navigation">
          <button class="secondary-button" data-form="how-to-use">How to Use</button>
          <button class="secondary-button accent" data-form="login">Log In</button>
        </nav>
      </header>

      <main class="hero">
        <section class="hero-copy">
          <div class="badge-row">
            <span class="status-pill live">Live emergency response</span>
            <span class="status-pill">Public safety</span>
          </div>

          <h2>
            BARANGAY<br />
            <span>QUICK-ALERT RESPONSE SYSTEM</span>
          </h2>

          <p class="subtitle">
            Trusted community reporting and rapid response coordination for residents,
            barangay officers, and local responders.
          </p>

          <div class="stats-grid" aria-label="System statistics">
            <article>
              <strong>24/7</strong>
              <span>Community monitoring</span>
            </article>
            <article>
              <strong>12 min</strong>
              <span>Average dispatch response</span>
            </article>
            <article>
              <strong>98.4%</strong>
              <span>Issue resolution tracking</span>
            </article>
          </div>
        </section>

        <aside class="dashboard-panel" aria-label="Emergency overview">
          <div class="panel-header">
            <div>
              <p class="panel-kicker">Response status</p>
              <h3>Today’s overview</h3>
            </div>
            <span class="signal-dot"></span>
          </div>

          <div class="panel-card danger">
            <span class="card-label">Critical concern</span>
            <strong>7 active alerts</strong>
            <small>Flooding, power outage, fire, and civic reports</small>
          </div>

          <div class="mini-grid">
            <div class="mini-card">
              <span>Submitted</span>
              <strong>142</strong>
            </div>
            <div class="mini-card">
              <span>Resolved</span>
              <strong>98</strong>
            </div>
            <div class="mini-card">
              <span>Pending</span>
              <strong>22</strong>
            </div>
            <div class="mini-card">
              <span>Verified</span>
              <strong>86%</strong>
            </div>
          </div>
        </aside>
      </main>

      <section class="action-section" aria-label="Quick actions">
        <div class="section-heading">
          <p class="eyebrow section-eyebrow">Resident dashboard</p>
          <h3>Quick actions</h3>
        </div>

        <div class="action-grid">
          <button class="action-button action-primary" data-form="submit-new-report">
            <span class="button-icon">✦</span>
            <span class="button-text">Submit New Report</span>
          </button>

          <button class="action-button" data-form="view-all-reports">
            <span class="button-icon">▣</span>
            <span class="button-text">View All Reports</span>
          </button>

          <button class="action-button" data-form="my-submission">
            <span class="button-icon">◎</span>
            <span class="button-text">My Submission</span>
          </button>

          <button class="action-button" data-form="how-to-use">
            <span class="button-icon">?</span>
            <span class="button-text">How to Use</span>
          </button>

          <button class="action-button action-exit" data-form="exit">
            <span class="button-icon">⎋</span>
            <span class="button-text">Exit</span>
          </button>

          <button class="action-button action-login" data-form="login">
            <span class="button-icon">⇢</span>
            <span class="button-text">Log In</span>
          </button>
        </div>
      </section>
    </div>

    <div class="toast" id="toast" role="status" aria-live="polite">
      Form page is ready to be connected later.
    </div>

    <script type="module" src="/src/main.js"></script>
  </body>
</html>
