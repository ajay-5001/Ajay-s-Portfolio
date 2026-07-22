# Ajay S Personal Portfolio

A modern, fast, and fully responsive single-page developer portfolio built for a Data Analyst and Python Developer. 

## Features
- **Tech Stack:** React (Vite), Tailwind CSS, Framer Motion
- **Design:** Clean, minimalist UI with a teal accent, smooth scrolling, and accessible semantic HTML.
- **Dark Mode:** Built-in light/dark theme toggler.
- **Contact Form:** Client-side email sending via EmailJS.
- **Deployment Ready:** Configured for seamless deployment on Vercel or Render.

## Getting Started

### Prerequisites
- Node.js installed

### Installation
1. Clone this repository or open the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Configuring EmailJS
To enable the contact form to send emails directly to your inbox without a backend:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Add a new **Email Service** (e.g., Gmail) and copy your **Service ID**.
3. Create an **Email Template**. Make sure the template variables match the form field `name` attributes (e.g., `{{name}}`, `{{email}}`, `{{message}}`). Copy your **Template ID**.
4. Go to **Account > API Keys** and copy your **Public Key**.
5. Open `src/components/sections/Contact.jsx` and replace the placeholder variables inside the `handleSubmit` function:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```
   *(Alternatively, you can move these into a `.env` file.)*

## Deployment

### Vercel
This project includes a `vercel.json` file for routing configuration. To deploy:
- Push the code to a GitHub repository.
- Import the project into Vercel.
- Vercel will automatically detect Vite and configure the build settings.

### Render / Netlify
This project includes a `public/_redirects` file to handle routing properly. To deploy on Render:
- Create a new "Static Site".
- Connect your repository.
- Build Command: `npm run build`
- Publish Directory: `dist`
