import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SliderTestimonio = [
  {
    imgSrc: "img/vanesa.jpg",
    title: "Testimonio de Vanesa",
    description:
      "Estaba con depresión, estaba mal en el ámbito amoroso y quería morir, recibí una carta Help y vine a la iglesia, perseveré y hoy soy feliz.",
  },
  {
    imgSrc:
      "https://www.churchofjesuschrist.org/imgs/1d18fb5a5ef272682e478c9de2da155474188c7a/full/1920%2C/0/default",
    title: "Testimonio de Laura",
    description: "Gracias a la oración, mi familia encontró paz y unidad.",
  },
  {
    imgSrc:
      "https://cristypalacios.com/wp-content/uploads/2022/11/Fotografia-de-Retrato-18-1024x1024.jpg",
    title: "Testimonio de Franchesca",
    description:
      "Después de participar en las reuniones de fe, encontré paz interior y fuerza para superar los problemas familiares. Hoy mi vida tiene un nuevo rumbo.",
  },
  {
    imgSrc:
      "https://img.freepik.com/fotos-premium/caricatura-hombre-gafas-bigote_979262-4415.jpg",
    title: "Testimonio de Juan",
    description:
      "Llegué con dificultades económicas y emocionales, pero a través de la fe y el apoyo de la iglesia, recuperé esperanza y estabilidad. Hoy puedo mirar hacia adelante con confianza.",
  },
];

const Testimonio = () => {
  const swiperWrapperRef = useRef(null);

  function adjustMargin() {
    const screenWidth = window.innerWidth;
    if (swiperWrapperRef.current) {
      swiperWrapperRef.current.style.marginLeft =
        screenWidth <= 520
          ? "0px"
          : screenWidth <= 650
            ? "-50px"
            : screenWidth <= 800
              ? "-150px"
              : "0px";
    }
  }

  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => window.removeEventListener("resize", adjustMargin);
  }, []);

  return (
    <>
      <div className="bg-gray-50 rounded-xl shadow-md p-8">
        <Swiper
          modules={[Pagination]}
          grabCursor
          initialSlide={2}
          centeredSlides
          slidesPerView="auto"
          speed={800}
          slideToClickedSlide
          pagination={{ clickable: true }}
          breakpoints={{
            320: { spaceBetween: 40 },
            650: { spaceBetween: 30 },
            1000: { spaceBetween: 20 },
          }}
          onSwiper={(swiper) => {
            swiperWrapperRef.current = swiper.wrapperEl;
          }}>
          {SliderTestimonio.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 w-full">
              {" "}
              <img
                src={slide.imgSrc}
                alt={slide.title}
                className="w-60 h-60 object-cover rounded-full shadow-lg mb-4 mx-auto"
              />{" "}
              <h1 className="text-xl font-semibold text-gray-800 mb-2">
                {slide.title}
              </h1>{" "}
              <p className="text-gray-600 max-w-md mx-auto m-7">
                {slide.description}
              </p>{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonio;
