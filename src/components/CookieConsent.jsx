import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CookieConsent({ isVisible, setIsVisible }) {
  const acceptButtonRef = useRef(null);
  const modalRef = useRef(null);

  // Foco no modal quando ele é exibido
  useEffect(() => {
    if (isVisible && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isVisible]);

  // Fechar o modal ao pressionar "Escape"
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, setIsVisible]);

  // Removido o código que fecha o modal ao clicar fora dele

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-heading"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-0 bottom-0 z-50 bg-white shadow-lg border-t border-gray-200 w-full"
      tabIndex="-1"
      ref={modalRef}
    >
      <section className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            id="cookie-consent-description"
            className="text-gray-700 text-sm md:text-base"
            style={{ textShadow: "none" }}
          >
            Este site usa{" "}
            <Link
              to="/politica-de-cookies"
              className="underline font-medium hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              aria-label="Leia nossa política de cookies"
            >
              cookies
            </Link>{" "}
            para melhorar sua experiência. Ao continuar navegando, você
            concorda com o uso dos{" "}
            <Link
              to="/politica-de-cookies"
              className="underline font-medium hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              aria-label="Leia nossa política de cookies"
            >
              cookies
            </Link>
            ,{" "}
            <Link
              to="/termos-de-uso"
              className="underline font-medium hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              aria-label="Leia nossos termos de uso"
            >
              termos de uso
            </Link>{" "}
            e{" "}
            <Link
              to="/politica-de-privacidade"
              className="underline font-medium hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              aria-label="Leia nossa política de privacidade"
            >
              política de privacidade
            </Link>
            .
          </p>
          <div className="flex gap-3">
            <button
              ref={acceptButtonRef}
              onClick={handleAccept}
              className="px-6 py-2 rounded-md text-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-700 cursor-pointer"
              style={{ backgroundColor: "#4b2e1f" }}
            >
              Concordo
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

CookieConsent.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};