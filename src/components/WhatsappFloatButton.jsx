import { FaWhatsapp } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const WhatsAppFloatButton = ({
  phoneNumber = '5511999999999',
  message,
  notificationCount,
  animation = true,
  className = '',
  outline = 'dynamic'
}) => {
  const formattedMessage = encodeURIComponent(message);
  
  return (
    <motion.div 
      className={`fixed bottom-4 right-4 z-[9999] ${className}`}
      initial={false}
      animate={animation ? { scale: [1, 1.05, 1] } : {}}
      transition={animation ? { 
        duration: 2, 
        repeat: Infinity,
        ease: "easeInOut"
      } : {}}
    >
      <motion.a
        href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${formattedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          flex items-center justify-center
          w-16 h-16 md:w-18 md:h-18
          rounded-full 
          bg-gradient-to-br from-[#25D366] to-[#1EBEA5]
          hover:bg-gradient-to-br hover:from-[#1EBEA5] hover:to-[#128C7E]
          shadow-lg
          dark:shadow-neutral-600/30
          relative
          ring-2
          ${outline === 'dynamic' ? 
            'ring-white/50 dark:ring-neutral-900/30' : 
            outline === 'always' ? 'ring-neutral-100/50' : ''}
        `}
        aria-label="Chat no WhatsApp"
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.span
          animate={animation ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaWhatsapp 
            className={`
              text-white text-3xl md:text-4xl
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]
              contrast-more:drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]
            `}
          />
        </motion.span>
        
        {notificationCount > 0 && (
          <motion.span
            className="
              absolute -top-2 -right-2
              bg-red-500 text-white
              rounded-full w-7 h-7
              flex items-center justify-center
              text-sm font-bold
              ring-2 ring-white/50 dark:ring-neutral-900/30
              shadow-sm
            "
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              y: [0, -3, 0],
              transition: { 
                y: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }
            }}
          >
            {notificationCount}
          </motion.span>
        )}
      </motion.a>
    </motion.div>
  );
};

WhatsAppFloatButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  message: PropTypes.string,
  notificationCount: PropTypes.number,
  animation: PropTypes.bool,
  className: PropTypes.string,
  outline: PropTypes.oneOf(['dynamic', 'none', 'always'])
};

WhatsAppFloatButton.defaultProps = {
  message: 'Olá, gostaria de obter informações sobre os serviços jurídicos do seu escritório.',
  notificationCount: 0,
  animation: true,
  outline: 'dynamic'
};

export default WhatsAppFloatButton;