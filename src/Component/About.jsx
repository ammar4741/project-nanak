import { useEffect, useState } from "react";

const About = () => {
  const images = [
    "/nanak6.webp",
    "/nanak5.webp",
    "/nanak3.webp",
    "/nanak1.webp",
  ];

  const [current, setCurrent] = useState(0);

  // Auto Premium Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="about" className="bg-[#F5EBE0]">
      <div className="container mx-auto pt-2 md:space-y-4">
        {/* Premium Carousel */}
        <div className="p-1">
          <div className="relative w-full overflow-hidden rounded-2xl">
            {/* IMPORTANT HEIGHT */}
            <div className="relative h-[250px] md:h-[500px] w-full">
              
              {/* SINGLE IMAGE RENDER FOR BETTER LCP */}
              <div className="absolute inset-0 transition-all duration-[2000ms] ease-in-out opacity-100 scale-100 z-10">
                <img
                  src={images[current]}
                  alt="Jahangir Kabir Nanak"
                  loading="eager"
                  className="w-full h-full"
                />

                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
              </div>
            </div>

            {/* Premium Animated Pill Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setCurrent(index)}
                  className={`transition-all duration-500 rounded-full ${
                    current === index
                      ? "w-8 h-2 bg-white"
                      : "w-2 h-2 bg-white/50 hover:bg-white/80"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
        {/* Carousel End */}

        <div className="container mx-auto text-black pb-4">
          <div className="p-2 md:flex lg:flex justify-around items-center gap-6">
            {/* Left Text */}
            <div className="text-xl">
              <h1 className="font-bold py-2 text-2xl lg:text-4xl">
                Bir Muktijuddha Advocate Jahangir Kabir Nanak
              </h1>

              <h2 className="font-semibold">Former Minister</h2>

              <h2 className="font-semibold md:py-2">
                Ministry of Textiles & Jute
              </h2>

              <h2 className="font-semibold mb-6">
                Government of The People's Republic of Bangladesh
              </h2>

              {/* Button */}
              <a
                href="https://en.wikipedia.org/wiki/Jahangir_Kabir_Nanak"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 duration-300 shadow-lg shadow-gray-500 px-5 py-3 rounded-xl font-semibold text-white"
              >
                Read More...
              </a>
            </div>

            {/* Right Image */}
            <img
              className="h-[600px] w-full rounded-xl object-contain lg:h-[700px] lg:w-[650px]"
              src="/kabirnanak.webp"
              alt="jahangir kabir nanak"
              loading="lazy"
            />
          </div>

          {/* Description */}
          <p className="container mx-auto text-lg px-2 leading-9">
            <span className="font-bold">Jahangir Kabir Nanak</span> (born 14
            January 1954) is a Bangladesh Awami League politician. He was a
            Minister of Textiles and Jute and a former Member of Parliament
            representing the Dhaka-13 constituency. Nanak is also a Presidium
            Member of the Awami League Central Committee. Previously, he served
            as the State Minister for Local Government, Rural Development and
            Co-operatives.
            <span className="hidden lg:block mt-5">
              <span className="text-2xl font-bold">Early life:</span>
              <br />
              Nanak was born on 14 January 1954 in Kshirad Mukherjee Lane of
              North Alekanda in Barisal, East Bengal, Dominion of Pakistan. His
              father, Maulvi Bazlur Rahman Serniabat, was an employee at the
              Barisal Collectorate Office. They belong to the Bengali Muslim
              Serniabat family, who are direct descendants of Emperor Sher Shah
              Suri. He has a bachelor's degree in art and law.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;