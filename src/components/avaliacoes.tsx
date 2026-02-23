import { motion, type Variants } from "framer-motion";

const diferenciaisData = [
  {
    titulo: "Velocidade da Luz",
    descricao:
      "Velocidades de fibra óptica de até 10 Gbps com upload e download.",
    icone: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    titulo: "Seguro e Confiável",
    descricao: "Garantia de disponibilidade com segurança de rede de nível empresarial.",
    icone: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    titulo: "Roteador Wi-Fi Grátis",
    descricao:
      "Roteador com a tecnologia mais recente incluso em todos os planos, sem custo adicional.",
    icone: (
      <svg 
      className="w-6 h-6" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12.5a10 10 0 0 1 14 0" />
      <path d="M8.5 16a5 5 0 0 1 7 0" />
      <path d="M2 9a15 15 0 0 1 20 0" />
      <path d="M12 20h.01" />
    </svg>
    ),
  },
  {
    titulo: "Suporte Especializado 24/7",
    descricao: "Pessoas reais, soluções reais. Disponíveis a qualquer momento que você precisar de ajuda.",
    icone: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    titulo: "Liberdade",
    descricao: "Fique pelo tempo que desejar. Com contratos confiáveis, cancele a qualquer momento.",
    icone: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    titulo: "Dados Ilimitados",
    descricao: "Sem limites de dados, sem redução de velocidade. Use o quanto precisar.",
    icone: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m2 0h4m-4 0a1 1 0 00-1 1v1a1 1 0 001 1h4a1 1 0 001-1V5a1 1 0 00-1-1m-4 0V3a1 1 0 011-1h2a1 1 0 011 1v1M9 16l2 2 4-4"
        />
      </svg>
    ),
  },
];

export function Avaliacoes() {
    const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay, 
        duration: 0.8, 
        ease: "easeOut" as const 
      }
    })
  };
  return (
    <section 
    id="avaliacoes"
    className="relative w-full py-20 px-8 md:px-40 lg:px-80 bg-gray-900 overflow-x-clip">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
        custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        className="text-center mb-16">
          <h2 className="text-[#f0f0f0] text-6xl md:text-5xl font-bold mb-4">
            Por que escolher {}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-linear-to-r from-[#22c55e]/30 to-purple-800/30 blur-3xl rounded-full z-0"></span>
              <span className="relative z-10 bg-clip-text text-transparent bg-linear-to-r from-[#22c55e] to-purple-800">
                SuperNet?
              </span>
            </span>
          </h2>
          <p className="text-[#f0f0f0] text-xl">
            Nossos diferenciais que garantem a melhor experiência para você.
          </p>
        </motion.div>

        <motion.div 
        custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciaisData.map((item, index) => (
            <div
              key={index}
              className="group bg-[#1e2336] border border-gray-700 hover:border-[#22c55e] hover:-translate-y-2 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-b from-purple-900 to-purple-800 flex items-center justify-center mb-6 text-2xl text-[#f0f0f0] transition-transform duration-300 group-hover:scale-110">
                {item.icone}
              </div>

              <h3 className="text-[#f0f0f0] font-bold text-xl mb-3">
                {item.titulo}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.descricao}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
