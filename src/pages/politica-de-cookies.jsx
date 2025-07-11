import { Link } from 'react-router-dom';

const PoliticaDeCookies = () => {
  return (
    <section
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#1a1a1a] to-[#4d4d4d] text-[#EFDDCF] scroll-mt-14"
      aria-label="Política de Cookies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#B17A5D] mb-6">
            Política de Cookies
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Esta página explica como utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com o uso de cookies conforme descrito abaixo.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              O que são cookies?
            </h2>
            <p className="text-lg leading-relaxed">
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles ajudam a melhorar a funcionalidade do site, personalizar sua experiência e coletar informações analíticas.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              Como utilizamos cookies?
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
              <li>
                <strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site, como navegação e acesso a áreas seguras.
              </li>
              <li>
                <strong>Cookies de Desempenho:</strong> Coletam informações sobre como os visitantes utilizam o site, ajudando-nos a melhorar sua funcionalidade.
              </li>
              <li>
                <strong>Cookies de Funcionalidade:</strong> Permitem que o site lembre suas preferências, como idioma ou região.
              </li>
              <li>
                <strong>Cookies de Publicidade:</strong> Usados para exibir anúncios relevantes com base nos seus interesses.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              Como gerenciar cookies?
            </h2>
            <p className="text-lg leading-relaxed">
              Você pode gerenciar ou desativar cookies diretamente nas configurações do seu navegador. No entanto, desativar cookies essenciais pode afetar a funcionalidade do site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              Alterações nesta política
            </h2>
            <p className="text-lg leading-relaxed">
              Podemos atualizar esta política de cookies periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como utilizamos cookies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#B17A5D] mb-4">
              Contato
            </h2>
            <p className="text-lg leading-relaxed">
              Se você tiver dúvidas sobre esta política de cookies, entre em contato conosco pelo e-mail{" "}
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

export default PoliticaDeCookies;