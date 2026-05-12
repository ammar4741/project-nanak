import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth Scroll
  const handleSection = (item) => {
    setActive(item);
    setOpen(false);

    if (item === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const section = document.getElementById(item.toLowerCase());

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const navItems = ["Home", "About", "Blog", "Gallery", "Contact"];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500
      ${
        scrolled
          ? "bg-[#f3ede5]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#d6d0c7]"
          : "bg-black/40 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <button
            type="button"
            aria-label="Go to Home section"
            onClick={() => handleSection("Home")}
            className="cursor-pointer"
          >
            <h1
              className={`font-bold tracking-[1px] leading-tight transition-colors duration-300
              text-[17px] sm:text-[20px] lg:text-[24px]
              ${
                scrolled
                  ? "text-[#111111]"
                  : "text-white drop-shadow-[0_3px_15px_rgba(0,0,0,0.95)]"
              }`}
            >
              <span className="text-[#BE9823]">
                Adv.
              </span>{" "}
              <span>
                Jahangir Kabir Nanak
              </span>
            </h1>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5 lg:gap-9">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                aria-label={`Navigate to ${item}`}
                onClick={() => handleSection(item)}
                className={`relative group text-[14px] lg:text-[16px]
                font-semibold tracking-wide transition-colors duration-300
                ${
                  active === item
                    ? "text-[#BE9823]"
                    : scrolled
                    ? "text-[#111111]"
                    : "text-white"
                }`}
              >
                {/* Text */}
                <span
                  className="text-xl transition-colors duration-300
                  group-hover:text-[#BE9823]"
                >
                  {item}
                </span>

                {/* Active Line */}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] rounded-full
                  bg-[#BE9823] transition-all duration-500
                  ${
                    active === item
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={`md:hidden text-3xl transition-colors duration-300
            ${
              scrolled
                ? "text-[#111111]"
                : "text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            }`}
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full right-0 w-1/2 overflow-hidden
        transition-all duration-500
        ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-[#f3ede5]/95 backdrop-blur-md shadow-2xl border-t border-[#d6d0c7]">
          <div className="flex flex-col gap-5 px-6 py-6">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                aria-label={`Navigate to ${item}`}
                onClick={() => handleSection(item)}
                className={`text-left text-[17px] font-medium transition-colors duration-300
                ${
                  active === item
                    ? "text-[#BE9823]"
                    : "text-[#111111] hover:text-[#BE9823]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;