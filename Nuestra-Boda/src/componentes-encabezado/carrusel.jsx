import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const images = [
    {
      src: "/Carrusel01.jpg",
      position: "center 1%",
    },
    {
      src: "/Carrusel02.jpg",
      position: "center 40%",
    },
    {
      src: "/Carrusel03.jpg",
      position: "center 25%",
    },
  ];

  const [index, setIndex] = useState(0);

  /* Precarga de imágenes */
  useEffect(() => {
    images.forEach((imageItem) => {
      const image = new Image();
      image.src = imageItem.src;
    });
  }, []);

  /* Cambio automático */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#657047]
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:py-28
      "
    >
      {/* Marcos decorativos */}
      <div className="pointer-events-none absolute inset-4 border border-white/25 sm:inset-7" />

      <div className="pointer-events-none absolute inset-7 border border-white/10 sm:inset-10" />

      {/* Rama superior izquierda */}
      <div
        className="
          pointer-events-none
          absolute
          -left-10
          -top-10
          h-52
          w-52
          rotate-[-18deg]
          opacity-15
          sm:h-64
          sm:w-64
        "
      >
        <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-white" />

        <span className="absolute left-[43%] top-[20%] h-9 w-4 -rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <span className="absolute left-[57%] top-[31%] h-10 w-5 rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <span className="absolute left-[30%] top-[43%] h-10 w-5 -rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <span className="absolute left-[45%] top-[58%] h-11 w-5 rotate-45 rounded-[100%_0_100%_0] bg-white" />
      </div>

      {/* Rama inferior derecha */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-10
          -right-10
          h-52
          w-52
          rotate-[162deg]
          opacity-15
          sm:h-64
          sm:w-64
        "
      >
        <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-white" />

        <span className="absolute left-[43%] top-[20%] h-9 w-4 -rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <span className="absolute left-[57%] top-[31%] h-10 w-5 rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <span className="absolute left-[30%] top-[43%] h-10 w-5 -rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <span className="absolute left-[45%] top-[58%] h-11 w-5 rotate-45 rounded-[100%_0_100%_0] bg-white" />
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 45,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        {/* Encabezado */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p
            className="
              font-playfair
              text-xs
              font-semibold
              uppercase
              tracking-[0.4em]
              text-white/75
              sm:text-sm
            "
          >
            Nuestra historia
          </p>

          <h2
            className="
              mt-5
              font-cursiveDancing
              text-5xl
              leading-tight
              text-white
              sm:text-6xl
              md:text-7xl
            "
          >
            Momentos
          </h2>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-white/50 sm:w-20" />

            <span
              className="
                block
                h-3
                w-3
                rotate-45
                border
                border-white/80
                bg-[#657047]
              "
            />

            <span className="h-px w-14 bg-white/50 sm:w-20" />
          </div>
        </div>

        {/* Marco del carrusel */}
        <div
          className="
            relative
            mx-auto
            max-w-4xl
            bg-[#F5F0E6]
            p-3
            shadow-[0_22px_60px_rgba(35,40,22,0.3)]
            sm:p-5
          "
        >
          {/* Bordes del marco */}
          <div className="pointer-events-none absolute inset-1.5 border border-[#657047]/45 sm:inset-2.5" />

          <div className="pointer-events-none absolute inset-3 border border-[#657047]/15 sm:inset-4" />

          {/* Contenedor de imagen */}
          <div
            className="
              relative
              h-[580px]
              overflow-hidden
              bg-[#E9E4D9]
              sm:h-[560px]
              md:h-[950px]
            "
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index].src}
                alt={`Momento de Citlalli y Miguel ${index + 1}`}
                initial={{
                  opacity: 0,
                  scale: 1.04,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.75,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
                style={{
                  objectPosition: images[index].position,
                }}
              />
            </AnimatePresence>

            {/* Oscurecimiento inferior para indicadores */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-24
                bg-gradient-to-t
                from-black/35
                to-transparent
              "
            />

            {/* Botón izquierdo */}
            <button
              type="button"
              onClick={prevImage}
              aria-label="Ver imagen anterior"
              className="
                absolute
                left-3
                top-1/2
                z-10
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/45
                bg-[#657047]/90
                text-white
                shadow-[0_8px_20px_rgba(0,0,0,0.2)]
                transition
                duration-300
                hover:scale-110
                hover:bg-[#4F5A35]
                focus:outline-none
                focus:ring-2
                focus:ring-white
                sm:left-5
                sm:h-12
                sm:w-12
              "
            >
              <FaChevronLeft size={18} />
            </button>

            {/* Botón derecho */}
            <button
              type="button"
              onClick={nextImage}
              aria-label="Ver imagen siguiente"
              className="
                absolute
                right-3
                top-1/2
                z-10
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/45
                bg-[#657047]/90
                text-white
                shadow-[0_8px_20px_rgba(0,0,0,0.2)]
                transition
                duration-300
                hover:scale-110
                hover:bg-[#4F5A35]
                focus:outline-none
                focus:ring-2
                focus:ring-white
                sm:right-5
                sm:h-12
                sm:w-12
              "
            >
              <FaChevronRight size={18} />
            </button>

            {/* Indicadores */}
            <div
              className="
                absolute
                bottom-5
                left-1/2
                z-10
                flex
                -translate-x-1/2
                items-center
                gap-2.5
              "
            >
              {images.map((imageItem, imageIndex) => (
                <motion.button
                  type="button"
                  key={imageItem.src}
                  onClick={() => selectImage(imageIndex)}
                  aria-label={`Ver imagen ${imageIndex + 1}`}
                  animate={{
                    width: index === imageIndex ? 30 : 9,
                    backgroundColor:
                      index === imageIndex ? "#FFFFFF" : "#FFFFFF80",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    h-2.5
                    rounded-full
                    border
                    border-white/40
                    focus:outline-none
                    focus:ring-2
                    focus:ring-white
                  "
                />
              ))}
            </div>
          </div>
        </div>

        {/* Numeración */}
        <p
          className="
            mt-7
            text-center
            font-playfair
            text-sm
            tracking-[0.25em]
            text-white/75
          "
        >
          {String(index + 1).padStart(2, "0")}

          <span className="mx-2 text-white/40">/</span>

          {String(images.length).padStart(2, "0")}
        </p>
      </motion.div>
    </section>
  );
};

export default Carousel;