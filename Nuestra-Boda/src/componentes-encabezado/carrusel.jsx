
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ==========================================
// FOTOGRAFÍAS DEL CARRUSEL
// ==========================================

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
  {
    src: "/Carrusel04.jpg",
    position: "center center",
  },
  {
    src: "/Carrusel05.jpg",
    position: "center center",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  // ==========================================
  // PRECARGA DE IMÁGENES
  // ==========================================

  useEffect(() => {
    images.forEach((imageItem) => {
      const image = new Image();
      image.src = imageItem.src;
    });
  }, []);

  // ==========================================
  // CAMBIO AUTOMÁTICO CADA 4.5 SEGUNDOS
  // ==========================================

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // ==========================================
  // CONTROLES DE NAVEGACIÓN
  // ==========================================

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
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
      {/* ======================================
          MARCOS DECORATIVOS EXTERIORES
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-4
          border
          border-white/25
          sm:inset-7
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-7
          border
          border-white/10
          sm:inset-10
        "
      />

      {/* ======================================
          RAMA SUPERIOR IZQUIERDA
      ====================================== */}

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

      {/* ======================================
          RAMA INFERIOR DERECHA
      ====================================== */}

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

      {/* ======================================
          CONTENIDO PRINCIPAL
      ====================================== */}

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
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
        "
      >
        {/* ==================================
            ENCABEZADO
        ================================== */}

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

          {/* SEPARADOR DECORATIVO */}

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

        {/* ==================================
            MARCO PRINCIPAL DEL CARRUSEL
        ================================== */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-4xl
            bg-[#F5F0E6]
            p-3
            shadow-[0_22px_60px_rgba(35,40,22,0.3)]
            sm:p-5
          "
        >
          {/* DOBLE BORDE DECORATIVO */}

          <div
            className="
              pointer-events-none
              absolute
              inset-1.5
              border
              border-[#657047]/45
              sm:inset-2.5
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-3
              border
              border-[#657047]/15
              sm:inset-4
            "
          />

          {/* ==================================
              IMAGEN ADAPTABLE
          ================================== */}

          <div
            className="
              relative
              w-full
              overflow-hidden
              bg-[#E9E4D9]
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 1.015,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                }}
                className="
                  relative
                  flex
                  w-full
                  items-center
                  justify-center
                "
              >
                <img
                  src={images[index].src}
                  alt={`Momento de Citlalli y Miguel ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="
                    block
                    h-auto
                    w-full
                    max-h-[85vh]
                    object-contain
                  "
                  style={{
                    objectPosition: images[index].position,
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ==================================
            CONTROLES DEBAJO DEL MARCO
        ================================== */}

        <div
          className="
            mx-auto
            mt-8
            flex
            w-full
            max-w-4xl
            flex-col
            items-center
            justify-center
            gap-5
            sm:mt-10
          "
        >
          {/* FLECHAS E INDICADORES */}

          <div
            className="
              flex
              w-full
              items-center
              justify-center
              gap-5
              sm:gap-8
            "
          >
            {/* BOTÓN ANTERIOR */}

            <motion.button
              type="button"
              onClick={prevImage}
              aria-label="Ver imagen anterior"
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.94,
              }}
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/60
                bg-[#F5F0E6]
                text-[#657047]
                shadow-[0_8px_20px_rgba(0,0,0,0.15)]
                transition-colors
                duration-300
                hover:bg-white
                focus:outline-none
                focus:ring-2
                focus:ring-white
                sm:h-14
                sm:w-14
              "
            >
              <FaChevronLeft size={18} />
            </motion.button>

            {/* INDICADORES */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                sm:gap-2.5
              "
            >
              {images.map((imageItem, imageIndex) => (
                <motion.button
                  type="button"
                  key={imageItem.src}
                  onClick={() => selectImage(imageIndex)}
                  aria-label={`Ver imagen ${imageIndex + 1}`}
                  animate={{
                    width: index === imageIndex ? 28 : 9,
                    backgroundColor:
                      index === imageIndex
                        ? "#FFFFFF"
                        : "#FFFFFF70",
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

            {/* BOTÓN SIGUIENTE */}

            <motion.button
              type="button"
              onClick={nextImage}
              aria-label="Ver imagen siguiente"
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.94,
              }}
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/60
                bg-[#F5F0E6]
                text-[#657047]
                shadow-[0_8px_20px_rgba(0,0,0,0.15)]
                transition-colors
                duration-300
                hover:bg-white
                focus:outline-none
                focus:ring-2
                focus:ring-white
                sm:h-14
                sm:w-14
              "
            >
              <FaChevronRight size={18} />
            </motion.button>
          </div>

          {/* ==================================
              NUMERACIÓN
          ================================== */}

          <p
            className="
              text-center
              font-playfair
              text-sm
              tracking-[0.25em]
              text-white/75
            "
          >
            {String(index + 1).padStart(2, "0")}

            <span className="mx-2 text-white/40">
              /
            </span>

            {String(images.length).padStart(2, "0")}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Carousel;
