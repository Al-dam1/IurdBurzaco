import React from 'react'

const navbarRedes =[
  {
    id:1,
    title:"intagram",
    link:"https://www.instagram.com/vidamuchomejor?igsh=MTk3bTlsMDZ4bW1ubw==",
    icono:"bi bi-instagram"
  },
  {
    id:2,
    title:"facebook",
    link:"https://www.facebook.com/profile.php?id=61581802213362",
    icono:"bi bi-facebook"
  }
]


const Footer = () => {
  return (
    <>
    
    <div className=" md:block bg-gray-600 p-6 text-center text-white font-extralight ">
       
       <h3 className='flex justify-center items-center p-3'>Medios de Comunicacion</h3>
      <ul className="flex justify-center gap-x-2 space-x-4" >
        <li> <a href='https://www.unifetv.com/'>unifetv</a>
        </li>
        <li>
        <a href='https://redaleluya.com.ar/'>RedAaleluya</a></li>
      </ul>
       <h3 className='flex justify-center items-center'>Seguinos en nuestras redes</h3>
       <ul className="flex space-x-4">
    {navbarRedes.map((link) => (
      <li  key={link.id}>
        <a 
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block transition duration-300 transform hover:scale-125'
         href={link.link}>
          <i className={link.icono} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all></i>
        </a>
      </li>
    ))}
  </ul> 
  <p className='flex justify-center items-center text-2xl'><small>derechos reservados &copy;</small></p>
    </div>
    
    </>
  )
}

export default Footer
