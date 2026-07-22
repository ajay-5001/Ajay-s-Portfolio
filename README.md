# 🚀 Ajay S — Personal Developer Portfolio

<div align="center">

  ![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-0055FF?style=for-the-badge&logo=framer&logoColor=white)
  ![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

  <br />

  **A sleek, fast, and fully responsive personal portfolio website for Ajay S — Data Analyst & Python Developer.**

  [View Live Demo](#-deployment) · [Report Bug](https://github.com/ajay-5001/Ajay-s-Portfolio/issues) · [Request Feature](https://github.com/ajay-5001/Ajay-s-Portfolio/issues)

</div>

---

## 📌 Overview

This repository contains the source code for **Ajay S's Personal Developer Portfolio**, crafted to showcase expertise in Data Analytics, Machine Learning, Python Development, and Full-Stack Web Applications. Built with React 19, Vite, and Tailwind CSS, it offers lightning-fast performance, smooth animations, and a modern aesthetic with built-in dark mode support.

### 🌟 Key Highlights
- ⚡ **Lightning Fast:** Powered by Vite for near-instant HMR and production bundle optimization.
- 🎨 **Modern & Minimalist UI:** Styled with custom Tailwind CSS utility classes and modern glassmorphism UI elements.
- 🌓 **Dark & Light Mode:** Built-in seamless theme toggling with preference persistence.
- 📱 **Fully Responsive:** Fluid layouts designed for desktops, tablets, and smartphones.
- ✉️ **Integrated Contact Form:** Powered by EmailJS for direct client-side email delivery without backend overhead.
- 📜 **Interactive Sections:** Dynamic rendering of Skills, Experience, Featured Projects, Education, and Industry Certifications.

---

## 🛠️ Tech Stack & Tools

### **Frontend & UI Core**
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & PostCSS
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Email Service:** [EmailJS](https://www.emailjs.com/)

### **Developer / Analytics Focus**
- **Languages:** Python, SQL, JavaScript (ES6+), HTML5, CSS3
- **Data & AI:** Power BI, Microsoft Excel, Generative AI / RAG, Google Cloud Platform (GCP)
- **Databases:** MySQL, MongoDB, Relational Databases

---

## 📁 Directory Structure

```
Portfolio/
├── public/
│   ├── _redirects            # SPA redirect configuration for Netlify/Render
│   ├── favicon.svg          # Portfolio favicon logo
│   └── icons.svg            # SVG icon assets
├── src/
│   ├── assets/              # Images, avatars, and visual branding
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, ScrollToTop
│   │   └── sections/        # Hero, About, Skills, Experience, Projects, Certifications, Contact, Education
│   ├── data/
│   │   └── portfolio.js     # Single source of truth for portfolio content & metrics
│   ├── App.css              # Custom utility styles & animations
│   ├── App.jsx              # Main App entry & layout wrapper
│   ├── index.css            # Tailwind directives & base styles
│   └── main.jsx             # React DOM root entry
├── .gitignore               # Git ignored files & directories
├── .oxlintrc.json           # Linter configuration (Oxlint)
├── package.json             # NPM package definitions & scripts
├── postcss.config.js        # PostCSS setup
├── tailwind.config.js       # Tailwind CSS theme extension
├── vercel.json              # Vercel deployment rewrite rules
└── vite.config.js           # Vite bundler configuration
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have Node.js (v18.0.0 or higher) and npm installed:
```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ajay-5001/Ajay-s-Portfolio.git
   cd Portfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 📩 Configuring the Contact Form (EmailJS)

To enable client-side email delivery directly to your inbox:

1. Register for a free account at [EmailJS](https://www.emailjs.com/).
2. Create an **Email Service** (e.g., Gmail integration) and save the `Service ID`.
3. Create an **Email Template** with fields matching `{{name}}`, `{{email}}`, and `{{message}}`. Save the `Template ID`.
4. Retrieve your **Public Key** from **Account > API Keys**.
5. Update your configuration inside `src/components/sections/Contact.jsx` or store them in a `.env` file:

```javascript
const serviceId = "YOUR_SERVICE_ID";
const templateId = "YOUR_TEMPLATE_ID";
const publicKey = "YOUR_PUBLIC_KEY";
```

---

## ⚙️ Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Vite dev server with instant HMR. |
| `npm run build` | Compiles production bundle to the `dist/` directory. |
| `npm run preview` | Previews the local production build locally. |
| `npm run lint` | Runs Oxlint code diagnostics and code check. |

---

## 🌐 Deployment

### Deploying to Vercel
The project includes a `vercel.json` file for single-page app (SPA) routing:
1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Select **Vite** as the framework preset.
3. Deploy! Vercel handles builds automatically on push.

### Deploying to Netlify / Render
`public/_redirects` is pre-configured with `/* /index.html 200` to support client-side routing.
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

---

## 👨‍💻 Connect with Ajay S

- **GitHub:** [@ajay-5001](https://github.com/ajay-5001)
- **LinkedIn:** [Ajay S](https://linkedin.com/in/ajay-s-5b7871417)
- **Email:** [ajayselvam1609@gmail.com](mailto:ajayselvam1609@gmail.com)
- **Phone:** +91 9025209954

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
