import React from "react";
import { motion } from "framer-motion";

const Celebracion = ({
  titulo = "Celebración",
  fecha = "19 | Diciembre | 2026",
  iglesia = {
    nombre: "Iglesia San Bernardino Contla",
    direccion:
      "Av. 5 de Mayo 51, Séptima Secc., 90670 Contla, Tlax.",
    ubicacion: "https://maps.app.goo.gl/FDdQNShX7M96XGYL7",
  },
  salon = {
    nombre: "Salón Cryda’s",
    direccion:
      "Allende, Guadalupe Ixcotla, 90804 Santa Ana Chiautempan, Tlax.",
    ubicacion: "https://maps.app.goo.gl/EDd61Uifsrr5yd3E9",
  },
}) => {
  const lugares = [
    {
      tipo: "Ceremonia religiosa",
      ...iglesia,
    },
    {
      tipo: "Recepción",
      ...salon,
    },
  ];

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

      {/* Decoración superior izquierda */}
      <div
        className="
          pointer-events-none
          absolute
          -left-8
          -top-8
          h-48
          w-48
          rotate-[-18deg]
          opacity-15
          sm:h-60
          sm:w-60
        "
      >
        <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-white" />

        <div className="absolute left-[43%] top-[20%] h-8 w-4 -rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <div className="absolute left-[56%] top-[32%] h-9 w-4 rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <div className="absolute left-[30%] top-[43%] h-9 w-4 -rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <div className="absolute left-[45%] top-[57%] h-10 w-5 rotate-45 rounded-[100%_0_100%_0] bg-white" />
      </div>

      {/* Decoración inferior derecha */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-8
          -right-8
          h-48
          w-48
          rotate-[162deg]
          opacity-15
          sm:h-60
          sm:w-60
        "
      >
        <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-white" />

        <div className="absolute left-[43%] top-[20%] h-8 w-4 -rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <div className="absolute left-[56%] top-[32%] h-9 w-4 rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <div className="absolute left-[30%] top-[43%] h-9 w-4 -rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <div className="absolute left-[45%] top-[57%] h-10 w-5 rotate-45 rounded-[100%_0_100%_0] bg-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
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
          className="text-center"
        >
          <p
            className="
              mb-5
              font-playfair
              text-xs
              font-semibold
              uppercase
              tracking-[0.4em]
              text-white/75
              sm:text-sm
            "
          >
            Nuestro día especial
          </p>

          <h2
            className="
              font-cursiveDancing
              text-5xl
              leading-tight
              text-white
              sm:text-6xl
              md:text-7xl
            "
          >
            {titulo}
          </h2>

          {/* Separador */}
          <div className="my-8 flex items-center justify-center gap-3">
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

          <p
            className="
              font-playfair
              text-xl
              tracking-wide
              text-white
              sm:text-2xl
              md:text-3xl
            "
          >
            {fecha}
          </p>
        </motion.div>

        {/* Ubicaciones */}
        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-5xl
            grid-cols-1
            gap-8
            md:grid-cols-2
            md:gap-7
          "
        >
          {lugares.map((lugar, index) => (
            <motion.article
              key={lugar.tipo}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                relative
                flex
                h-full
                flex-col
                overflow-hidden
                bg-[#F5F0E6]
                px-6
                py-10
                text-center
                shadow-[0_18px_45px_rgba(35,40,22,0.22)]
                sm:px-9
                sm:py-12
              "
            >
              {/* Doble borde interior */}
              <div className="pointer-events-none absolute inset-2 border border-[#657047]/40" />
              <div className="pointer-events-none absolute inset-4 border border-[#657047]/15" />

              <div className="relative z-10 flex h-full flex-col items-center">
 

                <div
                  className="
                    my-5
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#657047]/50
                    bg-white
                  "
                >
                  {index === 0 ? (
                    /* Ícono de iglesia */
                    <svg
                      viewBox="0 0 64 64"
                      className="h-9 w-9 text-[#657047]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M32 7v12" />
                      <path d="M26 12h12" />
                      <path d="M19 30 32 19l13 11v25H19V30Z" />
                      <path d="M9 40 19 31v24H9V40Z" />
                      <path d="m55 40-10-9v24h10V40Z" />
                      <path d="M28 55V42a4 4 0 0 1 8 0v13" />
                      <path d="M24 33h3" />
                      <path d="M37 33h3" />
                    </svg>
                  ) : (
                    /* Ícono de recepción */
                    <svg
                      viewBox="0 0 64 64"
                      className="h-9 w-9 text-[#657047]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M10 53h44" />
                      <path d="M15 53V30h34v23" />
                      <path d="M21 30V20h22v10" />
                      <path d="M27 20v-8h10v8" />
                      <path d="M22 38h6" />
                      <path d="M36 38h6" />
                      <path d="M28 53V43h8v10" />
                      <path d="M12 30h40" />
                    </svg>
                  )}
                </div>

                <p
                  className="
                    font-playfair
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#657047]
                  "
                >
                  {lugar.tipo}
                </p>

                <h3
                  className="
                    mt-4
                    font-playfair
                    text-2xl
                    leading-snug
                    text-[#4F5A35]
                    sm:text-3xl
                  "
                >
                  {lugar.nombre}
                </h3>

                <div className="my-6 h-px w-16 bg-[#657047]/45" />

                <p
                  className="
                    max-w-md
                    flex-grow
                    font-playfair
                    text-base
                    leading-relaxed
                    text-[#25251F]/75
                    sm:text-lg
                  "
                >
                  {lugar.direccion}
                </p>

                <a
                  href={lugar.ubicacion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    justify-center
                    border
                    border-[#657047]
                    bg-[#657047]
                    px-8
                    py-3.5
                    font-playfair
                    text-sm
                    uppercase
                    tracking-[0.16em]
                    text-white
                    shadow-[0_10px_24px_rgba(63,70,42,0.2)]
                    transition
                    duration-300
                    hover:bg-[#4F5A35]
                    hover:shadow-[0_13px_28px_rgba(63,70,42,0.28)]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-white
                    focus:ring-offset-2
                    focus:ring-offset-[#657047]
                    sm:text-base
                  "
                >
                  Ver ubicación
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto
            mt-10
            max-w-2xl
            text-center
            font-playfair
            text-sm
            italic
            text-white/75
            sm:text-base
          "
        >
          Los horarios serán anunciados próximamente.
        </motion.p>
      </div>
    </section>
  );
};

export default Celebracion;