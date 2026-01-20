import React from 'react'

const navbarRedes =[
  {
    id:1,
    title:"intagram",
    link:"https://www.instagram.com/vidamuchomejor?igsh=MTk3bTlsMDZ4bW1ubw==",
<<<<<<< HEAD
    icono:"bi bi-instagram",
    color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
=======
    icono:"bi bi-instagram"
>>>>>>> f7b55867cb62996fbf22a8c4240058b5b088807a
  },
  {
    id:2,
    title:"facebook",
    link:"https://www.facebook.com/profile.php?id=61581802213362",
<<<<<<< HEAD
    icono:"bi bi-facebook",
    color: "text-blue-600 hover:text-blue-800"
=======
    icono:"bi bi-facebook"
>>>>>>> f7b55867cb62996fbf22a8c4240058b5b088807a
  }
]


const Footer = () => {
  return (
    <>
    
    <div className=" md:block bg-gray-600 p-6 text-center text-white font-extralight ">
       
       <h3 className='flex justify-center items-center p-3'>Medios de Comunicacion</h3>
    <ul className="flex justify-center items-center gap-6">
        <li> <a href='https://www.unifetv.com/'>unifetv</a>
        </li>
        <li>
        <a href='https://redaleluya.com.ar/'>RedAaleluya</a></li>
      </ul>
       <h3 className='flex justify-center items-center'>Seguinos en nuestras redes</h3>
<<<<<<< HEAD
       <ul className="flex justify-center items-center space-x-4">
    {navbarRedes.map((link) => (
   <li key={link.id} className="flex justify-center items-center"> <a target="_blank" rel="noopener noreferrer" href={link.link} className="flex justify-center items-center transition duration-300 transform hover:scale-125" > <i className={`${link.icono} text-2xl ${link.color}`} ></i> </a> </li>
=======
       <ul className="flex space-x-4">
    {navbarRedes.map((link) => (
   <li key={link.id} className="flex justify-center items-center"> <a target="_blank" rel="noopener noreferrer" href={link.link} className="flex justify-center items-center transition duration-300 transform hover:scale-125" > <i className={`${link.icono} text-2xl text-white hover:text-sky-200 transition-all`} ></i> </a> </li>
>>>>>>> f7b55867cb62996fbf22a8c4240058b5b088807a
    ))}
  </ul> 
  <p className='flex justify-center items-center text-2xl'><small>derechos reservados &copy;</small></p>
    </div>
    
    </>
  )
}

export default Footer
