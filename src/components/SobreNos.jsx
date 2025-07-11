// --- COMPONENTE SOBRE NÓS ---
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import about from "../assets/sobrenos.webp";

const SobreNos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: false,
    margin: "-20% 0px 0% 0px",
  });
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    setAnimationTrigger(isInView);
  }, [isInView]);

  const variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="sobre"
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#1a1a1a] to-[#4d4d4d] overflow-x-hidden scroll-mt-14"
      aria-label="Sobre Nós"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            className="space-y-8"
            initial="initial"
            animate={animationTrigger ? "animate" : "initial"}
            variants={variants}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Transformando Desafios em Soluções Jurídicas
            </h2>
            <p className="text-lg text-[#EFDDCF] text-justify leading-relaxed">
              Com a solidez de gerações e a visão de futuro, oferecemos soluções jurídicas que transcendem o habitual. Cada desafio é uma oportunidade de aplicar nossa expertise consolidada com a atenção personalizada que só uma empresa familiar pode dar.
            </p>
            <motion.div variants={variants} transition={{ duration: 0.6, delay: 0.6 }}>
              <button className="bg-gradient-to-r from-[#664937] to-[#78604f] text-white px-8 py-3.5 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-300 shadow-xl">
                Nossa Jornada
              </button>
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 30 }}
            animate={animationTrigger ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#a0785a33] to-[#78604f33] rounded-3xl transform group-hover:rotate-1 transition-transform duration-500" />
            <div className="relative overflow-hidden rounded-3xl border-2 border-[#ffffff08] shadow-2xl">
              <img
                src={about}
                alt="Interior moderno do escritório"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a33] to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Divisor */}
        <motion.div
          className="mt-20 border-t border-[#ffffff10]"
          initial={{ scaleX: 0 }}
          animate={animationTrigger ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
      </div>
    </section>
  );
};

export default SobreNos;
