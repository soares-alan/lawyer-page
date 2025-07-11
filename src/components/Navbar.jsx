import { useState, useEffect, useMemo } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/hero.webp";
import PropTypes from "prop-types";

const Navbar = ({ onNavigate }) => {
  Navbar.propTypes = {
    onNavigate: PropTypes.func.isRequired,
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [activeItem, setActiveItem] = useState(""); // Estado para rastrear o item ativo
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handler = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const navItems = useMemo(
    () => [
      { name: "Início", href: "#home" },
      { name: "Áreas de Atuação", href: "#areas" },
      { name: "Sobre Nós", href: "#sobre" },
      { name: "Contato", href: "#contato" },
    ],
    []
  );

  const scrollToSection = (hash) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (href) => {
    setActiveItem(href); // Define o item ativo
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(href), 100);
    } else {
      scrollToSection(href);
    }
    setIsMenuOpen(false);
    onNavigate();
  };

  const logoVariants = {
    hover: { scale: 1.03 },
    tap: { scale: 0.97 },
  };

  const menuItemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: { opacity: 0.7 },
  };

  const underlineVariants = {
    hover: { scaleX: 1, originX: 0 },
    rest: { scaleX: 0, originX: 0 },
  };

  return (
    <nav className="bg-white/30 backdrop-blur-md shadow-lg fixed w-full z-10 py-1" aria-label="Navegação principal">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed top-2 left-2 bg-[#664937] text-white px-4 py-2 rounded"
      >
        Pular para conteúdo principal
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div className="flex-shrink-0 flex items-center" whileHover="hover" whileTap="tap" variants={logoVariants}>
            <img
              src={logo}
              alt="SILVA Advocacia e Consultoria Jurídica"
              className="h-14 w-auto md:h-16 transition-transform duration-300 hover:scale-105"
              style={{ maxWidth: "200px", minWidth: "140px", objectFit: "contain" }}
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <motion.div key={item.name} className="relative" initial="rest" whileHover="hover" animate="rest">
                <button
                  onClick={() => handleClick(item.href)}
                  className={`text-[#FCFCFC] hover:text-[#030303] font-bold cursor-pointer font-montserrat relative group text-[19px] focus:outline-none ${
                    activeItem === item.href
                      ? "after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-[#FFBF00]"
                      : ""
                  }`}
                >
                  <motion.span className="relative block pb-1" variants={menuItemVariants}>
                    {item.name}
                    <motion.span
                      className="absolute inset-x-0 bottom-0 h-[2px] bg-[#FFBF00]"
                      variants={underlineVariants}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Botão Mobile */}
          <motion.div className="lg:hidden flex items-center" whileTap={{ scale: isReducedMotion ? 1 : 0.95 }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#FCFCFC] hover:text-[#664937] focus:outline-none p-2 focus:ring-2 focus:ring-[#664937] focus:ring-opacity-50 rounded"
              aria-label="Menu principal"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
                transition={isReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 300 }}
              >
                {isMenuOpen ? <FiX className="h-8 w-8" /> : <FiMenu className="h-8 w-8" />}
              </motion.div>
            </button>
          </motion.div>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{ opacity: 1, maxHeight: 1000, transition: { duration: isReducedMotion ? 0 : 0.3, ease: "easeInOut" } }}
              exit={{ opacity: 0, maxHeight: 0, transition: { duration: isReducedMotion ? 0 : 0.2, ease: "easeInOut" } }}
              role="navigation"
              aria-label="Menu móvel"
              id="mobile-menu"
            >
              <motion.div initial={{ y: isReducedMotion ? 0 : -20 }} animate={{ y: 0 }} exit={{ y: isReducedMotion ? 0 : -20 }}>
                <div className="py-4 space-y-3 mb-10 flex flex-col items-center w-4/5 mx-auto">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleClick(item.href)}
                      className={`block text-black-900 font-medium text-3xl px-0 py-3 hover:bg-gray-100 transition-colors duration-200 border-b border-gray-200 w-full text-center focus:outline-none ${
                        activeItem === item.href ? "text-[#FFBF00]" : ""
                      }`}
                      initial={{ opacity: 0, x: isReducedMotion ? 0 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: isReducedMotion ? 0 : -20 }}
                      transition={{ delay: isReducedMotion ? 0 : index * 0.05 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;