import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleScroll = (item) => {
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

    window.history.replaceState(null, "", " ");
  };

  return (
    <nav
      id="home"
      className="navbar bg-[#FEFCF3]/90 backdrop-blur-md shadow-xl p-3 sticky top-0 z-50"
    >
      <div className="flex justify-between items-center w-full md:justify-around text-xl font-semibold">
        
        {/* Logo */}
        <div className="text-black">
          Adv. Jahangir Kabir Nanak
        </div>

        {/* Hamburger Button */}
        <button
          aria-label="Open navigation menu"
          className="md:hidden text-2xl text-black min-w-[44px] min-h-[44px]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Menu */}
        <div
          className={`absolute top-16 right-2 w-40 bg-orange-50 rounded-xl shadow-lg
          flex flex-col gap-3 p-4
          md:static md:flex md:flex-row md:w-auto md:bg-transparent
          md:p-0 md:gap-4 md:shadow-none
          ${open ? "block" : "hidden"} md:flex`}
        >
          {["Home", "About", "Blog", "Contact"].map((item) => (
            <button
              key={item}
              aria-label={`Go to ${item} section`}
              onClick={() => handleScroll(item)}
              className={`relative group transition duration-300 text-left min-h-[44px]
              ${active === item ? "text-green-500" : "text-gray-800"}`}
            >
              {item}

              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-green-500 transition-all duration-300
                ${active === item ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;