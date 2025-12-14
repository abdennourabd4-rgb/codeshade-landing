import Link from 'next/link';

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* FEATURE 1: Video Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32">
          {/* Video Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-orange-500/20 blur-2xl rounded-full opacity-50"></div>

            {/* VIDEO TAG */}
            <video
              className="relative rounded-2xl shadow-2xl border border-gray-100 w-full object-cover"
              autoPlay
              loop
              muted
              playsInline // Crucial for iOS to prevent fullscreen
            >
              <source src="/assets/Demo1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="mb-4 inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600">
              سريع
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              تا سكانّي <br />
              <span className="text-primary">والباقي عليه</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              ما تكسرش راسك مع الحسابات. الكود بار يمشي يجري، والسيستام يحسب وحدو.
              غير فوت القرعة، وهو يكمل الباقي.
            </p>

            {/* List of benefits */}
            <ul className="space-y-4">
              {['سكانير سريع جداً', 'يدعم جميع أنواع الباركود', 'تنبيهات فورية للمخزون'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FEATURE 2: Text Left, Video Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
          {/* Video Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full opacity-50"></div>

            {/* VIDEO TAG */}
            <video
              className="relative rounded-2xl shadow-2xl border border-gray-100 w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/Demo2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              منظم
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              كلش واحد <br />
              <span className="text-primary">في بلاصة واحدة</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              ليكوموند، السلعة، الكريدي، وليفاكتور... كلش ملموم في بلاصة وحدة.
              ما تزيدش تضيع الأوراق ولا تنسى شكون يسالك.
            </p>

            <Link href="/features" className="text-primary font-bold hover:text-blue-700 hover:underline">
              اكتشف المزيد &larr;
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;