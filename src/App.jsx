import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatsAppFloatButton from "./components/WhatsappFloatButton";

const AreasAtuacao = React.lazy(() => import("./components/AreasAtuacao"));
const SobreNos = React.lazy(() => import("./components/SobreNos"));
const Contact = React.lazy(() => import("./components/Contact"));
const Footer = React.lazy(() => import("./components/Footer"));
const CookieConsent = React.lazy(() => import("./components/CookieConsent"));

// Páginas
const PoliticaDeCookies = React.lazy(() => import("./pages/politica-de-cookies"));
const PoliticaDePrivacidade = React.lazy(() => import("./pages/politica-de-privacidade"));
const TermosDeUso = React.lazy(() => import("./pages/termos-de-uso"));

function App() {
  const [isVisible, setIsVisible] = useState(() => {
    return localStorage.getItem("cookieConsent") !== "true";
  });

  return (
    <div>
      <Navbar />
      <WhatsAppFloatButton phoneNumber="" />
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AreasAtuacao />
                <SobreNos />
                <Contact />
                <Footer />
                <CookieConsent isVisible={isVisible} setIsVisible={setIsVisible} />
              </>
            }
          />
          <Route path="/politica-de-cookies" element={<PoliticaDeCookies />} />
          <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
           <Route path="/termos-de-uso" element={<TermosDeUso />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
