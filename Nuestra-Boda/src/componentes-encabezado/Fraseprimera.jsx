import React from "react";
import { motion } from "framer-motion";

const FraseCapitulo = () => {
  return (
    <section
      className="
        relative
        flex
        min-h-[520px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#F5F0E6]
        px-6
        py-24
        sm:min-h-[600px]
        sm:px-10
        sm:py-28
      "
    >
      {/* Marcos decorativos */}
      <div className="pointer-events-none absolute inset-4 border border-[#657047]/25 sm:inset-7" />

      <div className="pointer-events-none absolute inset-7 border border-[#657047]/10 sm:inset-10" />

      {/* Círculo decorativo superior */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          border
          border-[#657047]/15
          sm:h-80
          sm:w-80
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-48
          w-48
          rounded-full
          border
          border-[#657047]/10
          sm:h-64
          sm:w-64
        "
      />

      {/* Círculo decorativo inferior */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-24
          h-64
          w-64
          rounded-full
          border
          border-[#657047]/15
          sm:h-80
          sm:w-80
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-16
          h-48
          w-48
          rounded-full
          border
          border-[#657047]/10
          sm:h-64
          sm:w-64
        "
      />

      {/* Rama superior izquierda */}
      <div
        className="
          pointer-events-none
          absolute
          -left-10
          top-10
          h-48
          w-48
          rotate-[-25deg]
          opacity-10
          sm:h-60
          sm:w-60
        "
      >
        <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-[#657047]" />

        <span className="absolute left-[42%] top-[18%] h-9 w-4 -rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <span className="absolute left-[58%] top-[31%] h-10 w-5 rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <span className="absolute left-[31%] top-[45%] h-10 w-5 -rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <span className="absolute left-[46%] top-[61%] h-11 w-5 rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
      </div>

      {/* Contenido principal */}
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
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        

        {/* Etiqueta */}
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-9
            font-playfair
            text-xs
            font-semibold
            uppercase
            tracking-[0.4em]
            text-[#657047]/70
            sm:text-sm
          "
        >
          Nuestra historia comienza
        </motion.p>

        {/* Separador superior */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.4,
          }}
          viewport={{
            once: true,
          }}
          className="my-8 flex items-center justify-center gap-3"
        >
          <span className="h-px w-14 bg-[#657047]/40 sm:w-24" />

          <span
            className="
              h-3
              w-3
              rotate-45
              border
              border-[#657047]/70
              bg-[#F5F0E6]
            "
          />

          <span className="h-px w-14 bg-[#657047]/40 sm:w-24" />
        </motion.div>

        {/* Frase */}
        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.45,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="
            font-cursiveDancing
            text-4xl
            leading-[1.35]
            text-[#4F5A35]
            sm:text-5xl
            sm:leading-[1.4]
            md:text-6xl
          "
        >
          “Ahora, por fin, están al principio del capítulo uno de la mejor
          historia que jamás alguien en la Tierra ha leído. Continúa por siempre
          y cada capítulo es mejor que el anterior.”
        </motion.p>

        {/* Separador inferior */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.65,
          }}
          viewport={{
            once: true,
          }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-[#657047]/40 sm:w-20" />

          <span className="h-2.5 w-2.5 rotate-45 bg-[#657047]" />

          <span className="h-px w-12 bg-[#657047]/40 sm:w-20" />
        </motion.div>

 
      </motion.div>
    </section>
  );
};

export default FraseCapitulo;