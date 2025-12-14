import Link from 'next/link';

const tiers = [
  {
    name: 'بداية',
    price: '9,000',
    currency: 'DA',
    period: '/ شهر',
    description: 'مثالية للمحلات الصغيرة واللي راهم يبداو.',
    features: [
      'نقطة بيع واحدة (1 POS)',
      'إدارة المخزون (Stock)',
      'تقارير يومية أساسية',
      'دعم فني عبر الهاتف'
    ],
    cta: 'إبدا الآن',
    mostPopular: false,
  },
  {
    name: 'إحترافي',
    price: '12,000',
    currency: 'DA',
    period: '/ شهر',
    description: 'للناس اللي تحب تخدم نظيف وتكبر التجارة.',
    features: [
      'نقاط بيع غير محدودة',
      'إدارة الموردين والديون',
      'تقارير مفصلة (أرباح/خسائر)',
      'تعدد المستخدمين (Caissiers)',
      'دعم فني VIP 24/7'
    ],
    cta: 'خير هذي الباقة',
    mostPopular: true,
  },
  {
    name: 'شركات',
    price: 'Custom',
    currency: '',
    period: '',
    description: 'عندك سلسلة محلات ولا وزين؟ هذي ليك.',
    features: [
      'ربط بين عدة فروع (Multi-branch)',
      'API للربط مع موقع ويب',
      'تخصيص الفواتير (Logo)',
      'مدير حساب خاص بك'
    ],
    cta: 'تواصل معنا',
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            أسعار <span className="text-primary">مدروسة للجميع</span>
          </h2>
          <p className="text-lg text-gray-600">
            خلص مرة في العام ولا شهر، وتهنى من تكسار الراس.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${tier.mostPopular
                ? 'bg-white border-2 border-primary ring-4 ring-blue-50'
                : 'bg-white border border-gray-200'
                }`}
            >
              {tier.mostPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-bold text-white shadow-md">
                  الأكثر طلباً
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold ${tier.mostPopular ? 'text-primary' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight font-sans">
                    {tier.price}
                  </span>
                  <span className="mr-2 text-xl font-bold text-gray-500 font-sans">
                    {tier.currency}
                  </span>
                  <span className="text-gray-500">{tier.period}</span>
                </div>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <ul className="mb-8 space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={`block w-full rounded-xl px-6 py-4 text-center text-sm font-bold transition-all ${tier.mostPopular
                  ? 'bg-primary text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30'
                  : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;