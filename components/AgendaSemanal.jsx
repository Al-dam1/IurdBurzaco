import React from "react";

const AgendaSemanal = () => {
  const agenda = [
    { dia: "Domingo", actividad: "Encuentro con Dios", imagen:"/img/semana_lunes.jpg" },
    { dia: "Lunes", actividad: "Prosperidad con Dios", imagen:"/img/semana_lunes1.jpg" },
    { dia: "Martes", actividad: "Sanidad", imagen:"/img/semana_martes2.jpg" },
    { dia: "Miércoles", actividad: "Estudio bíblico", imagen:"/img/semana_miercoles3.jpg" },
    { dia: "Jueves", actividad: "Terapia del Amor", imagen:"/img/semana_jueves.jpg" },
    { dia: "Viernes", actividad: "Liberación",imagen:"/img/semana_viernes.jpg" },
    {
      dia: "Sábado",
      actividad: "Casos Imposibles / Vicios",
      imagen:"/img/semana_sabado.jpg",
    },
  ];

  return (
   <div className="relative w-full px-4 py-6">
  <h2 className="flex font-extrabold gap-3 text-black">
    Agenda <b className="text-[#002649]">Semanal</b>
  </h2>

  <div className="relative flex justify-center items-center">
    {/* Botón izquierda */}
    <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-700 text-white p-2 rounded">
      &#10094;
    </button>

    {/* Lista scrollable */}
    <ul className="flex overflow-x-auto snap-x snap-mandatory space-x-4 p-4 scroll-smooth">
      {agenda.map((item, index) => (
        <li
          key={index}
          className="snap-center flex-shrink-0 w-full md:w-1/3 bg-white shadow-md rounded-lg p-4"
        >
          <img
            className="w-11/12 h-auto object-cover rounded-full mb-3"
            src={item.imagen}
            alt={item.title}
          />
          <strong className="block text-center text-iurdBlue mb-2">
            {item.dia}
          </strong>
          <p className="text-center text-sm text-iurdTextDark">
            {item.actividad}
          </p>
        </li>
      ))}
    </ul>

    {/* Botón derecha */}
    <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-700 text-white p-2 rounded">
      &#10095;
    </button>
  </div>
</div>

  );
};

export default AgendaSemanal;
