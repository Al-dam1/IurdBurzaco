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
    <div className="relative w-full p-x-10 p-y-10">
      <h2 className="flex font-extrabold gap-5  text-black">Agenda <b className="text-shadow-blue-950">Semanal</b></h2>
      <div className=" ">
        <button className="absolute justify-center items-center left-0 top-1.5 translate-y-1.5 bg-purple-700 text-white p-2">&#10094;</button>
        <ul className="flex overflow-x-auto scroll-snap-x scroll-snap-mandatory space-x-4 p-4">
          {agenda.map((item, index) => (
            <li key={index} className="">
             <img  className="rounded-full" src={item.imagen} alt={item.title} style={{ marginRight: "8px" }}/>
              <strong className="flex justify-center items-center text-center">{item.dia}:</strong> {item.actividad}
            </li>
          ))}
        </ul>
        
        <button className="absolute right-0 top-1.5 translate-y-1.5 bg-purple-700 text-white p-2 ">&#10095;</button>
      </div>
    </div>
  );
};

export default AgendaSemanal;
