import AboutTeacher from '@/components/AboutTeacher';
import AdmissionContact from '@/components/AdmissionContact';
import Courses from '@/components/Courses';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Testimonials from '@/components/Testimonials';
import WhyUs from '@/components/WhyUs';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyUs />
      <AboutTeacher />
      <Courses />
      <Features />
      <Testimonials />
      <AdmissionContact />
      <Footer />
      <ScrollToTop />
    </>
  );
}
