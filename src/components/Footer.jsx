import { motion, useReducedMotion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();

  const navigationLinks = [
    { name: "Início", href: "#hero" },
    { name: "Áreas de Atuação", href: "#areas" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Contato", href: "#contato" },
    { name: "Termos de Uso", href: "#termos-de-uso" },
    { name: "Política de Privacidade", href: "#politica-de-privacidade" },
  ];

  const socialLinks = [
    { icon: FiInstagram, name: "Instagram", url: "" },
    { icon: FiFacebook, name: "Facebook", url: "" },
    { icon: FiLinkedin, name: "LinkedIn", url: "" },
  ];

  const contactInfo = [
    {
      icon: FiMapPin,
      text: (
        <>
          1234 Elm Street<br />
          Suite 567<br />
          Springfield, IL, USA
        </>
      ),
    },
    {
      icon: FiPhone,
      text: "(555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: FaWhatsapp,
      text: "WhatsApp: (555) 123-4567",
      href: "https://wa.me/15551234567",
    },
    {
      icon: FiMail,
      text: "contact@company.com",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="bg-white/80 backdrop-blur-sm border-t border-gray-100 shadow-sm font-montserrat"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-6 lg:px-12 py-10 md:py-12">
        {/* Layout Tablet */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col space-y-12">
            {/* Logo e redes sociais */}
            <div className="flex justify-between items-start">
              <img
                src={logo}
                alt="SILVA Advocacia"
                className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="flex gap-5 mt-1">
                {socialLinks.map(({ icon: Icon, name, url }, index) => (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Siga-nos no ${name}`}
                    className="text-gray-500 hover:text-[#664937] transition-colors duration-200 text-xl"
                    whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.05 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navegação e Contato */}
            <div className="grid grid-cols-2 gap-12">
              {/* Navegação */}
              <div className="space-y-5">
                <h3 className="text-lg font-medium text-[#1E293B] tracking-tight mb-3">
                  Navegação
                </h3>
                <nav className="flex flex-col space-y-3">
                  {navigationLinks.map(({ name, href }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      className="text-gray-600 hover:text-[#664937] transition-colors duration-200 text-[15px]"
                      whileHover={shouldReduceMotion ? undefined : { x: 3 }}
                    >
                      {name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Contato */}
              <div className="space-y-5">
                <h3 className="text-lg font-medium text-[#1E293B] tracking-tight mb-3">
                  Contato
                </h3>
                <div className="space-y-3">
                  {contactInfo.map(({ icon: Icon, text, href }, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 text-gray-600 hover:text-[#664937] transition-colors duration-200 group"
                      whileHover={shouldReduceMotion ? undefined : { x: 3 }}
                    >
                      <Icon className="text-[#664937] text-lg mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      {href ? (
                        <a href={href} className="text-[15px] leading-snug">
                          {text}
                        </a>
                      ) : (
                        <span className="text-[15px] leading-snug">
                          {text}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Mobile e Desktop */}
        <div className="block md:hidden lg:grid grid-cols-1 md:grid-cols-7 gap-8 md:gap-10">
          <div className="md:col-span-3 space-y-6 mb-8">
            <img
              src={logo}
              alt="SILVA Advocacia"
              className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <p className="text-gray-600 text-base leading-relaxed max-w-[300px]">
              Advocacia especializada com excelência humana e técnica.
            </p>
            <div className="flex gap-5 mb-6">
              {socialLinks.map(({ icon: Icon, name, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Siga-nos no ${name}`}
                  className="text-gray-500 hover:text-[#664937] transition-colors duration-200 text-xl"
                  whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.05 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navegação e Contato */}
          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            <div className="space-y-4 mt-2">
              <h3 className="text-lg font-medium text-[#1E293B] tracking-tight mb-3">
                Navegação
              </h3>
              <nav className="flex flex-col space-y-2.5">
                {navigationLinks.map(({ name, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    className="text-gray-600 hover:text-[#664937] transition-colors duration-200 text-[15px]"
                    whileHover={shouldReduceMotion ? undefined : { x: 3 }}
                  >
                    {name}
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="space-y-4 mt-2">
              <h3 className="text-lg font-medium text-[#1E293B] tracking-tight mb-3">
                Contato
              </h3>
              <div className="space-y-3">
                {contactInfo.map(({ icon: Icon, text, href }, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 text-gray-600 hover:text-[#664937] transition-colors duration-200 group"
                    whileHover={shouldReduceMotion ? undefined : { x: 3 }}
                  >
                    <Icon className="text-[#664937] text-lg mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    {href ? (
                      <a href={href} className="text-[15px] leading-snug break-words hyphens-auto">
                        {text}
                      </a>
                    ) : (
                      <span className="text-[15px] leading-snug break-words hyphens-auto">
                        {text}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Direitos */}
        <div className="border-t border-gray-100 mt-10 md:mt-12 pt-6 text-center">
          <p className="text-gray-500 text-[13px]">
            © {new Date().getFullYear()} SILVA Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
