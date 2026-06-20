# ResumeAI - Free Professional Resume Builder

ResumeAI is a modern, responsive, and completely free online resume builder. It allows users to create professional, ATS-friendly resumes in minutes and download them as high-quality PDFs. Built for performance and aesthetics.

## Features

- **Modern UI**: Premium aesthetics with glassmorphism, gradients, and smooth animations.
- **Live Preview**: See your resume update instantly as you type.
- **PDF Export**: Download your finalized resume as a high-quality PDF.
- **Auto-Save**: Form data is automatically saved to LocalStorage, ensuring you never lose your progress.
- **Responsive Design**: Fully functional and beautifully responsive on both desktop and mobile devices.
- **Copy Content**: Easily copy your resume content to the clipboard as plain text.

## Tech Stack

- **Framework**: React 19 (via Vite)
- **Styling**: Tailwind CSS (v3)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **PDF Generation**: html2canvas + jsPDF

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Ensure you have Node.js (v18+ recommended) and npm installed.

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd ResumeBuilder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173/` to view the application.

## Deployment to Vercel

Deploying to Vercel is extremely fast and straightforward.

### Method 1: Using the Vercel Dashboard (Recommended)
1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click on **Add New...** > **Project**.
4. Import your newly created repository.
5. Vercel will automatically detect that it's a Vite project. The default settings will be:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**. Your site will be live in a few minutes.

### Method 2: Using Vercel CLI
1. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Run the deployment command in the project root:
   ```bash
   vercel
   ```
3. Follow the CLI prompts to deploy. To deploy to production, run:
   ```bash
   vercel --prod
   ```

## Folder Structure

```
src/
 ├── components/
 │   ├── Navbar.jsx          # Top navigation bar
 │   ├── Hero.jsx            # Hero section with animations
 │   ├── ResumeForm.jsx      # Input form for resume data
 │   ├── ResumePreview.jsx   # Live preview and PDF export logic
 │   └── Footer.jsx          # Bottom footer
 ├── pages/
 │   └── Home.jsx            # Main page assembling the components
 ├── App.jsx                 # Root React component
 ├── main.jsx                # Application entry point
 └── index.css               # Global CSS and Tailwind directives
```

## Credits

Developed by **Rishikant Kumar**.
*Built for Digital Heroes.*
"# Resume-Builder" 
