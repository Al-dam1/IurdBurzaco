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
    <nav className="fixed top-0 left-0 bg-purple-900 w-full bg-opacity-90 backdrop-blur-md z-50">
  <div className="flex items-center sm:px-12 sm:py-6 px-4 py-3">
    
    {/* Botón hamburguesa (mobile izquierda) */}
    <button onClick={toggleMenu} className="md:hidden text-white order-1">
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

    {/* Logo (centrado en mobile, a la izquierda en desktop) */}
    <div className="flex-1 flex justify-center md:justify-start order-2">
      <img src="img/logoblanco.png" alt="Logo" className="h-10" />
    </div>

    {/* Links desktop (derecha) */}
    <div className="hidden md:flex order-3">
      <ul className="flex sm:space-x-8 space-x-4">
        {navbarlinks.map((link) => (
          <li key={link.id}>
            <a
              className="text-white sm:text-lg text-sm hover:text-sky-400 transform hover:scale-110 inline-block duration-300"
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
   <div className="flex justify-end p-4 hover:bg-black hover:scale-105 transition duration-300">
      <button onClick={toggleMenu} className="absolute mt-4 text-white text-2xl">
        ✕
      </button></div>

  {isOpen && (
    <div className="md:hidden bg-purple-800 p-4 hover:bg-purple-700 hover:scale-105 transition duration-300">
      <ul className="space-y-4">
        {navbarlinks.map((link) => (
          <li key={link.id}>
            <a
              className="text-white text-lg hover:text-sky-400 duration-300"
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
