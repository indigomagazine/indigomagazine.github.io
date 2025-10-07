# Indigo Magazine - React Migration

A modern, fully responsive literary magazine website built with React and Vite. This project represents a complete migration from a static HTML/CSS/JavaScript site to a modern React application while maintaining 100% visual fidelity to the original design.

## 🚀 Features

- **React-based Architecture** - Modern component-based structure for maintainability
- **React Router** - Seamless client-side navigation
- **Dark/Light Mode** - Theme switching with localStorage persistence
- **Responsive Design** - Mobile-friendly layouts across all devices
- **Interactive Elements** - Floating photos, scroll effects, theme toggle
- **31 Articles** - Fully migrated with original styling preserved
- **4 Issues** - Kismet, NOT, Otherworldly, and Reminiscence
- **GitHub Pages Deployment** - Automated deployment with GitHub Actions

## 📦 Tech Stack

- **React 19.1.1** - UI library
- **React Router 6.30.1** - Client-side routing
- **Vite 7.1.7** - Build tool and development server
- **CSS3** - Custom styling with theme support

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/indigomagazine/indigomagazine.github.io.git
cd indigomagazine.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
indigomagazine.github.io/
├── public/              # Static assets
│   ├── assets/         # Fonts, logos, backgrounds, cursors
│   ├── NOT photos/     # NOT issue photos
│   ├── photos/         # General photos
│   └── article photos/ # Article-specific photos
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Header.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── HeroSection.jsx
│   │   └── FloatingPhotos.jsx
│   ├── pages/          # Page components
│   │   ├── IndexPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── CreativePage.jsx
│   │   ├── VisualArtsPage.jsx
│   │   ├── KismetPage.jsx
│   │   ├── NOTPage.jsx
│   │   ├── OtherworldlyPage.jsx
│   │   ├── ReminiscencePage.jsx
│   │   └── articles/   # 31 article components
│   ├── hooks/          # Custom React hooks
│   │   └── useTheme.js
│   ├── styles/         # Global CSS files
│   │   ├── style.css
│   │   ├── NOThome.css
│   │   └── laQuinta.css
│   ├── App.jsx         # Main app component with routing
│   └── main.jsx        # Entry point
├── legacy/             # Original HTML/CSS/JS (reference)
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages deployment
```

## 🎨 Key Features

### Theme Switching
- Light and dark mode support
- Persistent theme selection via localStorage
- Smooth transitions between themes

### Floating Photos Effect
- Interactive photo gallery on Visual Arts page
- Mouse-following animation
- Random positioning with overlap detection

### Article System
- 31 fully migrated articles across 4 issues
- Unique styling per article preserved
- Custom fonts, backgrounds, and cursors
- Responsive layouts for all screen sizes

### Navigation
- Client-side routing for instant page transitions
- Clean URL structure
- Back/forward browser navigation support

## 🚢 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow:

1. Builds the React application
2. Uploads the build artifact
3. Deploys to GitHub Pages

### Manual Deployment

```bash
npm run build
# The dist/ folder contains the production build
```

## 📝 Migration Details

This project was migrated from a static HTML/CSS/JavaScript site to React with the following goals:
- **Zero visual changes** - Maintain exact pixel-perfect appearance
- **Modern architecture** - Component-based structure for maintainability
- **Improved performance** - Code splitting and optimized builds
- **Better developer experience** - Hot module replacement, modern tooling

### Migration Achievements
- ✅ All 31 articles migrated with original styling
- ✅ Theme switching functionality preserved
- ✅ Interactive elements (floating photos, scroll effects) working
- ✅ All images and assets properly referenced
- ✅ Responsive design maintained across all devices
- ✅ Custom fonts and cursors working correctly
- ✅ Clean component structure for future updates

## 🤝 Contributing

This is the official website for Indigo Magazine at UT Dallas. For contributions or suggestions, please contact the Indigo Magazine team.

## 📧 Contact

- **Email**: indigomagazineutd@gmail.com
- **Instagram**: [@utdindigo](https://www.instagram.com/utdindigo/)
- **Twitter**: [@utdindigo](https://x.com/utdindigo)

## 📄 License

Copyright © 2025 Indigo Magazine. All rights reserved.

---

**Built with ❤️ by the Indigo Magazine Team**
