# Gururaj Ashok Naik - Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, and Vanilla JavaScript featuring a dark metallic aesthetic.

## Features

✨ **Modern Design**
- Dark metallic color scheme (GitHub Dark inspired)
- Smooth animations and transitions
- Responsive design (mobile-friendly)
- Interactive UI elements

📱 **Responsive Sections**
- Hero Section with CTAs
- About Me with Statistics
- Project Case Studies (3 projects)
- Technical Skills Grid
- Experience & Certifications Timeline
- Contact & Social Links

🎯 **Interactive Elements**
- Mobile navigation with hamburger menu
- Smooth scrolling between sections
- Active nav link highlighting
- Hover animations on cards
- Floating elements in hero section

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Complete styling with dark theme
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Getting Started

### Option 1: Local Development
1. Open `index.html` directly in your browser
2. Edit the files as needed
3. Refresh browser to see changes

### Option 2: Using a Local Server
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx http-server
```

Then visit: `http://localhost:8000`

## Customization Guide

### 1. **Update Personal Information**
In `index.html`, update:
- Navigation links
- Hero section text
- About me paragraph
- Project details
- Skills list
- Experience items
- Social media links in Contact section

### 2. **Change Colors**
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-bg: #0d1117;        /* Main background */
    --card-bg: linear-gradient(...); /* Card background */
    --accent-blue: #58a6ff;       /* Primary accent color */
    --accent-white: #ffffff;      /* Text color */
    --text-primary: #e6edf3;      /* Primary text */
    --text-secondary: #8b949e;    /* Secondary text */
}
```

### 3. **Add Your Resume**
Replace the `downloadResume()` function in `script.js`:
```javascript
function downloadResume() {
    // Change this to your actual resume file path
    window.location.href = '/path/to/your/resume.pdf';
}
```

### 4. **Update Social Links**
In `index.html` Contact section, replace:
- `https://github.com` → Your GitHub profile
- `https://linkedin.com` → Your LinkedIn profile
- `mailto:your.email@example.com` → Your email address
- `https://twitter.com` → Your Twitter/X profile

### 5. **Add Project Details**
Update the project cards with:
- Project titles
- Descriptions
- Technologies used
- Links to live projects or repositories

## Color Scheme Reference

- **Primary Background**: `#0d1117` (Deep Dark)
- **Card Background**: Gradient from `#1f2937` to `#111827`
- **Border**: `#30363d` (Subtle Metallic)
- **Accent Blue**: `#58a6ff` (Primary Accent)
- **Text Primary**: `#e6edf3` (Light Gray)
- **Text Secondary**: `#8b949e` (Medium Gray)

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Minimal CSS framework (no dependencies)
- Smooth animations using CSS transforms and transitions
- Intersection Observer for efficient animations
- Optimized for Core Web Vitals

## Deployment Options

### Static Hosting (Recommended)
- **Vercel** - Drag & drop deployment
- **Netlify** - Connect GitHub repo
- **GitHub Pages** - Free hosting
- **Firebase Hosting** - Google's platform

### Self-Hosted
- Any web server supporting static files
- No backend required

### Deployment Steps (Netlify)
1. Push files to GitHub repository
2. Connect repo to Netlify
3. Deploy automatically on push
4. Custom domain setup in Netlify dashboard

## Tips for Enhancement

1. **Add Project Links**: Update project cards with links to GitHub repos or live demos
2. **Add Blog Section**: Create a blog area for technical articles
3. **Improve SEO**: Add meta tags and structured data
4. **Analytics**: Add Google Analytics for tracking
5. **Contact Form**: Implement a real contact form using services like Formspree or EmailJS
6. **Dark Mode Toggle**: Add a toggle if you want both light/dark themes

## JavaScript Features

- **Mobile Navigation**: Hamburger menu for small screens
- **Scroll Effects**: Navbar shadow on scroll
- **Active Navigation**: Highlights current section
- **Smooth Scrolling**: Page scrolls smoothly to sections
- **Intersection Observer**: Lazy animations on scroll
- **Responsive Design**: Works on all device sizes

## License

Feel free to use this template for your portfolio. Modify it as needed for your personal brand.

## Support

For questions or customization help, refer to:
- HTML Documentation: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS Documentation: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript

---

**Created**: March 2026
**Last Updated**: March 14, 2026
