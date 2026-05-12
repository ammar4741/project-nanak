import { useState } from "react";
const GallerySection = () => {
  const [showMore, setShowMore] = useState(false);

  const galleryImages = [
    "/nanak6.webp",
    "/nanak3.webp",
    "/nanak1.webp",
    "/nanak4.webp",
    "/nanak2.webp",
    "/nanak11.webp",
    "/nanak22.webp",
    "/nanak33.webp",
    "/nanak44.webp",
    "/kabirnanak.webp",
  ];

  return (
    <div id="gallery" className="bg-[#F5F1EA]">

      {/* PARALLAX / QUOTE SECTION */}
      <section className="py-16 lg:py-24 px-4">

        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <p
            className="uppercase tracking-[3px]
            text-[#7c1d33]
            font-bold text-sm mb-5 text-center"
          >
            Parallax / Quote Section
          </p>

          {/* PARALLAX CARD */}
          <div
            className="relative overflow-hidden
            rounded-3xl
            min-h-[350px] md:min-h-[500px]
            flex items-center justify-center"
          >

            {/* BACKGROUND IMAGE */}
            <div
              className="absolute inset-0
              bg-fixed bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('/masspeople.webp')",
              }}
            ></div>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/65"></div>

            {/* CONTENT */}
            <div className="relative z-10 text-center px-5">

              {/* ICON */}
              <div className="text-[#d4af37] text-5xl mb-6">
                ❝
              </div>

              {/* QUOTE */}
              <h2
                className="text-3xl md:text-5xl
                font-bold text-white
                leading-tight max-w-4xl"
              >
                Committed to the People, <br />
                Dedicated to the Nation
              </h2>

              {/* AUTHOR */}
              <p
                className="mt-8
                text-[#d4af37]
                text-lg md:text-2xl
                italic"
              >
                — Jahangir Kabir Nanak
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="pb-16 lg:pb-24 px-4">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div
            className="flex flex-col md:flex-row
            items-center justify-between
            gap-5 mb-12"
          >

            <div className="text-center md:text-left w-full">

              <h2
                className="text-3xl md:text-5xl
                font-bold text-[#1a1a1a]
                mt-4"
              >
                Photo Gallery
              </h2>
            </div>

          </div>

          {/* MOBILE GRID */}
          <div className="grid grid-cols-1 gap-5 md:hidden">

            {(showMore
              ? galleryImages
              : galleryImages.slice(0, 5)
            ).map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-xl"
              >

                {/* IMAGE */}
                <img
                  src={image}
                  alt="Gallery"
                  className="w-full h-[300px] object-cover
                  transition-all duration-700
                  group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0
                  bg-black/10 group-hover:bg-black/30
                  transition-all duration-500"
                ></div>

              </div>
            ))}

            {/* SHOW MORE BUTTON */}
            {!showMore && (
              <div className="flex justify-center mt-5">

                <button
                  onClick={() => setShowMore(true)}
                  className="bg-[#c8a96b]
                  hover:bg-[#b89253]
                  text-white
                  px-7 py-3
                  rounded-xl
                  font-semibold
                  transition-all duration-300"
                >
                  Show More
                </button>

              </div>
            )}

          </div>

          {/* MEDIUM DEVICE */}
          <div
            className="hidden md:grid lg:hidden
            grid-cols-2 gap-5"
          >

            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-xl"
              >

                {/* IMAGE */}
                <img
                  src={image}
                  alt="Gallery"
                  className="w-full h-[280px] object-cover
                  transition-all duration-700
                  group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0
                  bg-black/10 group-hover:bg-black/30
                  transition-all duration-500"
                ></div>

              </div>
            ))}

          </div>

          {/* LARGE DEVICE */}
          <div
            className="hidden lg:grid
            grid-cols-3 gap-5"
          >

            {galleryImages.slice(0, 9).map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-xl"
              >

                {/* IMAGE */}
                <img
                  src={image}
                  alt="Gallery"
                  className="w-full h-[300px] object-cover
                  transition-all duration-700
                  group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0
                  bg-black/10 group-hover:bg-black/30
                  transition-all duration-500"
                ></div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default GallerySection;