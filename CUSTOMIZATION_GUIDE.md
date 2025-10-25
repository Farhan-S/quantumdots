# 🎨 Customization Guide for Quantum Dots Landing Page

## Quick Customization Checklist

### ✅ Essential Updates (Must Do)

#### 1. Update Contact Information

**File:** `components/AdmissionContact.tsx` (Lines 47-87)

```tsx
// Replace phone numbers
<p className="text-gray-700">01XXXXXXXXX</p>  // Line 48
<p className="text-gray-700">01XXXXXXXXX</p>  // Line 49

// Replace address
<p className="text-gray-700">
  আপনার এলাকা/রোড<br />      // Replace with actual area
  শহর, জেলা<br />            // Replace with city, district
  পোস্ট কোড                  // Replace with postal code
</p>

// Replace email
<p className="text-gray-700">quantumdots@gmail.com</p>  // Line 81
```

**File:** `components/Footer.tsx` (Lines 49-70)

Update the same contact info in footer section.

---

#### 2. Update Teacher Photo

**File:** `components/AboutTeacher.tsx` (Line 12-18)

Replace the emoji placeholder with actual photo:

```tsx
// Current (emoji):
<div className="text-8xl mb-4">👨‍🏫</div>

// Replace with:
<img
  src="/images/teacher-ismail.jpg"
  alt="Md. Ismail"
  className="w-80 h-80 rounded-full object-cover shadow-2xl"
/>
```

**Steps:**

1. Place teacher photo in `public/images/teacher-ismail.jpg`
2. Update the code above

---

#### 3. Update Class Timings

**File:** `components/AdmissionContact.tsx` (Lines 67-71)

```tsx
<p className="text-gray-700">
  বিকাল ৪:০০ - ৬:০০
  <br /> // Update timing সন্ধ্যা ৬:৩০ - ৮:৩০ // Update timing
</p>
```

---

### 🎯 Optional Updates

#### 4. Add Social Media Links

**File:** `components/Footer.tsx` (Lines 79-89)

```tsx
<a href="https://facebook.com/yourpage" className="...">
  📘  {/* Facebook */}
</a>
<a href="https://instagram.com/yourpage" className="...">
  📸  {/* Instagram */}
</a>
<a href="https://wa.me/8801XXXXXXXXX" className="...">
  💬  {/* WhatsApp */}
</a>
```

---

#### 5. Update Testimonials

**File:** `components/Testimonials.tsx` (Lines 4-48)

Add real student/parent reviews:

```tsx
{
  name: "আপনার শিক্ষার্থীর নাম",
  class: "Class 9 - Science",
  image: "👦",  // or use actual image
  rating: 5,
  text: "আসল রিভিউ এখানে লিখুন..."
}
```

---

#### 6. Change Brand Colors

**Main Colors Used:**

- Blue: `bg-blue-600`, `text-blue-600`
- Purple: `bg-purple-600`, `text-purple-600`
- Green: `bg-green-600`, `text-green-600`

**To change primary color from blue to another:**

Search and replace in all component files:

- `blue-50` → `yourcolor-50`
- `blue-600` → `yourcolor-600`
- `blue-700` → `yourcolor-700`

**Available Tailwind colors:**

- `red`, `orange`, `yellow`, `green`, `teal`, `cyan`, `indigo`, `purple`, `pink`

---

#### 7. Update Course Fees (if needed)

**File:** `components/Courses.tsx`

Add a fee section to each course card:

```tsx
<div className="mt-4 p-4 bg-blue-50 rounded-lg">
  <p className="text-lg font-bold text-gray-900">মাসিক ফি: ৳২,০০০</p>
</div>
```

---

#### 8. Add Hero Section Background Image

**File:** `components/HeroSection.tsx` (Line 4)

```tsx
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16"
  style={{
    backgroundImage: 'url(/images/hero-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
```

---

### 🖼️ Adding Images

#### Image Directory Structure:

```
public/
  images/
    teacher-ismail.jpg
    hero-bg.jpg
    classroom.jpg
    logo.png
```

#### Logo Addition:

**File:** `components/Navbar.tsx` (Lines 26-30)

```tsx
<Link href="/" className="flex items-center space-x-2">
  <img src="/images/logo.png" alt="Quantum Dots" className="h-10 w-10" />
  <span className="text-2xl font-bold text-blue-600">Quantum Dots</span>
</Link>
```

---

### 📱 WhatsApp Integration

**Quick Contact Button:**

Add to `components/AdmissionContact.tsx`:

```tsx
<a
  href="https://wa.me/8801XXXXXXXXX?text=আসসালামু%20আলাইকুম,%20আমি%20ভর্তি%20সম্পর্কে%20জানতে%20চাই"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-24 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
>
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
</a>
```

Replace `8801XXXXXXXXX` with actual WhatsApp number (country code + number).

---

### 🎬 Animation Options (Advanced)

For smoother animations, you can add libraries like:

```bash
npm install framer-motion
```

Then wrap components with motion:

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Your content */}
</motion.div>;
```

---

### 📊 Google Analytics (Optional)

**File:** `app/layout.tsx`

Add inside `<head>`:

```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

---

### 🔍 SEO Optimization Done ✓

Already implemented:

- ✅ Meta title and description
- ✅ Keywords
- ✅ Proper heading structure (H1, H2, H3)
- ✅ Alt text ready for images
- ✅ Semantic HTML
- ✅ Mobile responsive

---

### 📞 Need Help?

If you need help with customization:

1. Check the component files
2. Each section is clearly commented
3. Use Ctrl+F to search for text you want to change
4. Test changes with `npm run dev`

---

**Remember:** Always test in browser after making changes!

```bash
npm run dev
# Visit: http://localhost:3000
```
