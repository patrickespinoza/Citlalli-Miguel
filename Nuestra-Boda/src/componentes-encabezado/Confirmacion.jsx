import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Confirmacion = () => {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [error, setError] = useState("");

  const enviarConfirmacion = () => {
    if (!nombreInvitado.trim() || !asistencia) {
      setError("Completa tu nombre y confirma tu asistencia.");
      return;
    }

    if (asistencia === "Sí asistiré" && !invitados) {
      setError("Indica el número de invitados.");
      return;
    }

    setError("");

    const numeroWhatsApp = "522461022014";

    const mensaje = `💍 *CONFIRMACIÓN DE ASISTENCIA*

Hola, somos invitados de la boda de Citlalli y Miguel.

👤 *Nombre:*
${nombreInvitado.trim()}

💌 *Asistencia:*
${asistencia}

👥 *Número de invitados:*
${asistencia === "Sí asistiré" ? invitados : "0"}

📝 *Mensaje para los novios:*
${mensajeInvitado.trim() || "Sin mensaje"}

¡Gracias!`;

    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(enlaceWhatsApp, "_blank", "noopener,noreferrer");
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

      {/* Rama decorativa superior izquierda */}
      <div
        className="
          pointer-events-none
          absolute
          -left-12
          -top-12
          h-56
          w-56
          rotate-[-18deg]
          opacity-15
          sm:h-72
          sm:w-72
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
          -bottom-12
          -right-12
          h-56
          w-56
          rotate-[162deg]
          opacity-15
          sm:h-72
          sm:w-72
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
          y: 50,
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
        className="relative z-10 mx-auto max-w-3xl"
      >
        {/* Encabezado */}
        <div className="mb-12 text-center">
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
            Confirma tu asistencia
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
            ¡Te esperamos!
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

          <p
            className="
              mx-auto
              mt-7
              max-w-xl
              font-playfair
              text-base
              leading-7
              text-white/80
              sm:text-lg
            "
          >
            Por favor confirma tu asistencia. Nos encantará compartir este día
            tan especial contigo.
          </p>
        </div>

        {/* Tarjeta del formulario */}
        <div
          className="
            relative
            overflow-hidden
            rounded-tl-[3rem]
            rounded-br-[3rem]
            border
            border-white/40
            bg-[#F5F0E6]
            px-6
            py-10
            shadow-[0_25px_70px_rgba(35,40,22,0.35)]
            sm:px-10
            sm:py-12
          "
        >
          {/* Bordes interiores */}
          <div className="pointer-events-none absolute inset-2 border border-[#657047]/20" />

          <div className="pointer-events-none absolute inset-4 border border-[#657047]/10" />

          <div className="relative z-10 space-y-5">
            {/* Nombre */}
            <div>
              <label
                htmlFor="nombreInvitado"
                className="
                  mb-2
                  block
                  font-playfair
                  text-sm
                  font-medium
                  text-[#4F5A35]
                "
              >
                Nombre y apellido
              </label>

              <input
                id="nombreInvitado"
                type="text"
                placeholder="Escribe tu nombre"
                value={nombreInvitado}
                onChange={(e) => {
                  setNombreInvitado(e.target.value);
                  setError("");
                }}
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#657047]/30
                  bg-white/70
                  px-5
                  py-4
                  text-[#25251F]
                  outline-none
                  transition
                  placeholder:text-[#657047]/45
                  focus:border-[#657047]
                  focus:ring-2
                  focus:ring-[#657047]/20
                "
              />
            </div>

            {/* Asistencia */}
            <div>
              <p
                className="
                  mb-3
                  font-playfair
                  text-sm
                  font-medium
                  text-[#4F5A35]
                "
              >
                ¿Podrás acompañarnos?
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => {
                    setAsistencia("Sí asistiré");
                    setError("");
                  }}
                  className={`
                    rounded-xl
                    border
                    px-4
                    py-4
                    font-playfair
                    transition
                    duration-300
                    ${
                      asistencia === "Sí asistiré"
                        ? "border-[#657047] bg-[#657047] text-white shadow-lg"
                        : "border-[#657047]/30 bg-white/70 text-[#4F5A35] hover:border-[#657047] hover:bg-white"
                    }
                  `}
                >
                  Sí asistiré
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setAsistencia("No podré asistir");
                    setInvitados("");
                    setError("");
                  }}
                  className={`
                    rounded-xl
                    border
                    px-4
                    py-4
                    font-playfair
                    transition
                    duration-300
                    ${
                      asistencia === "No podré asistir"
                        ? "border-[#657047] bg-[#657047] text-white shadow-lg"
                        : "border-[#657047]/30 bg-white/70 text-[#4F5A35] hover:border-[#657047] hover:bg-white"
                    }
                  `}
                >
                  No asistiré
                </button>
              </div>
            </div>

            {/* Número de invitados */}
            <AnimatePresence>
              {asistencia === "Sí asistiré" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="overflow-hidden"
                >
                  <label
                    htmlFor="numeroInvitados"
                    className="
                      mb-2
                      block
                      font-playfair
                      text-sm
                      font-medium
                      text-[#4F5A35]
                    "
                  >
                    Número de invitados
                  </label>

                  <input
                    id="numeroInvitados"
                    type="number"
                    min="1"
                    inputMode="numeric"
                    placeholder="Escribe el número de invitados"
                    value={invitados}
                    onChange={(e) => {
                      setInvitados(e.target.value);
                      setError("");
                    }}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[#657047]/30
                      bg-white/70
                      px-5
                      py-4
                      text-[#25251F]
                      outline-none
                      transition
                      placeholder:text-[#657047]/45
                      focus:border-[#657047]
                      focus:ring-2
                      focus:ring-[#657047]/20
                    "
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mensaje */}
            <div>
              <label
                htmlFor="mensajeInvitado"
                className="
                  mb-2
                  block
                  font-playfair
                  text-sm
                  font-medium
                  text-[#4F5A35]
                "
              >
                Mensaje para los novios
              </label>

              <textarea
                id="mensajeInvitado"
                placeholder="Escribe un mensaje especial"
                value={mensajeInvitado}
                onChange={(e) => setMensajeInvitado(e.target.value)}
                rows="4"
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-[#657047]/30
                  bg-white/70
                  px-5
                  py-4
                  text-[#25251F]
                  outline-none
                  transition
                  placeholder:text-[#657047]/45
                  focus:border-[#657047]
                  focus:ring-2
                  focus:ring-[#657047]/20
                "
              />
            </div>

            {/* Mensaje de error */}
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  className="
                    rounded-xl
                    border
                    border-[#657047]/30
                    bg-[#657047]/10
                    px-4
                    py-3
                    text-sm
                    text-[#4F5A35]
                  "
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Botón de WhatsApp */}
            <button
              type="button"
              onClick={enviarConfirmacion}
              className="
                w-full
                rounded-full
                bg-[#657047]
                py-4
                font-playfair
                text-lg
                text-white
                shadow-[0_15px_35px_rgba(79,90,53,0.3)]
                transition
                duration-300
                hover:scale-[1.02]
                hover:bg-[#4F5A35]
                focus:outline-none
                focus:ring-2
                focus:ring-[#657047]/40
                focus:ring-offset-2
              "
            >
              Confirmar por WhatsApp
            </button>

            <p
              className="
                text-center
                font-playfair
                text-xs
                leading-5
                text-[#657047]/65
              "
            >
              Al presionar el botón, se abrirá WhatsApp con tu confirmación
              preparada para enviar.
            </p>
          </div>
        </div>

        {/* Adorno final */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-white/40 sm:w-20" />

          <span className="h-2.5 w-2.5 rotate-45 bg-white/80" />

          <span className="h-px w-12 bg-white/40 sm:w-20" />
        </div>

        <p
          className="
            mt-6
            text-center
            font-cursiveDancing
            text-3xl
            text-white/90
            sm:text-4xl
          "
        >
          Citlalli & Miguel
        </p>
      </motion.div>
    </section>
  );
};

export default Confirmacion;