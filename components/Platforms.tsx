import Image from "next/image";

const Platforms = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">

                {/* Headline */}
                <h2 className="font-sans font-extrabold text-[32px] md:text-[40px] text-[#1E293B] mb-6">
                    يخدم <span className="text-[#3076DA]">وين ما كنت</span>
                </h2>

                {/* Subheadline */}
                <p className="mx-auto max-w-2xl text-[18px] text-gray-600 mb-16 leading-relaxed">
                    سوا عندك بيسي (Caisse)، طابلات، ولا تليفون. كودشايد يمشي فيهم كامل،
                    والداتا تبقى ديما مسينكرونيزيا (Synchronized) ومأمنة.
                </p>




                {/* Platform Image */}
                <div className="relative w-full max-w-5xl mx-auto mt-8">
                    <Image
                        src="/assets/Platforms.png"
                        alt="Supported Platforms"
                        width={1000}
                        height={600}
                        className="w-full h-auto object-contain drop-shadow-xl"
                        priority
                    />
                </div>
            </div>


        </section>
    );
};

export default Platforms;