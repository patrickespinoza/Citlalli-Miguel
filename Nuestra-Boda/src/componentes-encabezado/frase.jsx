import React from "react";
import { motion } from "framer-motion";

const FraseSeparador = () => {
  return (
    <section
      className="
        relative
        flex
        min-h-[500px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#F5F0E6]
        px-6
        py-24
        sm:min-h-[580px]
        sm:px-10
        sm:py-28
      "
    >
      {/* Marcos decorativos */}
      <div className="pointer-events-none absolute inset-4 border border-[#657047]/25 sm:inset-7" />

      <div className="pointer-events-none absolute inset-7 border border-[#657047]/10 sm:inset-10" />

      {/* Adorno superior izquierdo */}
      <div
        className="
          pointer-events-none
          absolute
          -left-12
          -top-12
          h-56
          w-56
          rotate-[-20deg]
          opacity-10
          sm:h-72
          sm:w-72
        "
      >
        <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-[#657047]" />

        <span className="absolute left-[42%] top-[18%] h-10 w-5 -rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <span className="absolute left-[58%] top-[31%] h-11 w-5 rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <span className="absolute left-[31%] top-[45%] h-11 w-5 -rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <span className="absolute left-[46%] top-[61%] h-12 w-5 rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
      </div>

      {/* Adorno inferior derecho */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-12
          -right-12
          h-56
          w-56
          rotate-[160deg]
          opacity-10
          sm:h-72
          sm:w-72
        "
      >
        <div className="absolute left-1/2 top-0 h-full w-px rotate-45 bg-[#657047]" />

        <span className="absolute left-[42%] top-[18%] h-10 w-5 -rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <span className="absolute left-[58%] top-[31%] h-11 w-5 rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <span className="absolute left-[31%] top-[45%] h-11 w-5 -rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
        <span className="absolute left-[46%] top-[61%] h-12 w-5 rotate-45 rounded-[100%_0_100%_0] bg-[#657047]" />
      </div>

      {/* Contenido */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
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
          amount: 0.3,
        }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Adorno superior */}
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
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="mb-10 flex items-center justify-center gap-3"
        >
          <span className="h-px w-14 bg-[#657047]/50 sm:w-24" />

          <span
            className="
              block
              h-3
              w-3
              rotate-45
              border
              border-[#657047]/80
              bg-[#F5F0E6]
            "
          />

          <span className="h-px w-14 bg-[#657047]/50 sm:w-24" />
        </motion.div>

        {/* Comillas decorativas */}
        <motion.span
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          viewport={{
            once: true,
          }}
          className="
            block
            font-playfair
            text-7xl
            leading-none
            text-[#657047]/30
            sm:text-8xl
          "
        >
          “
        </motion.span>

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
            delay: 0.35,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="
            -mt-6
            font-cursiveDancing
            text-4xl
            leading-[1.35]
            text-[#4F5A35]
            sm:text-5xl
            sm:leading-[1.4]
            md:text-6xl
          "
        >
          Amarte es mi acto de rebeldía contra la rutina, porque en medio del
          caos, tú eres mi lugar donde todo tiene sentido.
        </motion.p>

        {/* Comillas inferiores */}
        <motion.span
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-1
            block
            font-playfair
            text-7xl
            leading-none
            text-[#657047]/30
            sm:text-8xl
          "
        >
          ”
        </motion.span>

        {/* Adorno inferior */}
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
            delay: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mt-7 flex items-center justify-center gap-3"
        >
          <span className="h-px w-14 bg-[#657047]/50 sm:w-24" />

          <span className="h-2.5 w-2.5 rotate-45 bg-[#657047]" />

          <span className="h-px w-14 bg-[#657047]/50 sm:w-24" />
        </motion.div>

        {/* Iniciales */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.75,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-8
            font-playfair
            text-xs
            uppercase
            tracking-[0.4em]
            text-[#657047]/70
            sm:text-sm
          "
        >
          Citlalli & Miguel
        </motion.p>
      </motion.div>
    </section>
  );
};

export default FraseSeparador;