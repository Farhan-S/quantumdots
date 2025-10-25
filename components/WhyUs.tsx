export default function WhyUs() {
  const reasons = [
    {
      icon: "👨‍🏫",
      title: "অভিজ্ঞ ও দক্ষ শিক্ষক",
      description: "Md. Ismail স্যার বছরের পর বছর পড়ানোর অভিজ্ঞতা নিয়ে শিক্ষার্থীদের সফলতা নিশ্চিত করেন"
    },
    {
      icon: "📚",
      title: "বোর্ড সিলেবাস অনুযায়ী পাঠদান",
      description: "বোর্ড ও স্কুল সিলেবাস সম্পূর্ণভাবে অনুসরণ করে পড়ানো হয়"
    },
    {
      icon: "👥",
      title: "ছোট ব্যাচে ক্লাস",
      description: "প্রতিটি শিক্ষার্থীর উপর ব্যক্তিগত নজরদারি নিশ্চিত করতে ছোট ব্যাচে পাঠদান"
    },
    {
      icon: "📝",
      title: "সাপ্তাহিক পরীক্ষা",
      description: "নিয়মিত পরীক্ষা ও ফলাফল বিশ্লেষণ করে শিক্ষার্থীদের উন্নতি পর্যবেক্ষণ"
    },
    {
      icon: "🎯",
      title: "এক্সাম টার্গেট ভিত্তিক",
      description: "বোর্ড পরীক্ষায় ভালো ফলাফলের জন্য বিশেষ গাইডলাইন ও প্রস্তুতি"
    },
    {
      icon: "💪",
      title: "দুর্বল শিক্ষার্থীদের বিশেষ যত্ন",
      description: "প্রতিটি শিক্ষার্থীর দুর্বলতা আলাদাভাবে চিহ্নিত করে সমাধান দেওয়া হয়"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            কেন Quantum Dots Coaching?
          </h2>
          <p className="text-xl text-gray-600">
            আমরা শুধু পড়াই না, ভবিষ্যৎ গড়ি
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              আপনার সন্তানের ভবিষ্যৎ উজ্জ্বল করুন
            </h3>
            <p className="text-lg mb-6">
              আজই যোগ দিন Quantum Dots পরিবারে
            </p>
            <a 
              href="#admission"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              ভর্তি সংক্রান্ত তথ্য দেখুন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
