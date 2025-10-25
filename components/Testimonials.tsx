export default function Testimonials() {
  const testimonials = [
    {
      name: "সাকিব হাসান",
      class: "Class 9 - Science",
      image: "👦",
      rating: 5,
      text: "ইসমাইল স্যারের পড়ানোতে আমার ফিজিক্স ও ম্যাথে অনেক উন্নতি হয়েছে। এখন আমি সব কনসেপ্ট ভালোভাবে বুঝতে পারি।"
    },
    {
      name: "তাসনিম আক্তার",
      class: "Class 8",
      image: "👧",
      rating: 5,
      text: "স্যার খুব সহজভাবে সব কিছু বুঝিয়ে দেন। ক্লাসে আমার সব প্রশ্নের উত্তর পাই। রেজাল্ট অনেক ভালো হয়েছে।"
    },
    {
      name: "রহিম আহমেদ সাহেব",
      class: "অভিভাবক",
      image: "👨",
      rating: 5,
      text: "আমার ছেলের রেজাল্ট দেখে খুবই সন্তুষ্ট। ব্যক্তিগত যত্ন এবং নিয়মিত রিপোর্ট পাওয়া যায়। অসাধারণ কোচিং।"
    },
    {
      name: "নাফিসা রহমান",
      class: "Class 7",
      image: "👧",
      rating: 5,
      text: "আমি গণিতে খুব দুর্বল ছিলাম। স্যার আলাদা করে সময় দিয়েছেন এবং এখন আমি ভালো করতে পারছি।"
    },
    {
      name: "সালমা বেগম",
      class: "অভিভাবক",
      image: "👩",
      rating: 5,
      text: "মেয়ের পড়াশোনায় অনেক উন্নতি হয়েছে। স্যার খুব ভালো মানুষ এবং ধৈর্য সহকারে পড়ান। সবাইকে রেকমেন্ড করি।"
    },
    {
      name: "রাফি করিম",
      class: "Class 9 - Science",
      image: "👦",
      rating: 5,
      text: "কেমিস্ট্রি এবং বায়োলজি বুঝতে আমার অনেক সমস্যা ছিল। এখন সব ক্লিয়ার। SSC তে ভালো রেজাল্ট করব ইনশাআল্লাহ।"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            শিক্ষার্থী ও অভিভাবকদের মতামত
          </h2>
          <p className="text-xl text-gray-600">
            তাদের অভিজ্ঞতা শুনুন যারা ইতিমধ্যে আমাদের সাথে যুক্ত
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center border-t pt-4">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.class}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold mb-2">
              আপনিও হতে পারেন আমাদের সফল শিক্ষার্থীদের একজন
            </h3>
            <p className="text-lg mb-4">
              আজই যোগ দিন এবং শুরু করুন সফলতার যাত্রা
            </p>
            <a 
              href="#admission"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              ভর্তি হন এখনই
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
