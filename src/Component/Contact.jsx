import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="bg-[#DBA39A]">
      <div
        id="contact"
        className="container mx-auto rounded-2xl text-black px-4 md:px-6 lg:px-28"
      >
        <div className="grid grid-cols-1 md:flex justify-around items-center">
          
          {/* Contact Info */}
          <div className="text-lg font-semibold pt-3">
            <h2 className="text-2xl font-semibold underline underline-offset-4">
              Contact us
            </h2>

            <a
              href="tel:+8801711527075"
              aria-label="Call Bangladesh number"
              className="flex items-center gap-2 my-2 hover:text-green-200 transition duration-300"
            >
              <FaPhone className="text-blue-500" />
              +88 01711-527075 (Bangladesh)
            </a>

            <a
              href="tel:+916296341082"
              aria-label="Call India number"
              className="flex items-center gap-2 hover:text-green-200 transition duration-300"
            >
              <FaPhone className="text-blue-500" />
              +91 6296341082 (India)
            </a>

            <a
              href="mailto:jknanak.bd.al@gmail.com"
              aria-label="Send email"
              className="flex items-center gap-2 my-1 hover:text-green-200 transition duration-300"
            >
              <FaEnvelope className="text-red-400" />
              jknanak.bd.al@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="text-2xl font-semibold mt-4 py-2">
            <a
              href="https://www.facebook.com/share/1H357c361r/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Facebook profile"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition duration-300"
            >
              <FaFacebook />
              Facebook
            </a>

            <a
              href="https://www.youtube.com/channel/UCKSUFXMerEe8qUsjOqOHLXQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit YouTube channel"
              className="flex items-center py-2 gap-2 text-red-600 hover:text-red-700 transition duration-300"
            >
              <FaYoutube />
              YouTube
            </a>

            <a
              href="https://www.linkedin.com/in/advjknanak/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="flex items-center gap-2 text-blue-700 hover:text-blue-800 transition duration-300"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>

          {/* Quick Links */}
          <nav className="text-xl font-semibold mt-6">
            <h2 className="text-2xl text-black underline underline-offset-8">
              Quick Link
            </h2>

            <div className="flex flex-col mt-2 gap-2 md:gap-1">
              {["Home", "About", "Blog", "Contact"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  aria-label={`Go to ${item}`}
                  className="text-black hover:text-green-200 transition duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      <hr className="border border-black mt-3" />

      {/* Copyright */}
      <div className="text-center py-4">
        <p className="text-sm font-semibold text-black">
          © {new Date().getFullYear()} Jahangir Kabir Nanak.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;