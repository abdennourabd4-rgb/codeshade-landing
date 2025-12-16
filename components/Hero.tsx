import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[20px] pb-20 lg:pt-[20px] lg:pb-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* 1. MAIN HEADLINE 
            - Width: 881px
            - Font: 800 (ExtraBold)
            - Size: 62px
            - Line Height: 85px
            - Letter Spacing: -0.05em
            - Color: #1E293B
        */}
        <h1 className="mx-auto text-center font-extrabold text-5xl md:text-[62px] leading-[1.2] md:leading-[85px] tracking-[-0.05em] text-[#1E293B] mb-6 max-w-[881px]">
          واش خّو، عييت مّلّ <br />
          <span className="text-[#3076DA]">لّوجيسيال ثقيل</span> و كومبليكي؟
        </h1>

        {/* 2. SUBHEADLINE 
            - Width: 508px
            - Font: 400 (Regular)
            - Size: 18px
            - Line Height: 25px
            - Color: #000000
        */}
        <p className="mx-auto text-center text-[18px] leading-[25px] font-normal text-[#000000] mb-10 max-w-[508px]">
          خفيف، ساهل، و مخدوم لإحتياجات أصحاب محلات التجزئة. ساهل للخدامين و أصحاب المحلات
        </p>

        {/* 3. CTA BUTTON (Frame 127)
            - Width: 154px
            - Height: 38px
            - Bg: #3076DA
            - Radius: 10px
            - Text: 16px, SemiBold (600), White
        */}
        <div className="flex items-center justify-center mb-16 w-full">
          <Link
            href="#features"
            className="flex items-center justify-center w-[154px] h-[38px] bg-[#3076DA] rounded-[10px] text-[16px] font-semibold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30"
          >
            شوف ديمو
          </Link>
        </div>


        <div className="relative mx-auto w-full max-w-[880px]">


          <div className="relative rounded-2xl p-2 lg:p-0">
            <img
              src="/assets/heroimage.png"
              alt="Codeshade Dashboard Interface"
              className="rounded-xl w-full h-auto"
            />
          </div>


        </div>

      </div>
    </section>
  );
};

export default Hero;