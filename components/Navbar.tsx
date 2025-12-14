import Link from 'next/link';

const Navbar = () => {
  return (
    // 1. Frame 1 Specs: Height 78px, Border #EEEEEE, Background White
    <nav className="sticky top-0 z-50 w-full h-[78px] bg-[#FFFFFF] border-b border-[#EEEEEE] backdrop-blur-none">

      {/* Container: 1280px Width */}
      <div className="mx-auto max-w-[1280px] h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* LOGO Section 
            - In Figma: Width 163px, Height 30.9px
        */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/assets/logo.svg"
            alt="Codeshade Logo"
            className="h-[31px] w-auto object-contain" // Matches height ~30.9px
          />
          {/* If the text "Codeshade" is NOT inside the SVG, keep this span. 
               If the SVG includes the text, remove this span. 
               Based on "Vector" CSS provided, it seems the logo is all vectors. 
               I'll keep the text hidden or styled if needed, but assuming SVG has it all based on width 163px.
               For now, I'll keep the text visible just in case, styled to match.
           */}
        </Link>

        {/* LINKS Section (Features, Pricing)
            - Font: Manrope
            - Weight: 500 (font-medium)
            - Size: 16px (text-[16px])
            - Color: #000000 (text-black)
            - Line-height: 22px
        */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="font-sans font-medium text-[16px] leading-[22px] text-[#000000] hover:text-[#3076DA] transition-colors">
            المميزات
          </Link>
          <Link href="#pricing" className="font-sans font-medium text-[16px] leading-[22px] text-[#000000] hover:text-[#3076DA] transition-colors">
            الأسعار
          </Link>
        </div>

        {/* CTA BUTTON (Frame 127)
            - Width: 106px
            - Height: 38px
            - Background: #3076DA
            - Radius: 10px
            - Text: Login (دخول) -> Weight 600, Size 16px, White
        */}
        <div>
          <Link
            href="/login"
            className="flex items-center justify-center w-[106px] h-[38px] bg-[#3076DA] rounded-[10px] text-[16px] font-semibold text-white leading-[22px] hover:bg-blue-700 transition-all"
          >
            دخول
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;