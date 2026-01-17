import React from "react";

const Noticias = () => {
  return (
    <>
      <div>
        <h2 className="text-  text-green-950">Noticias / Eventos destacados</h2>
        <h2>Ejemplo: “Navidad solidaria”, “Vigilia de Año Nuevo y mas¿?”.</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 justify-items-center ">
        <div className="p-4 text-center  ">
          <img  src="https://portalwp.s3.amazonaws.com/wp-content/uploads/2025/12/23103239/Retro-libras-1.jpg" width={"300px"} className="w-62 h-62 object-cover mx-auto rounded-lg"/>
          <h3 className="text-lg font-bold mt-2">El impacto del Grupo Libras en 2025</h3>
          <p className="text-sm text-gray-600">El impacto del Grupo Libras en 2025.La fe no tiene límites cuando existe la voluntad de servir. A lo largo de 2025, el Grupo Libras de l
          </p>
        </div>
        <div className="p-4 text-center ">
          <img src="img/moysesevento.jpg"  className="w-62 h-62 object-cover mx-auto rounded-lg" />
          <h3 className="text-lg font-bold mt-2">Una nueva historia con la partcicipacion del Pastor MOYSES </h3>
          <p className="text-sm text-gray-600">
            Es HOY! <br /> esta gran concentracion!
          </p>
        </div>
        <div className="bg-[#ffffff] shadow-md  rounded p-4 ">
          <h3 className="text-xl font-bold text-[#000000]">testimonio de vanesa </h3>
          <img src="img/vanesa.jpg" className="w-62 h-62 object-cover my-2 mx-auto rounded-lg" />
          <p className="text-sm text-[#333333]">
            "Estaba con depresion ,estaba mal en el ambito amoroso y queria morir,recibi una carta Help y vine a la iglesia , persevere y hoy soy feliz "
          </p>
        </div>
        <div className="bg-[#ffffff] shadow-md  rounded p-4 ">
          <h3 className="text-xl font-bold text-[#000000]">testimonio de laura </h3>
          <img src="https://www.churchofjesuschrist.org/imgs/1d18fb5a5ef272682e478c9de2da155474188c7a/full/1920%2C/0/default" className="w-62 h-62 object-cover my-2 mx-auto rounded-lg" />
          <p className="text-sm text-[#333333]">
            "Gracias a la oracion, mi familia encontro paz y unidad..."
          </p>
        </div>
        <div className="bg-[#ffffff] shadow-md  rounded p-4 ">
          <h3 className="text-xl font-bold text-[#000000]">testimonio de laura </h3>
          <img src="https://cristypalacios.com/wp-content/uploads/2022/11/Fotografia-de-Retrato-18-1024x1024.jpg" className="w-62 h-62 object-cover my-2 mx-auto rounded-lg" />
          <p className="text-sm text-[#333333]">
            "Despues de participar en las reuniones de fe, encontre paz interior y fuerza para superar los problemas familiares. Hoy mi vida tiene un nuevo rumbo ."
          </p>
        </div>
       <div className="bg-[#ffffff] shadow-md  rounded p-4 ">
          <h3 className="text-xl font-bold text-[#000000]">testimonio de Juan </h3>
          <img src="https://img.freepik.com/fotos-premium/caricatura-hombre-gafas-bigote_979262-4415.jpg" className="w-62 h-62 object-cover my-2 mx-auto rounded-lg" />
          <p className="text-sm text-[#333333]">
            "Llegue con dificultades economicas y emocionales, peo a traves de la fe y el apoyo de la iglesia, recupere esperanza y estabilidad. Hoy puedo mirar hacia adelante con confianza."
          </p>
        </div>
        
      </div>
    </>
  );
};

export default Noticias;
