import { motion, type Variants } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const planosData = [
  {
    nome: "Start",
    velocidade: "300 Mbps",
    preco: "89,90",
    descricao: "Perfeito para navegação básica e redes sociais.",
    corTema: "blue-500",
    icone: "⚡",
    beneficios: [
      "Download até 300 Mbps",
      "Upload de 150 Mbps",
      "Instalação Grátis",
    ],
  },
  {
    nome: "Home",
    velocidade: "500 Mbps",
    preco: "99,90",
    descricao: "Ideal para streaming em 4K e trabalho remoto.",
    corTema: "green-500",
    icone: "🏠",
    beneficios: [
      "Download até 500 Mbps",
      "Wi-Fi Dual Band",
      "Suporte Prioritário",
    ],
  },
  {
    nome: "Gamer",
    velocidade: "700 Mbps",
    preco: "129,90",
    descricao: "Performance máxima para jogos online e baixa latência.",
    corTema: "purple-600",
    icone: "🎮",
    beneficios: [
      "Download até 700 Mbps",
      "Latência Ultra Baixa",
      "Roteador Gamer Incluído",
      "IP Fixo disponível",
    ],
  },
  {
    nome: "Turbo",
    velocidade: "850 Mbps",
    preco: "149,90",
    descricao: "Para famílias grandes com muitos dispositivos conectados.",
    corTema: "orange-500",
    icone: "🚀",
    beneficios: [
      "Download até 850 Mbps",
      "Cobertura Wi-Fi Estendida",
      "Suporte 24/7",
    ],
  },
  {
    nome: "Ultra",
    velocidade: "1 Gbps",
    preco: "199,90",
    descricao: "O máximo da tecnologia para quem não aceita limites.",
    corTema: "red-500",
    icone: "💎",
    beneficios: [
      "Download de 1 Gbps",
      "Upload de 500 Mbps",
      "Link Dedicado",
      "Técnico Particular",
    ],
  },
];

export function Planos() {
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
id="planos"
className="secao-planos relative px-80 py-20 bg-gray-900">
      <motion.div 
      custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
      className="container mx-auto">
        <h2 className="text-[#f0f0f0] text-center text-6xl md:text-5xl font-bold mb-4">Escolha sua {   }
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-linear-to-r from-purple-800/30 to-[#22c55e]/30 blur-3xl rounded-full z-0"></span>
            <span className="relative z-10 bg-clip-text text-transparent bg-linear-to-r from-purple-800 to-[#22c55e]">
              Velocidade
            </span>
          </span>
        </h2>

        <p className="text-[#f0f0f0] text-xl text-center mb-0">
          Sem taxas escondidas. Sem burocracia. Apenas puro desempenho.
        </p>
</motion.div>

    <motion.div
    custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
    className="overflow-x-clip px-4 sm:px-12 py-4">
    <Splide
      options={{
        type: 'loop',
        perPage: 3,
        arrows: true,
        pagination: false,
        focus: "center",
        trimSpace: false,
        breakpoints: {
          1024: { perPage: 2 },
          768: { perPage: 1, padding: "5rem" },
        },
      }}
    >
      {planosData.map((plano, index) => (
        <SplideSlide key={index}>
          <div
            className="relative p-8 bg-[#0f172a] rounded-3xl border flex flex-col h-full transition-all duration-500"
          >            

            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 text-2xl">
              {plano.icone}
            </div>

            <h3 className="text-[#f0f0f0] text-3xl font-bold mb-2">{plano.nome}</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed h-10">
              {plano.descricao}
            </p>


            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg w-fit mb-6 bg-white/5 border border-white/10">
              <span className="text-[#f0f0f0] font-bold">
                ⚡ {plano.velocidade}
              </span>
            </div>

            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-[#f0f0f0] text-5xl font-black">
                R${plano.preco.split(",")[0]}
              </span>
              <span className="text-gray-500 font-bold">
                ,{plano.preco.split(",")[1]}/mês
              </span>
            </div>

            <hr className="border-gray-800/50 mb-8" />

            <ul className="space-y-4 mb-10 grow">
              {plano.beneficios.map((ben, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[#f0f0f0] text-sm"
                >
                  <span className="text-green-500">✓</span>
                  {ben}
                </li>
              ))}
            </ul>

            <button 
            onClick={() => window.open("https://wa.me/+554892005385")}
            className="group cursor-pointer w-full py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-white/5 text-[#f0f0f0] border border-white/10 hover:bg-white/10 relative z-20">
        Assinar Agora 
        <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </button>
          </div>
        </SplideSlide>
      ))}
    </Splide>
    </motion.div>
    </section>
  );
}
