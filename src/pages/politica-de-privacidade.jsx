import { useEffect } from "react";
import { Link } from "react-router-dom";

const PoliticaDePrivacidade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#1a1a1a] to-[#4d4d4d] text-[#EFDDCF] scroll-mt-14"
      aria-label="Política de Privacidade"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#B17A5D] mb-6">
            Política de Privacidade
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Esta página descreve como coletamos, usamos e protegemos suas informações pessoais ao utilizar nosso site. Ao continuar navegando, você concorda com os termos descritos nesta política.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              Informações que coletamos
            </h2>
            <p className="text-lg leading-relaxed">
              Coletamos informações pessoais que você nos fornece diretamente, como nome, e-mail e telefone, bem como dados coletados automaticamente, como endereço IP e comportamento de navegação.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              Como utilizamos suas informações?
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
              <li>
                <strong>Para fornecer serviços:</strong> Usamos suas informações para responder a solicitações e oferecer suporte.
              </li>
              <li>
                <strong>Para melhorar nosso site:</strong> Analisamos dados para entender como os usuários interagem com nosso site.
              </li>
              <li>
                <strong>Para comunicação:</strong> Enviamos atualizações e informações relevantes, caso você tenha consentido.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              Compartilhamento de informações
            </h2>
            <p className="text-lg leading-relaxed">
              Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir a lei ou proteger nossos direitos.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              Seus direitos
            </h2>
            <p className="text-lg leading-relaxed">
              Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Entre em contato conosco para exercer esses direitos.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              Alterações nesta política
            </h2>
            <p className="text-lg leading-relaxed">
              Podemos atualizar esta política de privacidade periodicamente. Recomendamos que você revise esta página regularmente para se manter informado.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              Contato
            </h2>
            <p className="text-lg leading-relaxed">
              Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco pelo e-mail{" "}
              <a
                href="mailto:consultivo@silvaconsultoriaadv.com.br"
                className="underline text-[#B17A5D] hover:text-[#a0785a] transition-colors"
              >
                consultivo@silvaconsultoriaadv.com.br
              </a>
              .
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="inline-block mt-16 px-6 py-3 bg-[#B17A5D] text-white font-semibold rounded hover:bg-[#a0785a] transition"
        >
          Voltar ao site
        </Link>
      </div>
    </section>
  );
};

export default PoliticaDePrivacidade;
