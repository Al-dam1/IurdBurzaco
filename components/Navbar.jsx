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
    <nav className="fixed top-0 left-0 bg-[#000000] md:bg-[#002649] w-full bg-opacity-90 backdrop-blur-md z-50">
  <div className="flex items-center sm:px-12 sm:py-6 px-4 py-3">
    
    {/* Botón hamburguesa (mobile izquierda) */}
    <button onClick={toggleMenu} className="md:hidden  text-white  hover:bg-[#c4483e] active:text-red-500 order-1 p-2 rounded">
   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
 
  <rect x="2" y="8" width="36" height="3" fill="white" />
  
  <rect x="2" y="18" width="32" height="3" fill="white" />
  
  <rect x="2" y="28" width="24" height="3" fill="white" />
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
              className="text-white sm:text-lg text-sm hover:text-[##66B2FF] focus-text-#66B2FF transform hover:scale-110 inline-block duration-300"
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
        <button onClick={toggleMenu} className="bg-[#544d4d] text-white hover:text-[#C4483E] text-2xl hover:bg-[#0079F1] hover:text-[#ffffff] px-2 rounded">
          ✕
        </button>
      </div>
      <ul className="space-y-4 mt-4">
        {navbarlinks.map((link) => (
          <li key={link.id}>
            <a
              className="text-white text-lg hover:text-[#0079F1] duration-300"
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
