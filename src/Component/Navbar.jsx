// Navbar.jsx
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <div id="home" className="navbar bg-[#FEFCF3] shadow-xl p-3">
      <div className="flex justify-between items-center w-full md:justify-around text-xl font-semibold">
        <div className="text-black">Adv. Jahangir Kabir Nanak</div>

        <button className="md:hidden text-2xl text-black" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <div
          className={`absolute top-16 left-0 w-full bg-white flex flex-col gap-3 p-4 
          md:static md:flex md:flex-row md:w-auto md:bg-transparent md:p-0 md:gap-4
          ${open ? "block" : "hidden"} md:flex`}
        >
          {["Home", "About", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => {
                setActive(item);
                setOpen(false);
              }}
              className={`relative group transition duration-300
                ${active === item ? "text-green-500" : "text-gray-800"}`}
            >
              {item}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-green-500 transition-all duration-300
                ${active === item ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
