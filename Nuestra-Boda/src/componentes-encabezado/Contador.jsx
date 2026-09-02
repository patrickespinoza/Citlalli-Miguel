import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contador = ({
  titulo = "¡Estás invitado!",
  texto = "Nos encantaría que seas parte de este momento tan especial para nosotros.",
  frase = "¡Falta poco!",
  fecha = "2026-12-19T00:00:00",
}) => {
  const calculateTime = () => {
    const difference = new Date(fecha).getTime() - new Date().getTime();

    if (difference > 0) {
      return {
        Días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutos: Math.floor((difference / (1000 * 60)) % 60),
        Segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return {
      Días: 0,
      Horas: 0,
      Minutos: 0,
      Segundos: 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    setTimeLeft(calculateTime());

    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [fecha]);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F5F0E6]
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:py-28
      "
    >
      {/* Marcos decorativos clásicos */}
      <div className="pointer-events-none absolute inset-4 border border-[#657047]/30 sm:inset-7" />

      <div className="pointer-events-none absolute inset-7 border border-[#657047]/15 sm:inset-10" />

      {/* Decoración superior izquierda */}
      <div
        className="
          pointer-events-none
          absolute
          -left-8
          -top-8
          h-44
          w-44
          rotate-[-18deg]
          opacity-20
          sm:h-56
          sm:w-56
        "
      >
        <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-[#657047]" />

        <div className="absolute left-[43%] top-[20%] h-8 w-4 -rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <div className="absolute left-[56%] top-[32%] h-9 w-4 rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <div className="absolute left-[30%] top-[43%] h-9 w-4 -rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <div className="absolute left-[45%] top-[57%] h-10 w-5 rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
      </div>

      {/* Decoración inferior derecha */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-8
          -right-8
          h-44
          w-44
          rotate-[162deg]
          opacity-20
          sm:h-56
          sm:w-56
        "
      >
        <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-[#657047]" />

        <div className="absolute left-[43%] top-[20%] h-8 w-4 -rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <div className="absolute left-[56%] top-[32%] h-9 w-4 rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <div className="absolute left-[30%] top-[43%] h-9 w-4 -rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <div className="absolute left-[45%] top-[57%] h-10 w-5 rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
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

          <h2
            className="
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

          <p
            className="
              mx-auto
              mt-7
              max-w-3xl
              font-playfair
              text-base
              leading-relaxed
              text-[#25251F]
              sm:text-xl
              md:text-2xl
            "
          >
            {texto}
          </p>

          {/* Separador */}
          <div className="my-9 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-[#657047]/60 sm:w-20" />

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

            <span className="h-px w-14 bg-[#657047]/60 sm:w-20" />
          </div>

          <p
            className="
              font-playfair
              text-xl
              italic
              text-[#657047]
              sm:text-2xl
              md:text-3xl
            "
          >
            {frase}
          </p>
        </motion.div>

        {/* Contador */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="
            relative
            mx-auto
            mt-14
            max-w-4xl
            bg-white
            px-5
            py-8
            shadow-[0_18px_50px_rgba(63,70,42,0.13)]
            sm:mt-16
            sm:px-8
            sm:py-10
          "
        >
          {/* Doble borde interior */}
          <div className="pointer-events-none absolute inset-2 border border-[#657047]/35" />
          <div className="pointer-events-none absolute inset-4 border border-[#657047]/15" />

          <div
            className="
              relative
              z-10
              grid
              grid-cols-2
              gap-x-4
              gap-y-8
              sm:grid-cols-4
              sm:gap-5
            "
          >
            {Object.entries(timeLeft).map(([item, value], index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.12 * index,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -4,
                }}
                className="flex flex-col items-center"
              >
                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-[#657047]
                    font-playfair
                    text-3xl
                    font-medium
                    text-white
                    shadow-[0_10px_25px_rgba(63,70,42,0.22)]
                    sm:h-24
                    sm:w-24
                    sm:text-4xl
                  "
                >
                  {String(value).padStart(2, "0")}
                </div>

                <span
                  className="
                    mt-4
                    font-playfair
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#4F5A35]
                    sm:text-xs
                  "
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contador;