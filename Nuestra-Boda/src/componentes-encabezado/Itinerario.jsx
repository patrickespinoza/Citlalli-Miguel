import React from "react";
import { motion } from "framer-motion";

const Itinerario = ({
  titulo = "Itinerario",
  subtitulo = "Acompáñanos en cada momento de este día especial",
  eventos = [
    {
      hora: "00:00 PM",
      actividad: "Ceremonia religiosa",
    },
    {
      hora: "00:00 PM",
      actividad: "Recepción",
    },
    {
      hora: "00:00 PM",
      actividad: "Cena",
    },
    {
      hora: "00:00 PM",
      actividad: "Celebración",
    },
  ],
}) => {
  const obtenerIcono = (actividad) => {
    const texto = actividad.toLowerCase();

    if (
      texto.includes("ceremonia") ||
      texto.includes("misa") ||
      texto.includes("iglesia")
    ) {
      return (
        <svg
          viewBox="0 0 64 64"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M32 6v13" />
          <path d="M26 12h12" />
          <path d="M18 31 32 19l14 12v25H18V31Z" />
          <path d="M27 56V43a5 5 0 0 1 10 0v13" />
          <path d="M9 56V40l9-8v24" />
          <path d="M55 56V40l-9-8v24" />
        </svg>
      );
    }

    if (
      texto.includes("recepción") ||
      texto.includes("recepcion") ||
      texto.includes("entrada")
    ) {
      return (
        <svg
          viewBox="0 0 64 64"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 53h46" />
          <path d="M14 53V29h36v24" />
          <path d="M20 29V19h24v10" />
          <path d="M27 19v-8h10v8" />
          <path d="M27 53V42h10v11" />
          <path d="M10 29h44" />
        </svg>
      );
    }

    if (
      texto.includes("cena") ||
      texto.includes("comida") ||
      texto.includes("banquete")
    ) {
      return (
        <svg
          viewBox="0 0 64 64"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 8v18" />
          <path d="M12 8v10c0 4 2 7 6 8" />
          <path d="M24 8v10c0 4-2 7-6 8" />
          <path d="M18 26v30" />
          <path d="M43 8c-6 7-7 18-1 25h7V8h-6Z" />
          <path d="M49 8v48" />
        </svg>
      );
    }

    if (
      texto.includes("baile") ||
      texto.includes("fiesta") ||
      texto.includes("celebración") ||
      texto.includes("celebracion")
    ) {
      return (
        <svg
          viewBox="0 0 64 64"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 45c-6-2-10-7-10-13 0-8 7-15 16-15 4 0 8 2 11 5" />
          <path d="M42 19c6 2 10 7 10 13 0 8-7 15-16 15-4 0-8-2-11-5" />
          <path d="m26 13 3 6 6 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 4-6Z" />
          <path d="m45 35 2 4 5 1-4 4 1 5-4-2-5 2 1-5-4-4 5-1 3-4Z" />
        </svg>
      );
    }

    return (
      <svg
        viewBox="0 0 64 64"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="23" />
        <path d="M32 18v15l10 6" />
      </svg>
    );
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F5F0E6]
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:py-28
      "
    >
      {/* Marcos clásicos */}
      <div className="pointer-events-none absolute inset-4 border border-[#657047]/30 sm:inset-7" />

      <div className="pointer-events-none absolute inset-7 border border-[#657047]/15 sm:inset-10" />

      {/* Decoración superior */}
      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-52
          w-52
          rotate-[18deg]
          opacity-15
          sm:h-64
          sm:w-64
        "
      >
        <div className="absolute left-1/2 top-0 h-full w-px -rotate-45 bg-[#657047]" />

        <span className="absolute left-[43%] top-[20%] h-9 w-4 rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <span className="absolute left-[57%] top-[31%] h-10 w-5 -rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <span className="absolute left-[30%] top-[43%] h-10 w-5 rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <span className="absolute left-[45%] top-[58%] h-11 w-5 -rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Encabezado */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mx-auto max-w-3xl text-center"
        >
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
            Nuestro día
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
            {titulo}
          </h2>

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

          <p
            className="
              font-playfair
              text-base
              leading-relaxed
              text-[#25251F]/75
              sm:text-lg
            "
          >
            {subtitulo}
          </p>
        </motion.div>

        {/* Línea de tiempo */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Línea central escritorio */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-8
              left-1/2
              top-8
              hidden
              w-px
              -translate-x-1/2
              bg-[#657047]/40
              md:block
            "
          />

          {/* Línea lateral móvil */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-8
              left-6
              top-8
              w-px
              bg-[#657047]/40
              md:hidden
            "
          />

          <div className="space-y-8 md:space-y-10">
            {eventos.map((evento, index) => {
              const esIzquierda = index % 2 === 0;

              return (
                <motion.div
                  key={`${evento.hora}-${evento.actividad}-${index}`}
                  initial={{
                    opacity: 0,
                    x: esIzquierda ? -35 : 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  className="
                    relative
                    grid
                    grid-cols-[48px_1fr]
                    items-center
                    gap-4
                    md:grid-cols-[1fr_72px_1fr]
                    md:gap-6
                  "
                >
                  {/* Tarjeta lado izquierdo */}
                  <div
                    className={`
                      ${
                        esIzquierda
                          ? "md:col-start-1 md:block"
                          : "md:col-start-1 md:hidden"
                      }
                      col-start-2
                      row-start-1
                    `}
                  >
                    {esIzquierda && (
                      <TarjetaEvento evento={evento} alineacion="right" />
                    )}

                    {!esIzquierda && (
                      <div className="md:hidden">
                        <TarjetaEvento evento={evento} alineacion="left" />
                      </div>
                    )}
                  </div>

                  {/* Círculo e ícono */}
                  <div
                    className="
                      relative
                      z-10
                      col-start-1
                      row-start-1
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#657047]
                      bg-[#657047]
                      text-white
                      shadow-[0_8px_20px_rgba(63,70,42,0.2)]
                      md:col-start-2
                      md:h-16
                      md:w-16
                    "
                  >
                    {obtenerIcono(evento.actividad)}
                  </div>

                  {/* Tarjeta lado derecho */}
                  {!esIzquierda && (
                    <div
                      className="
                        hidden
                        md:col-start-3
                        md:row-start-1
                        md:block
                      "
                    >
                      <TarjetaEvento evento={evento} alineacion="left" />
                    </div>
                  )}

                  {/* Espacio para conservar simetría */}
                  {esIzquierda && (
                    <div className="hidden md:col-start-3 md:block" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const TarjetaEvento = ({ evento, alineacion }) => {
  return (
    <motion.article
      whileHover={{
        y: -3,
      }}
      className={`
        relative
        overflow-hidden
        bg-white
        px-6
        py-6
        shadow-[0_14px_35px_rgba(63,70,42,0.12)]
        sm:px-8
        ${
          alineacion === "right"
            ? "md:text-right"
            : "text-left"
        }
      `}
    >
      <div className="pointer-events-none absolute inset-2 border border-[#657047]/25" />

      <div className="relative z-10">
        <p
          className="
            font-playfair
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#657047]
            sm:text-base
          "
        >
          {evento.hora}
        </p>

        <div
          className={`
            my-3
            h-px
            w-10
            bg-[#657047]/45
            ${
              alineacion === "right"
                ? "md:ml-auto"
                : ""
            }
          `}
        />

        <h3
          className="
            font-playfair
            text-xl
            leading-snug
            text-[#25251F]
            sm:text-2xl
          "
        >
          {evento.actividad}
        </h3>
      </div>
    </motion.article>
  );
};

export default Itinerario;