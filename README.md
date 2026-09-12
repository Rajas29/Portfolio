# Rajas Ikharkar — Developer Portfolio (Cricket Stadium Theme)

A production-quality personal portfolio website for **Rajas Ikharkar** (Web Developer), built with **React**, **Vite**, and **Tailwind CSS**, featuring an aesthetic inspired by modern cricket stadiums, night matches, scoreboard telemetry, and player cards.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛠 Customizing Your Portfolio

All personal information, links, and content are centralized in one file:
👉 **[`src/data/portfolioData.js`](./src/data/portfolioData.js)**

### Updating Resume
Replace `resumeUrl: "#"` in `src/data/portfolioData.js` with your resume PDF path or external URL (e.g. `"/Rajas_Ikharkar_Resume.pdf"` placed in the `public/` folder).

### Updating Social & Contact Links
Update `socialLinks` in `src/data/portfolioData.js`:
- `github`: Your GitHub profile link
- `linkedin`: Your LinkedIn profile link
- `email`: `mailto:your-email@example.com`

### Updating Project URLs
Update `githubUrl` and `liveDemoUrl` in the `projects` array of `src/data/portfolioData.js`.

---

## 📁 Project Architecture

```
rajas-portfolio/
├── index.html               # SEO metadata, Google fonts, and favicon
├── package.json
├── tailwind.config.js       # Stadium colors, custom shadows, and animations
├── vite.config.js
└── src/
    ├── main.jsx             # React entry point
    ├── App.jsx              # Section assembler & layout
    ├── index.css            # Base styles & custom stadium glow utilities
    ├── data/
    │   └── portfolioData.js # Centralized profile & project data
    ├── components/
    │   ├── Navbar.jsx       # Sticky glassmorphism header & mobile drawer
    │   ├── Footer.jsx       # Minimal scoreboard-style footer
    │   ├── StadiumBackground.jsx # Night stadium lighting & turf markings
    │   ├── ScoreBadge.jsx   # Telemetry pill component
    │   ├── ProjectCard.jsx  # Match Center project card
    │   └── SkillCategory.jsx# Scorecard skill breakdown
    └── sections/
        ├── Hero.jsx         # Stadium atmosphere, typography & player card
        ├── About.jsx        # Player Profile & engineering background
        ├── Skills.jsx       # Player Statistics & categorized skills
        ├── Projects.jsx     # Match Center fixtures
        ├── Experience.jsx   # Career innings timeline
        ├── Education.jsx    # Career Record academic card
        ├── ResumeCTA.jsx    # Next Innings call to action
        └── Contact.jsx      # Communication channel & form
```

---

## ⚡ Deployment

This project is ready to deploy on:
- **Vercel**: Import repository and deploy automatically with zero configuration.
- **Netlify**: Set build command to `npm run build` and publish directory to `dist`.
- **GitHub Pages**: Build with `npm run build` and publish the `dist` folder.
