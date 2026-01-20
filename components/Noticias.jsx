import React from "react";

const Noticias = () => {
  return (
    <>
      <div>
        <h2 className="text-green-950">Noticias / Eventos destacados</h2>
        <h2>Ejemplo: “Navidad solidaria”, “Vigilia de Año Nuevo y más”.</h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 justify-items-start">
        <div className="p-4 text-left">
          <video src="img/Luau.mp4" width="300" className="w-82 h-82 object-cover mx-auto rounded-lg" controls />
          <h3 className="text-lg font-bold mt-2">Luau</h3>
          <p className="text-sm text-gray-600">
            El sábado 24 de enero se tendrá el evento Luau en la catedral de mi familia en Lomas de Zamora a las 16hs. Burzaco estará presente y te invita a este super evento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 justify-items-center">
          <div className="p-4 text-center">
            <img src="https://portalwp.s3.amazonaws.com/wp-content/uploads/2025/12/23103239/Retro-libras-1.jpg" width="300" className="w-62 h-62 object-cover mx-auto rounded-lg" />
            <h3 className="text-lg font-bold mt-2">El impacto del Grupo Libras en 2025</h3>
            <p className="text-sm text-gray-600">
              La fe no tiene límites cuando existe la voluntad de servir. A lo largo de 2025, el Grupo Libras dejó huella en la comunidad.
            </p>
          </div>

          <div className="p-4 text-center">
            <img src="img/moysesevento.jpg" className="w-62 h-62 object-cover mx-auto rounded-lg" />
            <h3 className="text-lg font-bold mt-2">Una nueva historia con la participación del Pastor MOYSES</h3>
            <p className="text-sm text-gray-600">¡Es HOY! Esta gran concentración.</p>
          </div>

          <div className="bg-[#ffffff] shadow-md rounded p-4">
            <h3 className="text-xl font-bold text-[#000000]">Testimonio de Vanesa</h3>
            <img src="img/vanesa.jpg" className="w-62 h-62 object-cover my-2 mx-auto rounded-lg" />
            <p className="text-sm text-[#333333]">
              "Estaba con depresión, estaba mal en el ámbito amoroso y quería morir. Recibí una carta Help y vine a la iglesia, perseveré y hoy soy feliz."
            </p>
          </div>

          <div className="bg-[#ffffff] shadow-md rounded p-4">
            <h3 className="text-xl font-bold text-[#000000]">Testimonio de Laura</h3>
            <img src="https://www.churchofjesuschrist.org/imgs/1d18fb5a5ef272682e478c9de2da155474188c7a/full/1920%2C/0/default" className="w-62 h-62 object-cover my-2 mx-auto rounded-lg" />
            <p className="text-sm text-[#333333]">"Gracias a la oración, mi familia encontró paz y unidad..."</p>
          </div>

          <div className="bg-[#ffffff] shadow-md rounded p-4">
            <h3 className="text-xl font-bold text-[#000000]">Testimonio de Juan</h3>
            <img src="https://img.freepik.com/fotos-premium/caricatura-hombre-gafas-bigote_979262-4415.jpg" className="w-62 h-62 object-cover my-2 mx-auto rounded-lg" />
            <p className="text-sm text-[#333333]">
              "Llegué con dificultades económicas y emocionales, pero a través de la fe y el apoyo de la iglesia, recuperé esperanza y estabilidad. Hoy puedo mirar hacia adelante con confianza."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noticias;

