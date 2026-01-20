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
          <video
            src="img/Luau.mp4"
            width="300"
            className="w-82 h-82 object-cover mx-auto rounded-lg"
            controls
          />
          <h3 className="text-lg font-bold mt-2">Luau</h3>
          <p className="text-sm text-gray-600">
            El sábado 24 de enero se tendrá el evento Luau en la catedral de mi familia en Lomas de Zamora a las 16hs. Burzaco estará presente y te invita a este super evento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 justify-items-center">
          <div className="p-4 text-center">
            <img
              src="https://portalwp.s3.amazonaws.com/wp-content/uploads/2025/12/23103239/Retro-libras-1.jpg"
              width="300"
              className="w-62 h-62 object-cover mx-auto rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">El impacto del Grupo Libras en 2025</h3>
            <p className="text-sm text-gray-600">
              La fe no tiene límites cuando existe la voluntad de servir. A lo largo de 2025, el Grupo Libras dejó huella en la comunidad.
            </p>
          </div>

          <div className="p-4 text-center">
            <img
              src="img/moysesevento.jpg"
              className="w-62 h-62 object-cover mx-auto rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">
              Una nueva historia con la participación del Pastor MOYSES
            </h3>
            <p className="text-sm text-gray-600">¡Es HOY! Esta gran concentración.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noticias;
