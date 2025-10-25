export default function Courses() {
  const courses = [
    {
      class: "Class 6",
      title: "ক্লাস ৬ - সব বিষয়",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "আইসিটি", "ইসলাম ও নৈতিক শিক্ষা"],
      features: [
        "বেসিক কনসেপ্ট শক্তিশালী করা",
        "ক্রিয়েটিভ প্রশ্ন বোঝা ও সমাধান",
        "রেগুলার টেস্ট ও মূল্যায়ন"
      ],
      color: "from-blue-400 to-blue-600"
    },
    {
      class: "Class 7",
      title: "ক্লাস ৭ - সব বিষয়",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সামাজিক বিজ্ঞান", "ধর্ম ও নৈতিক শিক্ষা"],
      features: [
        "স্কুল সিলেবাস অনুযায়ী ফোকাস",
        "হোমওয়ার্ক সহ পরিপূর্ণ গাইডলাইন",
        "মাসিক প্রগ্রেস রিপোর্ট"
      ],
      color: "from-green-400 to-green-600"
    },
    {
      class: "Class 8",
      title: "ক্লাস ৮ - সব বিষয়",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সামাজিক বিজ্ঞান", "তথ্য ও যোগাযোগ প্রযুক্তি"],
      features: [
        "JSC প্রস্তুতির ভিত্তি তৈরি",
        "সমস্যা সমাধানে বিশেষ ক্লাস",
        "দুর্বল শিক্ষার্থীদের এক্সট্রা সাপোর্ট"
      ],
      color: "from-purple-400 to-purple-600"
    }
  ];

  const class9Bundles = [
    {
      title: "🔬 Science Bundle 1",
      subtitle: "বিজ্ঞান বিভাগের জন্য সম্পূর্ণ প্যাকেজ",
      subjects: [
        "পদার্থবিজ্ঞান (Physics)",
        "রসায়ন (Chemistry)",
        "জীববিজ্ঞান (Biology)",
        "সাধারণ গণিত (General Math)",
        "উচ্চতর গণিত (Higher Math)"
      ],
      features: [
        "প্রতিটি অধ্যায় টু-দ্য-পয়েন্ট ক্লাস",
        "গাণিতিক সমস্যা বেশি বেশি প্র্যাকটিস",
        "নিয়মিত মূল্যায়ন ও Progress রিপোর্ট",
        "ল্যাব কনসেপ্ট ও ডায়াগ্রাম প্র্যাকটিস"
      ],
      goal: "🎯 লক্ষ্য: SSC - GPA 5 প্রস্তুতি",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "📘 Bundle 2: Arts + Commerce + Science",
      subtitle: "সব বিভাগের জন্য মূল বিষয়সমূহ",
      subjects: [
        "বাংলা (Bangla)",
        "ইংরেজি (English)",
        "গণিত (Mathematics)"
      ],
      features: [
        "বোর্ড ক্রিয়েটিভ প্রস্তুতি",
        "গ্রামার, রাইটিং স্কিল ও কম্পোজিশন প্র্যাকটিস",
        "গণিতে দুর্বলদের অতিরিক্ত সাপোর্ট",
        "মাসিক মক টেস্ট ও প্রশ্নব্যাংক"
      ],
      goal: "🎯 লক্ষ্য: বোর্ড পরীক্ষায় A+ নিশ্চিত করা",
      color: "from-teal-400 to-cyan-600"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            আমাদের কোর্স সমূহ
          </h2>
          <p className="text-xl text-gray-600">
            ক্লাস ৬ থেকে ক্লাস ৯ - সম্পূর্ণ পাঠ্যক্রম
          </p>
        </div>

        {/* Class 6-8 Courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                <div className="text-sm font-semibold mb-2">{course.class}</div>
                <h3 className="text-2xl font-bold">{course.title}</h3>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="mr-2">📚</span>
                    বিষয়সমূহ:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((subject, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="mr-2">✨</span>
                    বিশেষত্ব:
                  </h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Class 9 Special Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Class 9 - বিশেষ প্যাকেজ
            </h3>
            <p className="text-lg text-gray-600">
              SSC প্রস্তুতির শক্তিশালী ভিত্তি
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {class9Bundles.map((bundle, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${bundle.color} p-8 text-white`}>
                  <h4 className="text-3xl font-bold mb-2">{bundle.title}</h4>
                  <p className="text-lg opacity-90">{bundle.subtitle}</p>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-4 text-lg flex items-center">
                      <span className="mr-2">📖</span>
                      বিষয়সমূহ:
                    </h5>
                    <div className="space-y-2">
                      {bundle.subjects.map((subject, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-blue-600 mr-3 text-xl">•</span>
                          <span className="text-gray-800 font-medium">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-4 text-lg flex items-center">
                      <span className="mr-2">⭐</span>
                      বিশেষত্ব:
                    </h5>
                    <ul className="space-y-3">
                      {bundle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-orange-500">
                    <p className="text-lg font-semibold text-gray-900">
                      {bundle.goal}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              আপনার উপযুক্ত কোর্স খুঁজে নিন
            </h3>
            <p className="text-lg mb-6">
              বিস্তারিত জানতে এবং ভর্তির জন্য যোগাযোগ করুন
            </p>
            <a 
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              যোগাযোগ করুন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
