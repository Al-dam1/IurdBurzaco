import React, { useState } from "react";

const navbarlinks = [
  { id: 1, title: "Inicio", link: "/" },
  { id: 2, title: "Nosotros", link: "#" },
  { id: 3, title: "Contacto", link: "#" },
  { id: 4, title: "Testimonios", link: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 bg-[#002649] w-full bg-opacity-90 backdrop-blur-md z-50">
  <div className="flex items-center sm:px-12 sm:py-6 px-4 py-3">
    
    {/* Botón hamburguesa (mobile izquierda) */}
    <button onClick={toggleMenu} className="md:hidden bg-[#c4483e] text-white hover:bg-[#ffffff] hover:text-[#c4483e] order-1 p-2 rounded">
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6L20 6" />
        <path d="M4 12L20 12" />
        <path d="M4 18L20 18" />
      </svg>
    </button>

    {/* Logo */}
    <div className="flex-1 flex justify-center md:justify-start order-2">
      <img src="img/logoblanco.png" alt="Logo" className="h-10" />
    </div>

    {/* Links desktop */}
    <div className="hidden md:flex order-3">
      <ul className="flex sm:space-x-8 space-x-4">
        {navbarlinks.map((link) => (
          <li key={link.id}>
            <a
              className="text-white sm:text-lg text-sm hover:text-iurdLightBlue transform hover:scale-110 inline-block duration-300"
              href={link.link}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Menú mobile */}
  {isOpen && (
    <div className="md:hidden bg-[#000000] p-4 hover:bg-[#1b5d82] transition duration-300">
      <div className="flex justify-end">
        <button onClick={toggleMenu} className="bg-iurdRed text-white text-2xl hover:bg-iurdLightBlue hover:text-iurdWhite px-2 rounded">
          ✕
        </button>
      </div>
      <ul className="space-y-4 mt-4">
        {navbarlinks.map((link) => (
          <li key={link.id}>
            <a
              className="text-white text-lg hover:text-iurdLightBlue duration-300"
              href={link.link}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )}
</nav>


  );
};

export default Navbar;
