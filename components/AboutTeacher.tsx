export default function AboutTeacher() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Teacher Image/Placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-white text-center">
                  <div className="text-8xl mb-4">👨‍🏫</div>
                  <div className="text-2xl font-bold">Md. Ismail</div>
                  <div className="text-lg">প্রধান শিক্ষক</div>
                  <div className="text-sm mt-2">জাহাঙ্গীরনগর বিশ্ববিদ্যালয়</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Teacher Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              পরিচিতি: Md. Ismail
            </h2>
            
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-lg text-gray-800">
                <span className="font-semibold text-blue-600">🎓 জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ের শিক্ষার্থী</span><br />
                উচ্চ শিক্ষা ও ব্যবহারিক অভিজ্ঞতার সমন্বয়ে আধুনিক পাঠদান
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    বিজ্ঞান বিভাগে অভিজ্ঞ শিক্ষক
                  </h3>
                  <p className="text-gray-700">
                    বছরের পর বছর বিজ্ঞান বিভাগের শিক্ষার্থীদের পড়িয়ে সফলতার রেকর্ড
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    শিক্ষার্থীদের রেজাল্ট উন্নত করাই মূল লক্ষ্য
                  </h3>
                  <p className="text-gray-700">
                    প্রতিটি শিক্ষার্থীর সম্পূর্ণ সম্ভাবনা বের করে আনতে প্রতিশ্রুতিবদ্ধ
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    সহজ ভাষায় কঠিন বিষয় বোঝানোর দক্ষতা
                  </h3>
                  <p className="text-gray-700">
                    জটিল বিষয়গুলো এত সহজভাবে বোঝান যে সবাই বুঝতে পারে
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    প্রতিটি শিক্ষার্থীর দুর্বলতা আলাদা ভাবে চিহ্নিত
                  </h3>
                  <p className="text-gray-700">
                    শিক্ষার্থীদের দুর্বল জায়গা খুঁজে বের করে সেখানে বিশেষ মনোযোগ দেওয়া হয়
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-600">
              <p className="text-xl italic text-gray-800 mb-2">
                &ldquo;সবার শেখার সুযোগ নিশ্চিত করাই আমাদের প্রতিশ্রুতি।&rdquo;
              </p>
              <p className="text-gray-600 font-semibold">— Md. Ismail</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
