
import React from "react";
import { motion } from "framer-motion";

const Celebracion = ({
  titulo = "Celebración",
  fecha = "19 | Diciembre | 2026",

  // PRIMERA UBICACIÓN: IGLESIA
  iglesia = {
    nombre: "Iglesia San Bernardino Contla",
    direccion:
      "Av. 5 de Mayo 51, Séptima Secc., 90670 Contla, Tlax.",
    ubicacion: "https://maps.app.goo.gl/FDdQNShX7M96XGYL7",
    imagen: "/iglesia1.jpg",
    hora: "12:00 p. m.",
  },

  // SEGUNDA UBICACIÓN: BODA CIVIL
  civil = {
    nombre: "Boda civil",
    direccion:
      "Av. 5 de Mayo 25, Séptima Secc, 90670 Contla, Tlax.",
    ubicacion: "https://maps.app.goo.gl/bJcpFAwhupqex8Hi7",
    hora: "2:00 p. m.",
  },

  // TERCERA UBICACIÓN: RECEPCIÓN
  salon = {
    nombre: "Salón Cryda’s",
    direccion:
      "Allende, Guadalupe Ixcotla, 90804 Santa Ana Chiautempan, Tlax.",
    ubicacion: "https://maps.app.goo.gl/EDd61Uifsrr5yd3E9",
    imagen: "/salon.jpg",
    hora: "4:00 p. m.",
  },
}) => {
  // ORDEN CRONOLÓGICO
  const lugares = [
    {
      tipo: "Ceremonia religiosa",
      icono: "iglesia",
      ...iglesia,
    },
    {
      tipo: "Ceremonia civil",
      icono: "civil",
      ...civil,
    },
    {
      tipo: "Recepción",
      icono: "salon",
      ...salon,
    },
  ];

  // ÍCONOS DECORATIVOS
  const IconoLugar = ({ tipo }) => {
    const propiedades = {
      viewBox: "0 0 64 64",
      className: "h-9 w-9 text-[#657047]",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": true,
    };

    if (tipo === "iglesia") {
      return (
        <svg {...propiedades}>
          <path d="M32 7v12" />
          <path d="M26 12h12" />
          <path d="M19 30 32 19l13 11v25H19V30Z" />
          <path d="M9 40 19 31v24H9V40Z" />
          <path d="m55 40-10-9v24h10V40Z" />
          <path d="M28 55V42a4 4 0 0 1 8 0v13" />
          <path d="M24 33h3" />
          <path d="M37 33h3" />
        </svg>
      );
    }

    if (tipo === "civil") {
      return (
        <svg {...propiedades}>
          <path d="M7 26 32 12l25 14" />
          <path d="M10 28h44" />
          <path d="M14 52h36" />
          <path d="M9 57h46" />
          <path d="M18 29v23" />
          <path d="M28 29v23" />
          <path d="M36 29v23" />
          <path d="M46 29v23" />
          <path d="M32 6v6" />
        </svg>
      );
    }

    return (
      <svg {...propiedades}>
        <path d="M10 53h44" />
        <path d="M15 53V30h34v23" />
        <path d="M21 30V20h22v10" />
        <path d="M27 20v-8h10v8" />
        <path d="M22 38h6" />
        <path d="M36 38h6" />
        <path d="M28 53V43h8v10" />
        <path d="M12 30h40" />
      </svg>
    );
  };

  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-[#657047]
        px-5 py-20
        sm:px-8 sm:py-24
        lg:py-28
      "
    >
      {/* MARCOS DECORATIVOS EXTERIORES */}
      <div
        className="
          pointer-events-none absolute
          inset-4 border border-white/25
          sm:inset-7
        "
      />

      <div
        className="
          pointer-events-none absolute
          inset-7 border border-white/10
          sm:inset-10
        "
      />

      {/* DECORACIÓN SUPERIOR IZQUIERDA */}
      <div
        className="
          pointer-events-none absolute
          -left-8 -top-8
          h-48 w-48
          rotate-[-18deg]
          opacity-15
          sm:h-60 sm:w-60
        "
      >
        <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-white" />
        <div className="absolute left-[43%] top-[20%] h-8 w-4 -rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <div className="absolute left-[56%] top-[32%] h-9 w-4 rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <div className="absolute left-[30%] top-[43%] h-9 w-4 -rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <div className="absolute left-[45%] top-[57%] h-10 w-5 rotate-45 rounded-[100%_0_100%_0] bg-white" />
      </div>

      {/* DECORACIÓN INFERIOR DERECHA */}
      <div
        className="
          pointer-events-none absolute
          -bottom-8 -right-8
          h-48 w-48
          rotate-[162deg]
          opacity-15
          sm:h-60 sm:w-60
        "
      >
        <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-white" />
        <div className="absolute left-[43%] top-[20%] h-8 w-4 -rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <div className="absolute left-[56%] top-[32%] h-9 w-4 rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <div className="absolute left-[30%] top-[43%] h-9 w-4 -rotate-45 rounded-[100%_0_100%_0] bg-white" />
        <div className="absolute left-[45%] top-[57%] h-10 w-5 rotate-45 rounded-[100%_0_100%_0] bg-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ENCABEZADO */}
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
              mb-5 font-playfair
              text-xs font-semibold
              uppercase tracking-[0.4em]
              text-white/75
              sm:text-sm
            "
          >
            Nuestro día especial
          </p>

          <h2
            className="
              font-cursiveDancing
              text-5xl leading-tight
              text-white
              sm:text-6xl
              md:text-7xl
            "
          >
            {titulo}
          </h2>

          {/* SEPARADOR */}
          <div className="my-8 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-white/50 sm:w-20" />

            <span
              className="
                block h-3 w-3
                rotate-45
                border border-white/80
                bg-[#657047]
              "
            />

            <span className="h-px w-14 bg-white/50 sm:w-20" />
          </div>

          <p
            className="
              font-playfair
              text-xl tracking-wide
              text-white
              sm:text-2xl
              md:text-3xl
            "
          >
            {fecha}
          </p>
        </motion.div>

        {/* TARJETAS DE UBICACIONES */}
        <div
          className="
            mx-auto mt-14
            grid max-w-6xl
            grid-cols-1 gap-8
            md:grid-cols-2
            lg:grid-cols-3
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
              className={`
                relative flex h-full
                flex-col overflow-hidden
                bg-[#F5F0E6]
                px-6 py-10
                text-center
                shadow-[0_18px_45px_rgba(35,40,22,0.22)]
                sm:px-8 sm:py-12
                ${
                  index === 2
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }
              `}
            >
              {/* DOBLE BORDE INTERIOR */}
              <div className="pointer-events-none absolute inset-2 border border-[#657047]/40" />
              <div className="pointer-events-none absolute inset-4 border border-[#657047]/15" />

              <div className="relative z-10 flex h-full flex-col items-center">

                {/* ÍCONO */}
                <div
                  className="
                    my-5 flex h-16 w-16
                    shrink-0 items-center
                    justify-center
                    rounded-full
                    border border-[#657047]/50
                    bg-white
                  "
                >
                  <IconoLugar tipo={lugar.icono} />
                </div>

                {/* TIPO DE CEREMONIA */}
                <p
                  className="
                    font-playfair
                    text-xs font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#657047]
                  "
                >
                  {lugar.tipo}
                </p>

                {/* NOMBRE DEL LUGAR */}
                <h3
                  className="
                    mt-4 font-playfair
                    text-2xl leading-snug
                    text-[#4F5A35]
                    sm:text-3xl
                  "
                >
                  {lugar.nombre}
                </h3>

                {/* SEPARADOR */}
                <div className="my-6 h-px w-16 bg-[#657047]/45" />

                {/* HORARIO DE CADA UBICACIÓN */}
                {lugar.hora && (
                  <div className="mb-7 text-center">
                    <p
                      className="
                        mb-3 font-playfair
                        text-xs font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-[#657047]/75
                      "
                    >
                      Horario
                    </p>

                    <p
                      className="
                        font-playfair
                        text-2xl font-semibold
                        tracking-wide
                        text-[#4F5A35]
                        sm:text-3xl
                      "
                    >
                      {lugar.hora}
                    </p>

                    <div className="mx-auto mt-5 h-px w-16 bg-[#657047]/35" />
                  </div>
                )}

                {/* FOTOGRAFÍA OPCIONAL */}
                {lugar.imagen && (
                  <div
                    className="
                      mb-7 w-full
                      border border-[#657047]/35
                      bg-[#E8E4D9]
                      p-1.5
                    "
                  >
                    <div
                      className="
                        relative h-52 w-full
                        overflow-hidden
                        sm:h-60
                      "
                    >
                      <img
                        src={lugar.imagen}
                        alt={lugar.nombre}
                        loading="lazy"
                        className="
                          h-full w-full
                          object-cover
                          object-center
                          transition-transform
                          duration-700
                          hover:scale-105
                        "
                      />
                    </div>
                  </div>
                )}

                {/* DIRECCIÓN */}
                <p
                  className="
                    max-w-md flex-grow
                    font-playfair
                    text-base leading-relaxed
                    text-[#25251F]/75
                    sm:text-lg
                  "
                >
                  {lugar.direccion}
                </p>

                {/* BOTÓN DE GOOGLE MAPS */}
                <a
                  href={lugar.ubicacion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-8 inline-flex
                    items-center justify-center
                    border border-[#657047]
                    bg-[#657047]
                    px-7 py-3.5
                    font-playfair
                    text-sm uppercase
                    tracking-[0.16em]
                    text-white
                    shadow-[0_10px_24px_rgba(63,70,42,0.2)]
                    transition duration-300
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

        {/* MENSAJE INFERIOR */}
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
            mx-auto mt-10
            max-w-2xl
            text-center
            font-playfair
            text-sm italic
            text-white/75
            sm:text-base
          "
        >
          Te esperamos para compartir juntos
          este día tan especial.
        </motion.p>
      </div>
    </section>
  );
};

export default Celebracion;
