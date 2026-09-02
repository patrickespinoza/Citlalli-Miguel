import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Regalos = ({
  banco = "Santander",
  numeroCuenta = "1234 5678 9012 3456",
  titular = "Nombre del titular",
  imagen = "/regalo1.png",
}) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [copiado, setCopiado] = useState(false);

  const copiarCuenta = async () => {
    try {
      await navigator.clipboard.writeText(
        numeroCuenta.replace(/\s/g, "")
      );

      setCopiado(true);

      setTimeout(() => {
        setCopiado(false);
      }, 2000);
    } catch (error) {
      console.error("No se pudo copiar el número de cuenta:", error);
    }
  };

  /* Cerrar modal con la tecla Escape */
  useEffect(() => {
    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        setMostrarModal(false);
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, []);

  /* Evitar desplazamiento mientras el modal está abierto */
  useEffect(() => {
    if (mostrarModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mostrarModal]);

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
      {/* Marcos decorativos exteriores */}
      <div className="pointer-events-none absolute inset-4 border border-white/25 sm:inset-7" />

      <div className="pointer-events-none absolute inset-7 border border-white/10 sm:inset-10" />

      {/* Rama decorativa superior izquierda */}
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

      {/* Rama decorativa inferior derecha */}
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
          amount: 0.2,
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-5xl
          overflow-hidden
          bg-[#F5F0E6]
          px-7
          py-16
          text-center
          shadow-[0_22px_60px_rgba(35,40,22,0.3)]
          sm:px-14
          sm:py-20
        "
      >
        {/* Doble borde interior */}
        <div className="pointer-events-none absolute inset-2 border border-[#657047]/40" />

        <div className="pointer-events-none absolute inset-4 border border-[#657047]/15" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p
            className="
              font-playfair
              text-xs
              font-semibold
              uppercase
              tracking-[0.4em]
              text-[#657047]
              sm:text-sm
            "
          >
            Con cariño
          </p>

          <h2
            className="
              mt-5
              font-cursiveDancing
              text-5xl
              leading-tight
              text-[#4F5A35]
              sm:text-6xl
              md:text-7xl
            "
          >
            Mesa de Regalos
          </h2>

          {/* Separador */}
          <div className="my-8 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-[#657047]/55 sm:w-20" />

            <span
              className="
                block
                h-3
                w-3
                rotate-45
                border
                border-[#657047]
                bg-[#F5F0E6]
              "
            />

            <span className="h-px w-14 bg-[#657047]/55 sm:w-20" />
          </div>

          <motion.img
            whileHover={{
              scale: 1.05,
              rotate: 2,
            }}
            transition={{
              duration: 0.3,
            }}
            src={imagen}
            alt="Mesa de regalos"
            className="
              mx-auto
              mt-8
              h-28
              w-28
              object-contain
              sm:h-32
              sm:w-32
            "
          />

          <p
            className="
              mx-auto
              mt-9
              max-w-2xl
              font-playfair
              text-lg
              leading-relaxed
              text-[#25251F]/80
              sm:text-xl
              sm:leading-9
            "
          >
            El mejor regalo será compartir este día contigo.
            <br />
            <br />
            Si deseas tener un detalle con nosotros, puedes hacerlo mediante una
            transferencia bancaria.
          </p>

          <button
            type="button"
            onClick={() => setMostrarModal(true)}
            className="
              mt-10
              border
              border-[#657047]
              bg-[#657047]
              px-8
              py-4
              font-playfair
              text-sm
              uppercase
              tracking-[0.16em]
              text-white
              shadow-[0_12px_28px_rgba(63,70,42,0.22)]
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-[#4F5A35]
              hover:shadow-[0_16px_32px_rgba(63,70,42,0.28)]
              focus:outline-none
              focus:ring-2
              focus:ring-[#657047]
              focus:ring-offset-4
              focus:ring-offset-[#F5F0E6]
              sm:px-10
              sm:text-base
            "
          >
            Ver datos bancarios
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/65
              px-5
              py-10
              backdrop-blur-sm
            "
            onClick={() => setMostrarModal(false)}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="titulo-datos-bancarios"
              onClick={(event) => event.stopPropagation()}
              initial={{
                scale: 0.9,
                opacity: 0,
                y: 35,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
                y: 35,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                w-full
                max-w-[390px]
                overflow-hidden
                bg-[#657047]
                px-7
                py-10
                text-white
                shadow-[0_30px_80px_rgba(0,0,0,0.4)]
                sm:px-9
              "
            >
              {/* Bordes del modal */}
              <div className="pointer-events-none absolute inset-2 border border-white/35" />

              <div className="pointer-events-none absolute inset-4 border border-white/10" />

              <button
                type="button"
                onClick={() => setMostrarModal(false)}
                aria-label="Cerrar datos bancarios"
                className="
                  absolute
                  right-5
                  top-4
                  z-20
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/35
                  text-2xl
                  leading-none
                  text-white
                  transition
                  hover:bg-white
                  hover:text-[#657047]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white
                "
              >
                ×
              </button>

              <div className="relative z-10 text-center">
                <p
                  className="
                    font-playfair
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-white/70
                  "
                >
                  Transferencia bancaria
                </p>

                <h3
                  id="titulo-datos-bancarios"
                  className="
                    mt-5
                    font-playfair
                    text-3xl
                    text-white
                    sm:text-4xl
                  "
                >
                  {banco}
                </h3>

                <div className="my-7 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-white/45" />

                  <span
                    className="
                      block
                      h-3
                      w-3
                      rotate-45
                      border
                      border-white/80
                    "
                  />

                  <span className="h-px w-10 bg-white/45" />
                </div>

                {/* Representación clásica de tarjeta */}
                <div
                  className="
                    relative
                    mx-auto
                    mt-6
                    overflow-hidden
                    border
                    border-white/35
                    bg-[#4F5A35]
                    px-5
                    py-7
                    text-left
                    shadow-[0_15px_35px_rgba(35,40,22,0.3)]
                  "
                >
                  <div
                    className="
                      h-7
                      w-11
                      border
                      border-[#657047]
                      bg-[#F5F0E6]
                    "
                  />

                  <p
                    className="
                      mt-7
                      break-words
                      font-playfair
                      text-lg
                      tracking-[0.12em]
                      text-white
                      sm:text-xl
                    "
                  >
                    {numeroCuenta}
                  </p>

                  <p
                    className="
                      mt-6
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-white/60
                    "
                  >
                    Titular
                  </p>

                  <p className="mt-1 font-playfair text-base text-white">
                    {titular}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={copiarCuenta}
                  className="
                    mt-8
                    w-full
                    border
                    border-[#F5F0E6]
                    bg-[#F5F0E6]
                    py-3.5
                    font-playfair
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#4F5A35]
                    transition
                    duration-300
                    hover:bg-white
                    focus:outline-none
                    focus:ring-2
                    focus:ring-white
                    focus:ring-offset-2
                    focus:ring-offset-[#657047]
                  "
                >
                  {copiado ? "Número copiado" : "Copiar número"}
                </button>

                <AnimatePresence>
                  {copiado && (
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 6,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="
                        mt-4
                        font-playfair
                        text-sm
                        text-white/80
                      "
                    >
                      El número fue copiado correctamente.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Regalos;