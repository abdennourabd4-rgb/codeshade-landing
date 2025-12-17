import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

const DashboardStats = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1e293b] overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Headline */}
        <ScrollAnimation animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            حانوتك <span className="text-blue-400">في جيبك</span>
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={0.1}>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-16">
            تبع مدخولك، أرباحك، والسلعة اللي بقاتلك في الستوك.</p>
        </ScrollAnimation>

        {/* Dashboard Visualization */}
        <div className="relative mx-auto max-w-5xl">

          {/* Main Dashboard Image */}
          {/* Make sure to export this specific dark-mode dashboard from Figma as 'stats-dashboard.png' */}
          <ScrollAnimation animation="scale-up" delay={0.2} className="rounded-2xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm p-2">
            <img
              src="/assets/Dashboard2.png"
              alt="Analytics Dashboard"
              className="w-full h-auto rounded-xl opacity-90"
            />
          </ScrollAnimation>

          {/* FLOATING CARD 1: Revenue (Left) */}
          <ScrollAnimation animation="fade-in" delay={0.5} className="hidden md:block absolute -left-12 top-1/4">
            <div className="bg-white p-4 rounded-2xl shadow-xl border-l-4 border-green-500 animate-bounce-slow">
              <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Chiffre d'Affaire</div>
              <div className="text-2xl font-extrabold text-gray-900">24,000,00 DA</div>
              <div className="text-xs text-green-600 font-bold mt-1">↑ +12% هذا الشهر</div>
            </div>
          </ScrollAnimation>

          {/* FLOATING CARD 2: Profit (Right) */}
          <ScrollAnimation animation="fade-in" delay={0.7} className="hidden md:block absolute -right-8 top-1/3">
            <div className="bg-white p-4 rounded-2xl shadow-xl border-l-4 border-blue-500 animate-bounce-slow delay-700">
              <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Bénefice Net</div>
              <div className="text-2xl font-extrabold text-gray-900">120,000 DA</div>
              <div className="text-xs text-blue-600 font-bold mt-1">Cash Flow إيجابي</div>
            </div>
          </ScrollAnimation>

          {/* FLOATING CARD 3: Stock (Bottom Center) */}
          <ScrollAnimation animation="fade-in" delay={0.9} className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2">
            <div className="bg-white p-4 rounded-2xl shadow-xl border-l-4 border-orange-500">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                  📦
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase">Stock Alert</div>
                  <div className="font-bold text-gray-900">5 منتجات قربت تخلص</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

        </div>

      </div>
    </section>
  );
};

export default DashboardStats;
