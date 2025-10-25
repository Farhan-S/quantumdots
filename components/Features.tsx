export default function Features() {
  const features = [
    {
      icon: "📝",
      title: "সাপ্তাহিক Model Test",
      description: "প্রতি সপ্তাহে বোর্ড প্যাটার্নে পরীক্ষা নিয়ে শিক্ষার্থীদের প্রস্তুতি যাচাই করা হয়",
      benefits: [
        "বোর্ড পরীক্ষার প্রশ্ন প্যাটার্ন অনুশীলন",
        "সময় ব্যবস্থাপনা শেখা",
        "দুর্বল টপিক চিহ্নিত করা"
      ]
    },
    {
      icon: "📊",
      title: "মাসিক Progress রিপোর্ট",
      description: "অভিভাবকদের জন্য প্রতি মাসে বিস্তারিত রিপোর্ট প্রদান করা হয়",
      benefits: [
        "শিক্ষার্থীর উন্নতি ট্র্যাকিং",
        "উপস্থিতি ও পারফরম্যান্স রিপোর্ট",
        "পরবর্তী পদক্ষেপের পরামর্শ"
      ]
    },
    {
      icon: "🎯",
      title: "বিশেষ মেন্টরিং",
      description: "পড়াশোনায় পিছিয়ে পড়া শিক্ষার্থীদের জন্য আলাদা মনোযোগ ও সহায়তা",
      benefits: [
        "ব্যক্তিগত দুর্বলতা চিহ্নিত করা",
        "এক্সট্রা ক্লাস ও সাপোর্ট",
        "ধাপে ধাপে উন্নতির পরিকল্পনা"
      ]
    },
    {
      icon: "📚",
      title: "স্টাডি ম্যাটেরিয়াল",
      description: "মানসম্মত নোট, প্রশ্নব্যাংক এবং গাইড প্রদান করা হয়",
      benefits: [
        "হ্যান্ড নোট ও সামারি",
        "প্রশ্ন ব্যাংক ও সল্যুশন",
        "এক্সাম টিপস ও ট্রিকস"
      ]
    },
    {
      icon: "💬",
      title: "প্যারেন্ট-টিচার মিটিং",
      description: "নিয়মিত অভিভাবক সভার মাধ্যমে শিক্ষার্থীর উন্নতি নিয়ে আলোচনা",
      benefits: [
        "সরাসরি যোগাযোগ ও পরামর্শ",
        "সমস্যা সমাধানের উপায়",
        "সন্তানের লক্ষ্য নির্ধারণ"
      ]
    },
    {
      icon: "🏆",
      title: "পুরস্কার ও স্বীকৃতি",
      description: "ভালো পারফরম্যান্স ও উন্নতির জন্য শিক্ষার্থীদের উৎসাহিত করা হয়",
      benefits: [
        "মাসিক সেরা শিক্ষার্থী পুরস্কার",
        "উন্নতির জন্য বিশেষ স্বীকৃতি",
        "আত্মবিশ্বাস বৃদ্ধি"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            আমাদের বিশেষ সুবিধা
          </h2>
          <p className="text-xl text-gray-600">
            শিক্ষার্থীদের সফলতা নিশ্চিত করতে আমাদের অনন্য সেবা
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="text-gray-600 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-5xl font-bold mb-2">100%</div>
            <div className="text-lg">শিক্ষার্থী সন্তুষ্টি</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-5xl font-bold mb-2">24/7</div>
            <div className="text-lg">অনলাইন সাপোর্ট</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-5xl font-bold mb-2">5+</div>
            <div className="text-lg">বছরের অভিজ্ঞতা</div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto border-t-4 border-blue-600">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              শুধু পড়ানো নয়, সার্বিক উন্নয়ন
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              আমরা শুধু বই পড়াই না, শিক্ষার্থীদের আত্মবিশ্বাসী, দায়িত্বশীল এবং 
              সফল মানুষ হিসেবে গড়ে তুলতে প্রতিশ্রুতিবদ্ধ। প্রতিটি শিক্ষার্থী আমাদের 
              কাছে বিশেষ এবং তাদের ভবিষ্যৎ উজ্জ্বল করাই আমাদের লক্ষ্য।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
