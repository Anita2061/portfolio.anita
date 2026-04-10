$ErrorActionPreference = 'Stop'

$root = Resolve-Path (Join-Path $PSScriptRoot '..')
$publicDir = Join-Path $root 'public'
$imagePath = Join-Path $root 'src\assets\Anita.jpg'
$outputPath = Join-Path $publicDir 'Anita-Gyawali-Portfolio-Offline.html'

if (-not (Test-Path $imagePath)) {
  throw "Image not found at $imagePath"
}

$imageBytes = [System.IO.File]::ReadAllBytes($imagePath)
$imageBase64 = [System.Convert]::ToBase64String($imageBytes)
$imageDataUri = "data:image/jpeg;base64,$imageBase64"

$html = @"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Anita Gyawali Portfolio</title>
  <style>
    :root {
      --bg: #f8fafc;
      --surface: #ffffff;
      --text: #0f172a;
      --muted: #475569;
      --blue: #2563eb;
      --orange: #f97316;
      --border: #e2e8f0;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background: linear-gradient(180deg, #eff6ff 0%, var(--bg) 30%, #fff7ed 100%);
      color: var(--text);
    }
    .wrap {
      width: min(1120px, calc(100% - 32px));
      margin: 0 auto;
    }
    .hero, .section {
      padding: 48px 0;
    }
    .hero-grid, .about-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 40px;
      align-items: center;
    }
    .eyebrow {
      display: inline-block;
      padding: 8px 14px;
      border-radius: 999px;
      background: #dbeafe;
      color: var(--blue);
      font-weight: 700;
      font-size: 14px;
    }
    h1, h2, h3, p {
      margin: 0;
    }
    h1 {
      font-size: clamp(2.4rem, 5vw, 4.5rem);
      line-height: 1.05;
      margin-top: 18px;
      margin-bottom: 18px;
    }
    h2 {
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      margin-bottom: 20px;
    }
    .lead {
      font-size: 1.1rem;
      color: var(--muted);
      max-width: 680px;
    }
    .accent {
      color: var(--blue);
    }
    .image-card {
      background: var(--surface);
      border: 1px solid rgba(255,255,255,0.8);
      border-radius: 32px;
      padding: 14px;
      box-shadow: 0 24px 80px -36px rgba(37, 99, 235, 0.45);
    }
    .image-card img {
      display: block;
      width: 100%;
      border-radius: 24px;
      object-fit: cover;
    }
    .info-grid, .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      margin-top: 24px;
    }
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 18px;
      box-shadow: 0 10px 30px -24px rgba(15, 23, 42, 0.35);
    }
    .card small {
      display: block;
      margin-bottom: 6px;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 700;
    }
    .skills-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .skill {
      text-align: center;
      font-weight: 700;
    }
    .timeline {
      margin-top: 24px;
      display: grid;
      gap: 18px;
    }
    .timeline-item {
      border-left: 3px solid var(--orange);
      padding-left: 18px;
    }
    .contact-box {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 24px;
      padding: 24px;
    }
    .muted {
      color: var(--muted);
    }
    .footer {
      padding: 24px 0 48px;
      font-size: 0.95rem;
      color: #64748b;
    }
    @media (max-width: 820px) {
      .hero, .section {
        padding: 32px 0;
      }
      .hero-grid, .about-grid {
        grid-template-columns: 1fr;
      }
      .info-grid, .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <section class="hero">
    <div class="wrap hero-grid">
      <div>
        <span class="eyebrow">Available for freelance and full-time</span>
        <h1>MERN Stack <span class="accent">Developer</span></h1>
        <p class="lead">
          I'm Anita Gyawali, a MERN Stack Developer building responsive, user-friendly web applications with clean code and thoughtful design.
        </p>
      </div>
      <div class="image-card">
        <img src="$imageDataUri" alt="Anita Gyawali" />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap about-grid">
      <div>
        <h2>About Me</h2>
        <p class="lead">
          I enjoy building websites that are simple to use, visually clean, and focused on solving real problems.
          My work includes full-stack development with MongoDB, Express, React, and Node.js.
        </p>
        <div class="info-grid">
          <div class="card"><small>Education</small>Bachelor in Information Technology</div>
          <div class="card"><small>Location</small>Butwal, Nepal</div>
          <div class="card"><small>Experience</small>1+ Years</div>
          <div class="card"><small>Interest</small>Coding, Designing</div>
        </div>
      </div>
      <div class="image-card">
        <img src="$imageDataUri" alt="Anita Gyawali portrait" />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div class="card skill">React</div>
        <div class="card skill">Node.js</div>
        <div class="card skill">JavaScript</div>
        <div class="card skill">Tailwind CSS</div>
        <div class="card skill">MongoDB</div>
        <div class="card skill">Express</div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <h2>Working Experience</h2>
      <div class="timeline">
        <div class="timeline-item">
          <h3>Full-Stack Developer (MERN)</h3>
          <p class="muted">2025 - Present</p>
          <p>Developed and maintained responsive web applications using React.js, Node.js, and MongoDB.</p>
        </div>
        <div class="timeline-item">
          <h3>Frontend Development Projects</h3>
          <p class="muted">2024 - 2025</p>
          <p>Created interactive interfaces and student projects focused on usability, structure, and responsive design.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="contact-box">
        <h2>Contact</h2>
        <p class="muted">Email: your-email@example.com</p>
        <p class="muted">Location: Butwal, Nepal</p>
      </div>
    </div>
  </section>

  <div class="wrap footer">
    Offline portfolio file generated for direct download and viewing without extracting a ZIP.
  </div>
</body>
</html>
"@

Set-Content -LiteralPath $outputPath -Value $html -Encoding UTF8
Write-Host "Created offline HTML at $outputPath"
