import { useEffect, useState } from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const About = () => {
  // ALL IMAGES
  const images = [
    "/nanak6.webp",
    "/nanak1.webp",
    "/nanak11.webp",
    "/nanak22.webp",
    "/nanak33.webp",
    "/nanak4.webp",
    "/nanak44.webp",
  ];

  const [current, setCurrent] = useState(0);

  // PREMIUM AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="about"
        className="relative w-full min-h-screen overflow-hidden pt-[90px]"
      >
        {/* BACKGROUND IMAGES */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2500ms] ease-linear
            ${
              current === index
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-100 z-0"
            }`}
          >
            {/* IMAGE */}
            <img
              src={image}
              alt="Jahangir Kabir Nanak"
              width="1600"
              height="900"
              fetchPriority={current === index ? "high" : "low"}
              loading={current === index ? "eager" : "lazy"}
              decoding="async"
              className="w-full h-full object-center object-cover"
            />

            {/* CINEMATIC OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/25"></div>

            {/* EXTRA DARK */}
            <div className="absolute inset-0 bg-black/25"></div>
          </div>
        ))}

        {/* HERO CONTENT */}
        <div className="relative z-20 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="mt-12 grid lg:grid-cols-2 items-center gap-18">
              {/* LEFT SIDE */}
              <div className="text-white">
                {/* SMALL TITLE */}
                <p
                  className="uppercase tracking-[6px]
                  text-[#d4af37]
                  text-xl md:text-base
                  font-semibold mb-5"
                >
                  Bir Muktijoddha
                </p>

                {/* MAIN TITLE */}
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                  font-bold leading-tight
                  drop-shadow-[0_5px_25px_rgba(0,0,0,0.9)]"
                >
                  Advocate <br />
                  Jahangir Kabir Nanak
                </h1>

                {/* SUBTITLE */}
                <div className="mt-6 space-y-3">
                  <p className="text-lg md:text-2xl text-gray-200 font-medium">
                    Former Minister, <br />
                    Ministry of Textiles & Jute
                  </p>

                  <p className="text-sm md:text-lg text-gray-300 leading-relaxed max-w-2xl">
                    Government of The People's Republic of Bangladesh
                  </p>
                </div>
              </div>

              {/* DESKTOP GLASS CARD */}
              <div className="hidden lg:flex justify-end">
                <div
                  className="w-[390px]
                  rounded-3xl
                  bg-white/10
                  backdrop-blur-2xl
                  border border-white/20
                  shadow-[0_10px_45px_rgba(0,0,0,0.45)]
                  p-7 space-y-6"
                >
                  {/* ITEM */}
                  <div className="flex items-start gap-4 border-b border-white/10 pb-5">
                    <div
                      className="w-14 h-14 rounded-2xl
                      bg-[#d4af37]/15
                      text-[#d4af37]
                      flex items-center justify-center
                      text-3xl"
                    >
                      <MdOutlineWorkspacePremium />
                    </div>

                    <div>
                      <h3 className="text-white text-xl font-semibold">
                        Former Minister
                      </h3>

                      <p className="text-gray-300 mt-1">
                        Ministry of Textiles & Jute
                      </p>
                    </div>
                  </div>

                  {/* ITEM */}
                  <div className="flex items-start gap-4 border-b border-white/10 pb-5">
                    <div
                      className="w-14 h-14 rounded-2xl
                      bg-[#d4af37]/15
                      text-[#d4af37]
                      flex items-center justify-center
                      text-3xl"
                    >
                      <MdOutlineWorkspacePremium />
                    </div>

                    <div>
                      <h3 className="text-white text-xl font-semibold">
                        Member of Parliament
                      </h3>

                      <p className="text-gray-300 mt-1">
                        Dhaka-13 Constituency
                      </p>
                    </div>
                  </div>

                  {/* ITEM */}
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl
                      bg-[#d4af37]/15
                      text-[#d4af37]
                      flex items-center justify-center
                      text-3xl"
                    >
                      <MdOutlineWorkspacePremium />
                    </div>

                    <div>
                      <h3 className="text-white text-xl font-semibold">
                        Presidium Member
                      </h3>

                      <p className="text-gray-300 mt-1">
                        Bangladesh Awami League
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDER INDICATORS */}
        <div
          className="absolute bottom-8 left-1/2
          -translate-x-1/2 z-30
          flex items-center gap-3"
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-500 rounded-full
              ${
                current === index
                  ? "w-10 h-3 bg-[#d4af37]"
                  : "w-3 h-3 bg-white/50 hover:bg-white"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <div className="bg-[#f5f1ea] py-16 lg:py-24">
        <div
          className="max-w-7xl mx-auto
          px-5 lg:px-10
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2
          gap-10 lg:gap-14
          items-center"
        >
          {/* INTRODUCTION */}
          <div className="order-1">
            <h2
              className="text-3xl md:text-4xl
              font-bold text-[#1a1a1a]
              leading-tight"
            >
              A Life Dedicated to <br />
              Service and Leadership
            </h2>

            <div className="mt-6 space-y-5">
              <p className="text-gray-700 text-xl leading-8">
                <span className="font-bold">Jahangir Kabir Nanak</span> (born 14
                January 1954) is a Bangladesh Awami League politician. He was a
                Minister of Textiles and Jute and a former Member of Parliament
                representing the Dhaka-13 constituency.
              </p>

              <p className="text-gray-700 text-xl leading-8">
                Nanak is also a Presidium Member of the Awami League Central
                Committee. Previously, he served as the State Minister for Local
                Government, Rural Development and Co-operatives.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-2 flex justify-center">
            <img
              src="/kabirnanak.webp"
              alt="Jahangir Kabir Nanak"
              width="420"
              height="520"
              loading="lazy"
              decoding="async"
              className="w-full max-w-[330px] md:max-w-[420px] rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
            />
          </div>

          {/* MOBILE CARD ONLY */}
          <div
            className="order-3 md:hidden
            bg-[#faf7f2]
            rounded-3xl
            border border-[#e8dfd1]
            shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            p-7 space-y-6"
          >
            {/* ITEM */}
            <div className="flex items-start gap-4 border-b border-[#e8dfd1] pb-5">
              <div
                className="w-14 h-14 rounded-2xl
                bg-[#c8a96b]/10
                text-[#c8a96b]
                flex items-center justify-center
                text-2xl"
              >
                <MdOutlineWorkspacePremium />
              </div>

              <div>
                <h3 className="text-[#1a1a1a] text-lg font-bold">
                  Former Minister
                </h3>

                <p className="text-gray-600 mt-1">
                  Ministry of Textiles & Jute
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4 border-b border-[#e8dfd1] pb-5">
              <div
                className="w-14 h-14 rounded-2xl
                bg-[#c8a96b]/10
                text-[#c8a96b]
                flex items-center justify-center
                text-2xl"
              >
                <MdOutlineWorkspacePremium />
              </div>

              <div>
                <h3 className="text-[#1a1a1a] text-lg font-bold">MP</h3>

                <p className="text-gray-600 mt-1">Dhaka-13 Constituency</p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl
                bg-[#c8a96b]/10
                text-[#c8a96b]
                flex items-center justify-center
                text-2xl"
              >
                <MdOutlineWorkspacePremium />
              </div>

              <div>
                <h3 className="text-[#1a1a1a] text-lg font-bold">
                  Presidium Member
                </h3>

                <p className="text-gray-600 mt-1">Awami League</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TIMELINE + ACHIEVEMENTS SECTION */}
      <div className="bg-[#f5f1ea]">
        {/* TIMELINE */}
        <section className="pb-8 lg:py-24 overflow-hidden">
          {/* TOP TITLE */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl underline underline-offset-8 md:text-5xl
        font-bold text-[#1a1a1a] 
        mt-5"
            >
              Journey of Leadership
            </h2>
          </div>

          {/* TIMELINE */}
          <div className="max-w-7xl mx-auto px-5">
            {/* DESKTOP */}
            <div className="hidden lg:block relative">
              {/* LINE */}
              <div
                className="absolute top-8 left-0
          w-full h-[3px]
          bg-[#d8c4a0]"
              ></div>

              <div className="grid grid-cols-5 gap-10 relative z-10">
                {/* ITEM */}
                <div className="text-center">
                  <div
                    className="w-16 h-16 mx-auto
              rounded-full
              bg-[#c8a96b]
              text-white
              flex items-center justify-center
              text-2xl
              shadow-lg"
                  >
                    ✦
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#1a1a1a]">
                    1954
                  </h3>

                  <p className="mt-3 text-gray-700 leading-7">
                    Born in Kishoreganj, Bangladesh
                  </p>
                </div>

                {/* ITEM */}
                <div className="text-center">
                  <div
                    className="w-16 h-16 mx-auto
              rounded-full
              bg-[#c8a96b]
              text-white
              flex items-center justify-center
              text-2xl
              shadow-lg"
                  >
                    ✦
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#1a1a1a]">
                    1996
                  </h3>

                  <p className="mt-3 text-gray-700 leading-7">
                    Elected as Member of Parliament (Dhaka-13)
                  </p>
                </div>

                {/* ITEM */}
                <div className="text-center">
                  <div
                    className="w-16 h-16 mx-auto
              rounded-full
              bg-[#c8a96b]
              text-white
              flex items-center justify-center
              text-2xl
              shadow-lg"
                  >
                    ✦
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#1a1a1a]">
                    2009
                  </h3>

                  <p className="mt-3 text-gray-700 leading-7">
                    Appointed as Minister of Textiles & Jute
                  </p>
                </div>

                {/* ITEM */}
                <div className="text-center">
                  <div
                    className="w-16 h-16 mx-auto
              rounded-full
              bg-[#c8a96b]
              text-white
              flex items-center justify-center
              text-2xl
              shadow-lg"
                  >
                    ✦
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#1a1a1a]">
                    2014
                  </h3>

                  <p className="mt-3 text-gray-700 leading-7">
                    State Minister for Local Government, RD & Co-ops
                  </p>
                </div>

                {/* ITEM */}
                <div className="text-center">
                  <div
                    className="w-16 h-16 mx-auto
              rounded-full
              bg-[#c8a96b]
              text-white
              flex items-center justify-center
              text-2xl
              shadow-lg"
                  >
                    ✦
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#1a1a1a]">
                    Present
                  </h3>

                  <p className="mt-3 text-gray-700 leading-7">
                    Presidium Member, Awami League
                  </p>
                </div>
              </div>
            </div>

            {/* MOBILE + TABLET */}
            <div className="lg:hidden relative">
              {/* LINE */}
              <div
                className="absolute left-7 top-0
          w-[3px] h-full
          bg-[#d8c4a0]"
              ></div>

              <div className="space-y-12">
                {/* ITEM */}
                <div className="flex gap-6 relative z-10">
                  <div
                    className="w-14 h-14 min-w-[56px]
              rounded-full
              bg-[#c8a96b]
              text-white
              flex items-center justify-center
              text-xl shadow-lg"
                  >
                    ✦
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">1954</h3>

                    <p className="mt-2 text-gray-700 leading-7">
                      Born in Kishoreganj, Bangladesh
                    </p>
                  </div>
                </div>

                {/* ITEM */}
                <div className="flex gap-6 relative z-10">
                  <div
                    className="w-14 h-14 min-w-[56px]
              rounded-full
              bg-[#c8a96b]
              text-white
              flex items-center justify-center
              text-xl shadow-lg"
                  >
                    ✦
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">1996</h3>

                    <p className="mt-2 text-gray-700 leading-7">
                      Elected as Member of Parliament (Dhaka-13)
                    </p>
                  </div>
                </div>

                {/* ITEM */}
                <div className="flex gap-6 relative z-10">
                  <div
                    className="w-14 h-14 min-w-[56px]
              rounded-full
              bg-[#c8a96b]
              text-white
              flex items-center justify-center
              text-xl shadow-lg"
                  >
                    ✦
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">2009</h3>

                    <p className="mt-2 text-gray-700 leading-7">
                      Appointed as Minister of Textiles & Jute
                    </p>
                  </div>
                </div>

                {/* ITEM */}
                <div className="flex gap-6 relative z-10">
                  <div
                    className="w-14 h-14 min-w-[56px]
              rounded-full
              bg-[#c8a96b]
              text-white
              flex items-center justify-center
              text-xl shadow-lg"
                  >
                    ✦
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">2014</h3>

                    <p className="mt-2 text-gray-700 leading-7">
                      State Minister for Local Government, RD & Co-ops
                    </p>
                  </div>
                </div>

                {/* ITEM */}
                <div className="flex gap-6 relative z-10">
                  <div
                    className="w-14 h-14 min-w-[56px]
              rounded-full
              bg-[#c8a96b]
              text-white
              flex items-center justify-center
              text-xl shadow-lg"
                  >
                    ✦
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">
                      Present
                    </h3>

                    <p className="mt-2 text-gray-700 leading-7">
                      Presidium Member, Awami League
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <p className="uppercase text-[#7c1d33] text-center font-bold text-xl pb-6 underline underline-offset-8">
          ACHIEVEMENTS & STATISTICS
        </p>

        <section
          className="bg-gradient-to-r
    from-[#05070f]
    via-[#0a1224]
    to-[#05070f]
    py-6 lg:py-20"
        >
          <div
            className="max-w-7xl mx-auto
      px-5 lg:px-10
      grid grid-cols-2 lg:grid-cols-4
      gap-10 text-center"
          >
            {/* ITEM */}
            <div>
              <div className="text-[#d4af37] text-5xl mb-5">🏅</div>

              <h3 className="text-4xl font-bold text-[#d4af37]">50+</h3>

              <p className="text-white mt-4 leading-7">
                Years of Public Service
              </p>
            </div>

            {/* ITEM */}
            <div>
              <div className="text-[#d4af37] text-5xl mb-5">🏛️</div>

              <h3 className="text-4xl font-bold text-[#d4af37]">10+</h3>

              <p className="text-white mt-4 leading-7">
                Ministries & Responsibilities
              </p>
            </div>

            {/* ITEM */}
            <div>
              <div className="text-[#d4af37] text-5xl mb-5">👥</div>

              <h3 className="text-4xl font-bold text-[#d4af37]">100+</h3>

              <p className="text-white mt-4 leading-7">Development Projects</p>
            </div>

            {/* ITEM */}
            <div>
              <div className="text-[#d4af37] text-5xl mb-5">🌍</div>

              <h3 className="text-4xl font-bold text-[#d4af37]">Millions</h3>

              <p className="text-white mt-4 leading-7">People Served</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
