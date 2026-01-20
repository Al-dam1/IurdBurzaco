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
       
       
        
      </div>
    </>
  );
};

export default Noticias;
