import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-[#DBA39A]">
      <div
      id="contact"
      className="container mx-auto rounded-2xl text-black px-4 md:px-6 lg:px-28"
    >
      <div className="grid grid-cols-1 md:flex justify-around items-center">
        <div className=" text-lg font-semibold pt-3">
          <span className="text-2xl font-semibold underline underline-offset-4">Contact us</span> <br />
          <a
            href="tel:+8801711527075"
            className="flex items-center gap-2 my-2 hover:text-green-200"
          >
            <FaPhone className="text-blue-500" /> +88 01711-527075 (Bangladesh)
          </a>
          <a
            href="tel:+916296341082"
            className="flex items-center gap-2 hover:text-green-200"
          >
            <FaPhone className="text-blue-500" /> +91 6296341082 (India)
          </a>
          <a
            href="mailto:jknanak.bd.al@gmail.com"
            className="flex items-center gap-2 my-1 hover:text-green-200"
          >
            <FaEnvelope className="text-red-400" /> jknanak.bd.al@gmail.com
          </a>
        </div>
        <div className="text-2xl font-semibold mt-4 py-2">
          <a
            href="https://www.facebook.com/share/1H357c361r/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition duration-300"
          >
            <FaFacebook /> Facebook
          </a>
          {/* youtube  */}
          <a
            href="https://www.youtube.com/channel/UCKSUFXMerEe8qUsjOqOHLXQ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-2 gap-2 text-red-600 hover:text-red-700 transition duration-300"
          >
            <FaYoutube /> YouTube
          </a>
          {/* linkedin  */}

          <a
            href="https://www.linkedin.com/in/advjknanak/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:text-blue-800 transition duration-300"
          >
            <FaLinkedin /> LinkedIn
          </a>
          {/* x account  */}
          {/* <a
            href="https://x.com/KabirNanok98153"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-2 gap-2 text-black hover:text-gray-700 transition duration-300"
          >
            <FaXTwitter /> (Twitter)
          </a> */}
        </div>
        <div className="text-xl font-semibold mt-6">
          <span className="text-2xl text-black underline underline-offset-8">Quick Link</span>
         <div className="flex flex-col mt-2 gap-2 md:gap-1">
  {["Home", "About", "Blog", "Contact"].map((item) => (
    <a
      key={item}
      href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
      className="text-black hover:text-green-200 transition duration-300"
    >
      {item}
    </a>
  ))}
</div>
        </div>
      </div>
    </div>
    <hr className="border-1 border-black mt-3" />
    <footer className="text-center py-4">
  <p className="text-sm font-semibold text-black">
    © {new Date().getFullYear()} Jahangir Kabir Nanak. All Rights Reserved.
  </p>
</footer>
    </div>
  );
};

export default Contact;
