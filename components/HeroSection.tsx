import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Quantum Dots Academic &<br />Admission Coaching
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
            ভবিষ্যতের প্রস্তুতি আজ থেকেই
          </p>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Class 6 থেকে Class 9 পর্যন্ত সব বিষয়ের মানসম্মত কোচিং
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#admission"
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              ভর্তি চলছে
            </Link>
            <Link 
              href="#contact"
              className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              যোগাযোগ করুন
            </Link>
          </div>

          {/* Decorative elements */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">6-9</div>
              <div className="text-gray-700">ক্লাস ৬ থেকে ৯</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">সব বিষয়</div>
              <div className="text-gray-700">পূর্ণাঙ্গ পাঠদান</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">Md. Ismail</div>
              <div className="text-gray-700">জাহাঙ্গীরনগর বিশ্ববিদ্যালয়</div>
              <div className="text-sm text-gray-600 mt-1">অভিজ্ঞ শিক্ষক</div>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
}
