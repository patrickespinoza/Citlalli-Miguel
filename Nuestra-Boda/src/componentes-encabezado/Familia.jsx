import React from "react";
import { motion } from "framer-motion";

const Familia = ({
  padresNovia = [
    "Nombre del papá de la novia",
    "Nombre de la mamá de la novia",
  ],
  padresNovio = [
    "Nombre del papá del novio",
    "Nombre de la mamá del novio",
  ],
  padrinos = [
    "Nombre del padrino",
    "Nombre de la madrina",
  ],
}) => {
  const familias = [
    {
      numero: "01",
      titulo: "Padres de la novia",
      nombres: padresNovia,
    },
    {
      numero: "02",
      titulo: "Padres del novio",
      nombres: padresNovio,
    },
    {
      numero: "03",
      titulo: "Padrinos",
      nombres: padrinos,
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
      {/* Marcos decorativos exteriores */}
      <div className="pointer-events-none absolute inset-4 border border-white/25 sm:inset-7" />

      <div className="pointer-events-none absolute inset-7 border border-white/10 sm:inset-10" />

      {/* Rama decorativa superior */}
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

      {/* Rama decorativa inferior */}
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
          className="mx-auto max-w-3xl text-center"
        >
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
            Con la bendición de
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
            Nuestra Familia
          </h2>

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
              text-base
              leading-relaxed
              text-white/80
              sm:text-lg
            "
          >
            Quienes con su amor y ejemplo han acompañado nuestro camino.
          </p>
        </motion.div>

        {/* Tarjetas familiares */}
        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-5xl
            grid-cols-1
            gap-7
            md:grid-cols-3
          "
        >
          {familias.map((familia, index) => (
            <motion.article
              key={familia.titulo}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.13,
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
                min-h-[350px]
                flex-col
                items-center
                justify-center
                overflow-hidden
                bg-[#F5F0E6]
                px-7
                py-12
                text-center
                shadow-[0_18px_45px_rgba(35,40,22,0.24)]
              "
            >
              {/* Doble borde de la tarjeta */}
              <div className="pointer-events-none absolute inset-2 border border-[#657047]/40" />

              <div className="pointer-events-none absolute inset-4 border border-[#657047]/15" />

              <div className="relative z-10 flex flex-col items-center">
                <span
                  className="
                    font-playfair
                    text-xs
                    font-semibold
                    tracking-[0.3em]
                    text-[#657047]/70
                  "
                >
                  {familia.numero}
                </span>

                {/* Ornamento */}
                <div className="my-5 flex items-center justify-center gap-2">
                  <span className="h-px w-8 bg-[#657047]/45" />

                  <span
                    className="
                      h-2.5
                      w-2.5
                      rotate-45
                      border
                      border-[#657047]
                    "
                  />

                  <span className="h-px w-8 bg-[#657047]/45" />
                </div>

                <h3
                  className="
                    font-cursiveDancing
                    text-4xl
                    leading-tight
                    text-[#4F5A35]
                    sm:text-5xl
                    md:text-4xl
                    lg:text-5xl
                  "
                >
                  {familia.titulo}
                </h3>

                <div className="my-7 h-px w-14 bg-[#657047]/40" />

                <div className="space-y-4">
                  {familia.nombres.map((nombre, nombreIndex) => (
                    <p
                      key={`${familia.titulo}-${nombreIndex}`}
                      className="
                        font-playfair
                        text-lg
                        leading-relaxed
                        text-[#25251F]
                        sm:text-xl
                      "
                    >
                      {nombre}
                    </p>
                  ))}
                </div>
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
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto
            mt-12
            max-w-2xl
            text-center
            font-playfair
            text-base
            italic
            leading-relaxed
            text-white/75
            sm:text-lg
          "
        >
          Gracias por ser parte esencial de nuestra historia.
        </motion.p>
      </div>
    </section>
  );
};

export default Familia;