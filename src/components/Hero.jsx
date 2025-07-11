import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import hero from "../assets/hero.webp";
import backgroundVideo from "../assets/background_converted.mp4";
import fallbackImage from "../assets/fallback-bg.webp"; // Fallback image for mobile devices

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const videoRef = useRef(null);
  const [videoStarted, setVideoStarted] = useState(false);

  // Animação entra apenas quando em tela
  useEffect(() => {
    setAnimationTrigger(isInView);
  }, [isInView]);

  // Garante que a página comece no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Otimiza carregamento do vídeo
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || videoStarted) return;

    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
      setTimeout(() => {
        videoElement
          .play()
          .then(() => setVideoStarted(true))
          .catch((error) =>
            console.warn(
              "Falha ao reproduzir o vídeo automaticamente:",
              error.message
            )
          );
      }, 1000); // Aguarda o conteúdo principal aparecer primeiro
    } else {
      const tryPlayVideo = () => {
        videoElement
          .play()
          .then(() => {
            setVideoStarted(true);
            window.removeEventListener("scroll", tryPlayVideo);
            window.removeEventListener("touchstart", tryPlayVideo);
          })
          .catch((error) =>
            console.warn(
              "Falha ao reproduzir o vídeo após interação:",
              error.message
            )
          );
      };

      window.addEventListener("scroll", tryPlayVideo, { once: true });
      window.addEventListener("touchstart", tryPlayVideo, { once: true });

      return () => {
        window.removeEventListener("scroll", tryPlayVideo);
        window.removeEventListener("touchstart", tryPlayVideo);
      };
    }
  }, [videoStarted]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.3,
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      aria-label="Hero Section"
      ref={ref}
    >
      {/* Fallback Image para Mobile */}
      {!videoStarted && (
        <img
          src={fallbackImage}
          alt="Plano de fundo fallback"
          className="absolute inset-0 w-full h-full object-cover z-0 sm:hidden opacity-70"
        />
      )}

      {/* Background Video – preload desativado para performance */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover z-0 opacity-70 ${
          videoStarted ? "" : "hidden sm:block"
        }`}
        src={backgroundVideo}
        muted
        playsInline
        preload="none"
        title="Background Video"
      />

      {/* Gradiente apenas quando visível (melhora SI) */}
      {animationTrigger && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"
          aria-hidden="true"
        />
      )}

      {/* Conteúdo principal */}
      <motion.div
        className="relative max-w-4xl px-6 sm:px-8 lg:px-10 w-full text-center text-white flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate={animationTrigger ? "visible" : "hidden"}
      >
        {/* Imagem principal – eager melhora FCP e LCP */}
        <motion.img
          src={hero}
          alt="Banner Silva Advocacia"
          variants={textVariants}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-6 lg:mb-12"
          loading="eager"
        />

        <motion.p
          variants={textVariants}
          className="text-lg md:text-xl text-[#EFDDCF] max-w-3xl mx-auto mb-8 lg:mb-12"
        >
          Assessoria jurídica personalizada, fundamentada em ética e
          transparência.
        </motion.p>

        <motion.div variants={textVariants} className="flex justify-center">
          <motion.a
            href="#contato"
            className="inline-block bg-gradient-to-r from-[#664937] to-[#78604f] text-white px-12 py-4 rounded-full
                     text-lg font-semibold tracking-wider shadow-lg hover:opacity-90 transition-transform transform-gpu hover:scale-105"
            whileHover={shouldReduceMotion ? {} : { y: -3 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            aria-label="Agendar Consultoria"
          >
            Agendar Consultoria
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Seta animada */}
      <div className="absolute bottom-24 sm:bottom-12 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="text-[#c2a18a] drop-shadow-lg"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
