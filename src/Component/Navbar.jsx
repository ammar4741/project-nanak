// Navbar.jsx
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleScroll = (item) => {
    setActive(item);
    setOpen(false);

    const section = document.getElementById(item.toLowerCase());

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    
    window.history.replaceState(null, "", " ");
  };

  return (
    <div id="home" className="navbar bg-[#FEFCF3] shadow-xl p-3 sticky top-0 z-50">
      <div className="flex justify-between items-center w-full md:justify-around text-xl font-semibold">

        {/* Logo */}
        <div className="text-black">
          Adv. Jahangir Kabir Nanak
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl text-black"
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
              onClick={() => handleScroll(item)}
              className={`relative group transition duration-300 text-left
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
    </div>
  );
};

export default Navbar;