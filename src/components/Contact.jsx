import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    setAnimationTrigger(isInView);
  }, [isInView]);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" },
    },
  };

  const contacts = [
    {
      id: 1,
      type: 'whatsapp',
      label: 'Conversar pelo WhatsApp',
      value: 'WhatsApp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#c2a18a] group-hover:text-[#a0785a] transition-colors" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.988 15.341c-.278-.139-1.644-.812-1.899-.904-.255-.093-.44-.139-.625.14-.186.278-.719.903-.883 1.088-.163.186-.325.209-.603.07-.278-.14-1.175-.433-2.238-1.38-.828-.735-1.387-1.64-1.55-1.918-.163-.278-.017-.428.123-.567.127-.126.278-.325.418-.488.14-.163.186-.28.28-.465.093-.186.047-.35-.023-.488-.07-.14-.625-1.504-.857-2.057-.226-.542-.457-.468-.625-.468-.163-.014-.35-.014-.538-.014-.186 0-.488.07-.744.35-.255.28-.977.953-.977 2.325 0 1.372 1 2.696 1.138 2.883.14.186 1.957 3.01 4.74 4.217.663.286 1.18.456 1.583.582.664.21 1.27.18 1.75.11.533-.08 1.644-.67 1.875-1.316.23-.645.23-1.198.163-1.316-.07-.116-.255-.186-.532-.325z" />
          <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.657.433 3.283 1.257 4.71L2 22l5.352-1.242A9.96 9.96 0 0 0 12.004 22C17.522 22 22 17.514 22 12.004 22 6.486 17.522 2 12.004 2zm0 18.198c-1.518 0-3.007-.42-4.29-1.215l-.307-.184-3.18.738.694-3.1-.2-.318a8.16 8.16 0 0 1-1.23-4.115c0-4.51 3.673-8.183 8.183-8.183 4.51 0 8.183 3.673 8.183 8.183 0 4.51-3.673 8.183-8.183 8.183z" />
        </svg>
      ),
      link: 'https://wa.me/+5511999999999?text=Olá,%20gostaria%20de%20mais%20informações'
    },
    {
      id: 2,
      type: 'telefone',
      label: 'Ligar agora',
      value: '(11) 999999999',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.658l1.2 3.2a1 1 0 01-.26 1.1l-2.3 2.3a16.001 16.001 0 006.586 6.586l2.3-2.3a1 1 0 011.1-.26l3.2 1.2a1 1 0 01.658.94V19a2 2 0 01-2 2h-1c-9.941 0-18-8.059-18-18V5z" />
        </svg>
      ),
      link: 'tel:+5511999999999'
    },
    {
      id: 3,
      type: 'email',
      label: 'Enviar e-mail',
      value: 'E-mail',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
      link: 'mailto:contato@advocacia.com'
    }
  ];

  return (
    <section
      id="contato"
      className="relative py-22 bg-black/95 scroll-mt-14"
      aria-label="Seção de Contato"
      ref={ref}
    >
      <motion.div
        className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 text-center text-[#EFDDCF]"
        variants={containerVariants}
        initial="hidden"
        animate={animationTrigger ? "visible" : "hidden"}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-light mb-10 lg:mb-12 text-[#664937]"
          style={{ textShadow: "1px 1px 1px #48404085" }}
        >
          Contato
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-left">
          <div className="grid grid-cols-1 gap-6">
            {contacts.map((contact) => (
              <motion.a
                key={contact.id}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group flex items-center gap-4 p-5 rounded-xl transition-all hover:bg-white/5 hover:shadow-lg border border-white/10"
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                aria-label={contact.label}
              >
                <div className="text-[#c2a18a] transition-colors group-hover:text-[#a0785a]">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-lg font-medium transition-colors group-hover:text-[#c2a18a]">
                    {contact.value}
                  </p>
                  <p className="text-sm text-[#EFDDCF]">{contact.label}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="w-full h-[280px] sm:h-[320px] lg:h-[360px] rounded-xl overflow-hidden border border-white/10 shadow-md"
          >
            <iframe
              title=""
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509557!2d-122.41941552383469!3d37.774929778802735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c2cb36e57d6fd0a4!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen-US!2sus!4v1719253599337!5m2!1sen-US!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-10 text-[#EFDDCF] max-w-2xl mx-auto text-sm md:text-base text-center"
        >
          <p>Atendimento: Seg-Sex • 08h às 18h</p>
          <p className="mt-1">Resposta em até 24 horas úteis</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;