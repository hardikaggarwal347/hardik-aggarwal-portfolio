# Hardik Aggarwal - Premium Personal Portfolio

A bright, modern, clean, and professional personal developer portfolio for **Hardik Aggarwal**, Computer Science student specializing in Artificial Intelligence at Chandigarh University.

Designed with a bright aesthetic (white surfaces, soft blue gradients, cyan accents, navy typography, glassmorphism, and generous whitespace), built to showcase real engineering projects and credentials to recruiters, internship companies, professors, and collaborators.

---

## 🚀 Technology Stack

- **React 19**
- **Vite**
- **Tailwind CSS v4**
- **TypeScript**
- **Lucide React** (Modern iconography)
- **PDF-Lib** (Resume generation & static asset handling)

---

## 📂 Project Structure

```text
├── public/
│   └── assets/
│       ├── 25BAI10001_Hardik_Resume.pdf   <-- Actual PDF resume for viewing & downloading
│       └── COA_Assignment_1.pdf           <-- Real COA Assignment 1 submission document
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                      <-- Sticky 3-zone navigation with mobile drawer
│   │   ├── Hero.tsx                        <-- Bright hero section with abstract AI visual
│   │   ├── About.tsx                       <-- Bio, 3 highlight cards, quick profile card
│   │   ├── Education.tsx                   <-- Academic timeline (CU, LSMS, OPBMS)
│   │   ├── Projects.tsx                    <-- Featured projects with interactive modals
│   │   ├── ProjectDetailModal.tsx          <-- Deep-dive architecture & pipeline walkthrough
│   │   ├── Experience.tsx                  <-- Social Internship (NGO 30 Hours)
│   │   ├── Skills.tsx                      <-- Technical & Interpersonal skill cards
│   │   ├── Certifications.tsx              <-- 6 verified certifications & details modal
│   │   ├── CoaTool.tsx                     <-- Interactive Number System Converter & Assignments
│   │   ├── HobbiesLanguages.tsx            <-- Hobbies & Languages with proficiency
│   │   ├── ResumeSection.tsx               <-- Dedicated resume overview & download zone
│   │   ├── Contact.tsx                     <-- Contact details & direct messaging form
│   │   ├── Footer.tsx                      <-- Minimal brand footer
│   │   ├── BackToTop.tsx                   <-- Smooth scroll-to-top button
│   │   └── TechIcons.tsx                   <-- Clean SVG icons for languages
│   ├── data/
│   │   └── portfolio.ts                    <-- All personal data, projects & contact links
│   ├── App.tsx                             <-- Main application layout
│   ├── index.css                           <-- Tailwind styles, gradients & scrollbars
│   └── main.tsx                            <-- Entry point
├── index.html                              <-- SEO metadata & OpenGraph tags
├── package.json
└── vite.config.ts
```

---

## 🛠️ Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### 2. Installation
Install all required dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local development server at `http://localhost:3000`:
```bash
npm run dev
```

### 4. Production Build
Compile and bundle the project for production:
```bash
npm run build
```
The output will be placed in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

This repository is pre-configured and completely ready for 1-click deployment to **Vercel**:

1. Push your repository to GitHub or GitLab.
2. Sign in to your [Vercel Dashboard](https://vercel.com).
3. Click **"Add New..."** → **"Project"**.
4. Import your portfolio repository.
5. In the Build & Development Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**.

Your website will be live with full SSL, global CDN, and automatic branch previews.

---

## ✏️ Customization Guide

### 1. How to Change Personal Information
All personal details (bio, education records, project highlights, UID, university) are centrally managed in:
👉 `src/data/portfolio.ts`

Simply edit the corresponding fields inside `portfolioData`:
```typescript
export const portfolioData = {
  personal: {
    name: "Hardik Aggarwal",
    title: "Computer Science Student | AI Enthusiast | Developer",
    university: "Chandigarh University",
    uid: "25BAI10001",
    email: "hardikaggarwal347@gmail.com",
    phone: "+91-9501500347",
    ...
  }
}
```

### 2. Verified Social & Developer Profiles
Currently configured in `src/data/portfolio.ts`:
- **GitHub**: [github.com/hardikaggarwal347](https://github.com/hardikaggarwal347)
- **LinkedIn**: [linkedin.com/in/hardik-aggarwal-253697384](https://www.linkedin.com/in/hardik-aggarwal-253697384)
- **Email**: `hardikaggarwal347@gmail.com`

To update them in the future, edit `socialLinks` inside `src/data/portfolio.ts`:
```typescript
socialLinks: {
  linkedin: "https://www.linkedin.com/in/hardik-aggarwal-253697384",
  github: "https://github.com/hardikaggarwal347",
  email: "mailto:hardikaggarwal347@gmail.com",
}
```

### 3. How to Replace the Resume PDF
To update your resume with a newer version:
1. Place your updated PDF file in the `public/assets/` folder with the name:
   `25BAI10001_Hardik_Resume.pdf`
2. If your filename is different, update the `resumePath` property in `src/data/portfolio.ts`:
   ```typescript
   resumePath: "/assets/your_new_resume.pdf"
   ```
3. Re-run `npm run build` to package the asset into production.

### 4. How to Update COA Tools & Practical Records
Inside `src/data/portfolio.ts`:
- **COA GitHub Repository**: Update `coaGithubUrl`:
  ```typescript
  coaGithubUrl: "https://github.com/hardikaggarwal347/coa-practicals"
  ```
- **Practical Record Document**: Place your PDF inside `public/assets/` and point `coaPracticalFile` to it:
  ```typescript
  coaPracticalFile: "/assets/COA_Practical_Record.pdf"
  ```

---

## 📄 License
This project is open-source and available under the Apache 2.0 License.
