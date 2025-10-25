'use client';

import { useState } from 'react';

export default function AdmissionContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    class: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="admission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Admission Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ভর্তি চলছে
            </h2>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-8">
              <p className="text-xl font-semibold text-gray-900 mb-2">
                🔥 সীমিত আসন
              </p>
              <p className="text-lg text-gray-700">
                আগে এলে আগে সুযোগ - দেরি না করে আজই ভর্তি হন
              </p>
            </div>

            {/* Contact Info */}
            <div id="contact" className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">ফোন</h3>
                  <p className="text-gray-700">01XXXXXXXXX</p>
                  <p className="text-gray-700">01XXXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">ঠিকানা</h3>
                  <p className="text-gray-700">
                    আপনার এলাকা/রোড<br />
                    শহর, জেলা<br />
                    পোস্ট কোড
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🕘</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">ক্লাসের সময়</h3>
                  <p className="text-gray-700">
                    বিকাল ৪:০০ - ৬:০০<br />
                    সন্ধ্যা ৬:৩০ - ৮:৩০
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">ইমেইল</h3>
                  <p className="text-gray-700">quantumdots@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ভর্তির জন্য প্রয়োজনীয়:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700">সর্বশেষ পরীক্ষার ফলাফল</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700">অভিভাবকের যোগাযোগ নম্বর</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700">১ কপি পাসপোর্ট সাইজ ছবি</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              যোগাযোগ করুন
            </h3>
            <p className="text-gray-700 mb-6">
              ফর্ম পূরণ করুন, আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  শিক্ষার্থীর নাম *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="নাম লিখুন"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  মোবাইল নম্বর *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="01XXXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="class" className="block text-gray-700 font-semibold mb-2">
                  ক্লাস নির্বাচন করুন *
                </label>
                <select
                  id="class"
                  name="class"
                  required
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">ক্লাস নির্বাচন করুন</option>
                  <option value="class-6">Class 6</option>
                  <option value="class-7">Class 7</option>
                  <option value="class-8">Class 8</option>
                  <option value="class-9-science">Class 9 - Science</option>
                  <option value="class-9-arts">Class 9 - Arts</option>
                  <option value="class-9-commerce">Class 9 - Commerce</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  বার্তা (ঐচ্ছিক)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="কোন প্রশ্ন বা বিশেষ তথ্য থাকলে লিখুন..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                সাবমিট করুন
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
