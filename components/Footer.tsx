import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Quantum Dots
            </h3>
            <p className="text-gray-400 mb-4">
              Academic & Admission Coaching
            </p>
            <p className="text-gray-400">
              ভবিষ্যতের প্রস্তুতি আজ থেকেই<br />
              Class 6 থেকে Class 9 পর্যন্ত<br />
              সব বিষয়ের মানসম্মত কোচিং
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Teacher
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#admission" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Admission
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">যোগাযোগ</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <span>01XXXXXXXXX</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <span>quantumdots@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>
                  আপনার এলাকা/রোড<br />
                  শহর, জেলা
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🕘</span>
                <span>
                  বিকাল ৪:০০ - ৮:৩০
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media (Optional) */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl">
                  📘
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl">
                  📸
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl">
                  💬
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                শিক্ষক: Md. Ismail
              </p>
              <p className="text-gray-400">
                প্রধান শিক্ষক ও প্রতিষ্ঠাতা
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Quantum Dots Academic & Admission Coaching. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Made with ❤️ for better education
          </p>
        </div>
      </div>
    </footer>
  );
}
