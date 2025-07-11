import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const PracticeAreas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: true,
    margin: "-20% 0px -20% 0px",
  });
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    if (isInView) setAnimationTrigger(true);
  }, [isInView]);

  const areas = [
    {
      title: "Direito Cível",
      description:
        "Atuação ampla em questões contratuais, responsabilidade civil, direitos do consumidor e propriedade.",
      color: "from-[#c2a18a] to-[#a0785a]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75
            M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47
            m13.5 0c1.01.143 2.01.317 3 .52
            m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202
            a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352
            c-.483-.174-.711-.703-.59-1.202L18.75 4.971Z
            m-16.5.52c.99-.203 1.99-.377 3-.52
            m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202
            a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352
            c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
          />
        </svg>
      ),
    },
    {
      title: "Direito de Família",
      description:
        "Divórcio, guarda de menores, pensão alimentícia, inventário e planejamento sucessório.",
      color: "from-[#9d8270] to-[#7a6151]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479
            a3 3 0 00-4.682-2.72
            m.94 3.198.001.031c0 .225-.012.447-.037.666
            A11.944 11.944 0 0112 21
            c-2.17 0-4.207-.576-5.963-1.584
            A6.062 6.062 0 016 18.719
            m12 0a5.971 5.971 0 00-.941-3.197
            m0 0A5.995 5.995 0 0012 12.75
            a5.995 5.995 0 00-5.058 2.772
            m0 0a3 3 0 00-4.681 2.72
            a8.986 8.986 0 003.74.477
            m.94-3.197a5.971 5.971 0 00-.94 3.197
            M15 6.75a3 3 0 11-6 0 3 3 0 016 0Zm6 3
            a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0Zm-13.5 0
            a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0Z"
          />
        </svg>
      ),
    },
    {
      title: "Direito Criminal",
      description:
        "Defesa em todas as etapas processuais, habeas corpus, recursos e assessoria jurídica criminal.",
      color: "from-[#78604f] to-[#5d4a3c]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3
            m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5
            m-3.15 0 .075 5.925m3.075.75V4.575
            m0 0a1.575 1.575 0 013.15 0V15
            M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175
            a6.75 6.75 0 006.75 6.75h2.018
            a5.25 5.25 0 003.712-1.538l1.732-1.732
            a5.25 5.25 0 001.538-3.712l.003-2.024
            a.668.668 0 01.198-.471
            a1.575 1.575 0 10-2.228-2.228
            a3.818 3.818 0 00-1.12 2.687
            M6.9 7.575V12
            m6.27 4.318A4.49 4.49 0 0116.35 15
            m.002 0h-.002"
          />
        </svg>
      ),
    },
    {
      title: "Direito Trabalhista",
      description:
        "Ações trabalhistas, negociações coletivas, orientação empresarial e defesa em processos.",
      color: "from-[#5d4a3c] to-[#44352a]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18
            -2.087.277-4.216.42-6.378.42
            s-4.291-.143-6.378-.42
            c-1.085-.144-1.872-1.086-1.872-2.18v-4.25
            m16.5 0a2.18 2.18 0 00.75-1.661V8.706
            c0-1.081-.768-2.015-1.837-2.175
            a48.114 48.114 0 00-3.413-.387
            m4.5 8.006c-.194.165-.42.295-.673.38
            A23.978 23.978 0 0112 15.75
            c-2.648 0-5.195-.429-7.577-1.22
            a2.016 2.016 0 01-.673-.38
            m0 0A2.18 2.18 0 013 12.489V8.706
            c0-1.081.768-2.015 1.837-2.175
            a48.111 48.111 0 013.413-.387
            m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3
            a2.25 2.25 0 00-2.25 2.25v.894
            m7.5 0a48.667 48.667 0 00-7.5 0
            M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>
      ),
    },
  ];

  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="areas"
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#1a1a1a] to-[#4d4d4d] scroll-mt-14"
      aria-label="Áreas de Atuação"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={animationTrigger ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Serviços Jurídicos</h2>
          <p className="text-lg text-[#EFDDCF] max-w-2xl mx-auto">
            Consultoria e advocacia especializada, oferecendo segurança e orientação em cada decisão.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={sectionVariants}
          initial="hidden"
          animate={animationTrigger ? "visible" : "hidden"}
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-[#00000031] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
              />
              <div className="p-8 h-full">
                <div className={`w-14 h-14 mb-6 rounded-lg bg-gradient-to-br ${area.color} flex items-center justify-center`}>
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#B17A5D] mb-4">{area.title}</h3>
                <p className="text-[#EFDDCF] leading-relaxed">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

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

export default PracticeAreas;
