import { useEffect } from "react";
import { Link } from "react-router-dom";

const TermosDeUso = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#1a1a1a] to-[#4d4d4d] text-[#EFDDCF] scroll-mt-14"
      aria-label="Termos de Uso"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#B17A5D] mb-6">
            Termos de Uso
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Estes Termos de Uso descrevem as regras e condições para utilização do nosso site. Ao acessar ou usar nosso site, você concorda com estes termos.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              Uso do site
            </h2>
            <p className="text-lg leading-relaxed">
              Você concorda em usar nosso site apenas para fins legais e de acordo com os termos aqui descritos. É proibido o uso do site para atividades ilícitas ou que violem direitos de terceiros.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              Propriedade intelectual
            </h2>
            <p className="text-lg leading-relaxed">
              Todo o conteúdo do site, incluindo textos, imagens, gráficos e logotipos, é protegido por direitos autorais e outras leis de propriedade intelectual. É proibida a reprodução, distribuição ou modificação sem autorização prévia.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              Limitação de responsabilidade
            </h2>
            <p className="text-lg leading-relaxed">
              Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso ou da incapacidade de uso do site, incluindo falhas técnicas ou indisponibilidade temporária.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              Modificações nos Termos
            </h2>
            <p className="text-lg leading-relaxed">
              Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. Recomendamos que você revise esta página regularmente para se manter informado sobre as atualizações.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              Contato
            </h2>
            <p className="text-lg leading-relaxed">
              Caso tenha dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail{" "}
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

export default TermosDeUso;
