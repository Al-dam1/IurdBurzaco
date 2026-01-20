import React from 'react'

const navbarRedes = [
  {
    id: 1,
    title: "instagram",
    link: "https://www.instagram.com/vidamuchomejor?igsh=MTk3bTlsMDZ4bW1ubw==",
    icono: "bi bi-instagram",
    color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
  },
  {
    id: 2,
    title: "facebook",
    link: "https://www.facebook.com/profile.php?id=61581802213362",
    icono: "bi bi-facebook",
    color: "text-blue-600 hover:text-blue-800"
  }
]

const Footer = () => {
  return (
    <>
      <div className="md:block bg-gray-600 p-6 text-center text-white font-extralight">
        <h3 className="flex justify-center items-center p-3">Medios de Comunicación</h3>
       <ul className="flex justify-center items-center gap-6">
  <li>
    <a href="https://www.unifetv.com/" className="flex items-center gap-2 hover:scale-105 transition"><img src="https://www.unifetv.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Funife-gray.f49635ce.png&w=256&q=100" className="h-12" alt="Logo UnifeTv"/></a>
  </li>
  <li>
    <a 
      href="https://redaleluya.com.ar/" 
      className="flex items-center gap-2 hover:scale-105 transition"
    >
      <img src="img/logoredAleluya.png" className="h-12" alt="Logo RedAleluya"/>
    </a>
  </li>
</ul>

        <h3 className="flex justify-center items-center">Seguinos en nuestras redes</h3>
        <ul className="flex justify-center items-center space-x-4">
          {navbarRedes.map((link) => (
            <li key={link.id} className="flex justify-center items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link.link}
                className="flex justify-center items-center transition duration-300 transform hover:scale-125"
              >
                <i className={`${link.icono} text-2xl ${link.color}`}></i>
              </a>
            </li>
          ))}
        </ul>
        <p className="flex justify-center items-center text-2xl">
          <small>derechos reservados &copy;</small>
        </p>
      </div>
    </>
  )
}

export default Footer
