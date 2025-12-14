import Image from "next/image";

const audiences = [
  {
    name: 'كوسميتيك',
    icon: '/assets/mirror.svg',
  },
  {
    name: 'سوبرات',
    icon: '/assets/shop-four-tiles.svg',
  },
  {
    name: 'بيسري',
    icon: '/assets/carticon.svg',
  },
];

const TargetAudience = () => {
  return (
    <section className="py-12 md:py-20 bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">


        <div className="text-center mb-16">
          <h2 className="font-sans font-semibold text-2xl md:text-[32px] leading-[44px] tracking-[-0.05em] text-[#1E293B]">
            خدَمناهْ لِيكمْ، <span className="text-[#3076DA]">و عليكُمْ سبيسيال ل</span> :
          </h2>
        </div>


        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">

          {audiences.map((item) => (
            <div
              key={item.name}
              className="relative w-[276px] h-[108px] bg-white border border-[#DDDDDD] rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300"
            >

              <div className="absolute top-[17px] right-[22px]">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-[28px] w-[28px] object-contain"
                />
              </div>

              <h3 className="absolute top-[58px] right-[24px] font-sans font-semibold text-[24px] leading-[33px] tracking-[-0.05em] text-[#1E293B]">
                {item.name}
              </h3>
            </div>
          ))}


          <div className="relative w-[276px] h-[108px] bg-white border border-[#DDDDDD] rounded-[20px] flex items-center justify-center">
            <span className="font-sans font-semibold text-[24px] leading-[33px] tracking-[-0.05em] text-[#A3A3A3]">
              حوانت أخرى قريبا....
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TargetAudience;