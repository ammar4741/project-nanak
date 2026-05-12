import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <footer className="bg-[#05070f] px-4 py-10">
      <div
        id="contact"
        className="max-w-7xl mx-auto
        bg-gradient-to-br
        from-[#05070f]
        via-[#081120]
        to-[#05070f]
        rounded-[30px]
        border border-[#1b2233]
        px-6 md:px-10 lg:px-14
        py-12
        shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      >
        {/* MAIN GRID */}
        <div
          className="grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-12 lg:gap-10"
        >
          {/* LEFT INFO */}
          <div>
            {/* LOGO */}
            <div className="flex items-center gap-4">
              <img
                src="/kabirnanak.webp"
                alt="Advocate Jahangir Kabir Nanak Logo"
                width="64"
                height="64"
                loading="lazy"
                decoding="async"
                className="w-16 h-16 object-contain rounded-full"
              />

              <h2
                className="text-2xl font-bold
                text-[#d4af37]
                leading-tight"
              >
                Adv. Jahangir Kabir Nanak
              </h2>
            </div>

            {/* TEXT */}
            <p
              className="text-gray-300
              leading-8 mt-6"
            >
              Dedicated to the people of Bangladesh and working for a
              prosperous, developed and inclusive nation.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4 mt-8 sm:order-1">
              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/share/1H357c361r/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full
                border border-[#d4af37]/40
                text-[#d4af37]
                flex items-center justify-center
                hover:bg-[#d4af37]
                hover:text-black
                transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              {/* YOUTUBE */}
              <a
                href="https://www.youtube.com/channel/UCKSUFXMerEe8qUsjOqOHLXQ"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full
                border border-[#d4af37]/40
                text-[#d4af37]
                flex items-center justify-center
                hover:bg-[#d4af37]
                hover:text-black
                transition-all duration-300"
              >
                <FaYoutube />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/advjknanak/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full
                border border-[#d4af37]/40
                text-[#d4af37]
                flex items-center justify-center
                hover:bg-[#d4af37]
                hover:text-black
                transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              {/* X / TWITTER */}
              <a
                href="https://x.com/AdvJKNanak"
                aria-label="X Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full
                border border-[#d4af37]/40
                text-[#d4af37]
                flex items-center justify-center
                hover:bg-[#d4af37]
                hover:text-black
                transition-all duration-300"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:border-l lg:border-[#1b2233] lg:pl-10 sm:order-3">
            <h3
              className="text-2xl font-bold
              text-[#d4af37] mb-6"
            >
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">
              {["Home", "About", "Blog", "Gallery", "Contact"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="text-gray-300
                    hover:text-[#d4af37]
                    transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="lg:border-l lg:border-[#1b2233] lg:pl-10  sm:order-2">
            <h3
              className="text-2xl font-bold
              text-[#d4af37] mb-6"
            >
              Contact Us
            </h3>

            <div className="space-y-5">
              {/* PHONE 1 */}
              <a
                href="tel:+8801711527075"
                className="flex items-start gap-4
                text-gray-300
                hover:text-[#d4af37]
                transition-all duration-300"
              >
                <FaPhone className="mt-1 text-[#d4af37]" />

                <span>
                  +88 01711-527075
                  <br />
                  <span className="text-sm text-gray-500">(Bangladesh)</span>
                </span>
              </a>

              {/* PHONE 2 */}
              <a
                href="tel:+916296341082"
                className="flex items-start gap-4
                text-gray-300
                hover:text-[#d4af37]
                transition-all duration-300"
              >
                <FaPhone className="mt-1 text-[#d4af37]" />

                <span>
                  +91 6296341082
                  <br />
                  <span className="text-sm text-gray-500">(India)</span>
                </span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:jahangirkabirnanakofficial@gmail.com"
                className="flex items-start gap-4
                text-gray-300
                hover:text-[#d4af37]
                transition-all duration-300 break-all"
              >
                <FaEnvelope className="mt-1 text-[#d4af37]" />

                <span>jahangirkabirnanakofficial@gmail.com</span>
              </a>

              {/* LOCATION */}
              <div
                className="flex items-start gap-4
                text-gray-300"
              >
                <FaMapMarkerAlt className="mt-1 text-[#d4af37]" />

                <span>Kishoreganj, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="border-t border-[#1b2233]
          mt-12 pt-6 text-center"
        >
          <p className="text-gray-400 text-sm md:text-base">
            © {new Date().getFullYear()} Jahangir Kabir Nanak. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
