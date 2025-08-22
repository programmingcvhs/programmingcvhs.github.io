# PAWD Club Website

A modern, responsive website for the Programming and Web Development (PAWD) club built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Beautiful gradient backgrounds, glassmorphism effects, and smooth animations
- **Responsive**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive**: Engaging animations and hover effects throughout
- **Form Integration**: Connected to Google Sheets API for seamless signup processing
- **Performance Optimized**: Built with Next.js 14 and optimized for speed

## 📱 Pages

1. **Homepage**: Hero section with club introduction and key features
2. **About**: Detailed learning journey and curriculum information
3. **Team**: Meet the club leadership with detailed member profiles
4. **Signup**: Application form with Houston ISD email validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React
- **Form Handling**: Native fetch API with Google Sheets integration
- **TypeScript**: Full type safety throughout the application

## 🏗️ Project Structure

```
pawd-club/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Homepage
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── team/
│   │   └── page.tsx         # Team page
│   └── signup/
│       └── page.tsx         # Signup form
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Footer.tsx           # Footer component
│   └── ui/
│       ├── Button.tsx       # Reusable button component
│       └── Card.tsx         # Card components
├── lib/
│   └── utils.ts             # Utility functions
└── configuration files...
```

## 🎨 Design Features

- **Custom Gradients**: Purple to blue gradient themes throughout
- **Glassmorphism**: Frosted glass effects on cards and overlays
- **Smooth Animations**: Page transitions, hover effects, and loading states
- **Responsive Typography**: Scales beautifully across all screen sizes
- **Interactive Elements**: Buttons, cards, and navigation with micro-interactions

## 📋 Form Features

- **Real-time Validation**: Instant feedback on form inputs
- **Email Format Enforcement**: Houston ISD email format validation
- **Error Handling**: Comprehensive error messages and states
- **Success Feedback**: Clear confirmation when application is submitted
- **Loading States**: Visual feedback during form submission

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd pawd-club
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🔧 Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Customization

### Adding Team Members
Edit the `teamMembers` array in `app/team/page.tsx`:

```typescript
const teamMembers = [
  {
    id: 1,
    name: "Your Name",
    role: "Your Role",
    grade: "Your Grade",
    bio: "Your bio...",
    skills: ["Skill1", "Skill2"],
    achievements: ["Achievement 1", "Achievement 2"],
    social: {
      github: "https://github.com/username",
      linkedin: "https://linkedin.com/in/username",
      email: "email@pawd.club"
    },
    favoriteProject: "Project name"
  }
  // ... more members
]
```

### Updating Form API
The signup form uses the Google Sheets API. The endpoint is configured in `app/signup/page.tsx`. Update the URL if needed:

```typescript
const response = await fetch('YOUR_SHEETS_API_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify([formData])
})
```

### Styling Customization
- Colors: Update the Tailwind config in `tailwind.config.js`
- Animations: Modify or add new animations in the config
- Typography: Change fonts by updating the Google Fonts import in `globals.css`

## 🎯 Key Features Explained

### Responsive Navigation
- Mobile-first design with hamburger menu
- Smooth animations and active state indicators
- Backdrop blur effect when scrolled

### Form Validation
- Houston ISD email format: `s#######@online.houstonisd.org`
- Required field validation
- Real-time error feedback
- Success/error state management

### Animation System
- Page load animations with staggered elements
- Hover effects on interactive elements
- Scroll-triggered animations using Intersection Observer
- Loading states for async operations

## 📱 Mobile Optimization

- Touch-friendly button sizes
- Optimized typography scaling
- Responsive grid layouts
- Mobile menu with smooth transitions
- Optimized images and performance

## 🔒 Security Features

- Email format validation
- Input sanitization
- HTTPS-only API calls
- No sensitive data storage

## 📊 Performance

- Next.js Image optimization
- Code splitting and lazy loading
- Minimal bundle size
- Fast page transitions
- Optimized animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ Support

For questions or support, contact the PAWD team at `info@pawd.club` or create an issue in this repository.

---

Made with ❤️ by the PAWD Club Team
