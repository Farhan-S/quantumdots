# Quantum Dots Academic & Admission Coaching

A modern, responsive landing page for **Quantum Dots Academic & Admission Coaching** - a Bangla medium coaching center run by **Md. Ismail**.

## 🎯 Features

- **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Bangla Typography** - Optimized Bangla font rendering with Hind Siliguri
- **Smooth Navigation** - Sticky navbar with smooth scroll to sections
- **Beautiful UI Components** - Modern gradient designs with Tailwind CSS
- **Contact Form** - Interactive admission inquiry form
- **SEO Optimized** - Proper meta tags for search engines

## 📚 Sections Included

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **Why Us** - 6 compelling reasons to choose Quantum Dots
3. **About Teacher** - Introduction to Md. Ismail with credentials
4. **Courses** - Detailed course information for Class 6-9
   - Class 6, 7, 8 (All subjects)
   - Class 9 Science Bundle
   - Class 9 Arts + Commerce Bundle
5. **Features** - Special services (Model tests, Progress reports, Mentoring)
6. **Testimonials** - Student and parent feedback
7. **Admission & Contact** - Contact information and inquiry form
8. **Footer** - Complete contact details and quick links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd quantumdots
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Tech Stack

- **Framework**: Next.js 15 (React)
- **Styling**: Tailwind CSS
- **Typography**: Hind Siliguri (Bengali font)
- **Language**: TypeScript
- **Deployment Ready**: Vercel, Netlify, or any Node.js hosting

## 📝 Customization Guide

### Update Contact Information

Edit `/components/AdmissionContact.tsx` and `/components/Footer.tsx`:

- Phone numbers
- Email address
- Physical address
- Class timings

### Update Teacher Information

Edit `/components/AboutTeacher.tsx`:

- Teacher name
- Credentials
- Photo (replace emoji with actual image)

### Update Course Details

Edit `/components/Courses.tsx`:

- Add/remove subjects
- Modify class information
- Update pricing (if needed)

### Change Colors

The color scheme uses Tailwind CSS. Main colors:

- Primary: Blue (blue-600)
- Secondary: Purple (purple-600)
- Accent: Various gradients

Update colors in components by changing Tailwind classes like:

- `bg-blue-600` → `bg-[your-color]`
- `text-blue-600` → `text-[your-color]`

### Add Real Images

Replace emoji placeholders with actual images:

```tsx
// In AboutTeacher.tsx, replace:
<div className="text-8xl mb-4">👨‍🏫</div>

// With:
<img src="/images/teacher.jpg" alt="Md. Ismail" className="w-full h-full object-cover rounded-full" />
```

### Update Meta Tags

Edit `/app/layout.tsx`:

- Title
- Description
- Keywords for SEO

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with mobile-first design.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Deploy to Netlify

1. Build the project:

```bash
npm run build
```

2. Deploy the `out` folder to Netlify

## 📞 Support & Contact

For customization help or issues:

- Create an issue in the repository
- Contact the developer

## 📄 License

This project is created for Quantum Dots Academic & Admission Coaching.

---

**Made with ❤️ for better education**
