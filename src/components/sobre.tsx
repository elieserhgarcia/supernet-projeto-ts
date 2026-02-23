import { motion, type Variants } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export function Sobre() {
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
    id="sobre"
    className="relative w-full py-20 px-4 md:px-20 lg:px-40 xl:px-80 bg-gray-900">
      <motion.div 
      custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
      className="container pb-10 mx-auto">
        <h2 className="text-[#f0f0f0] text-center text-4xl lg:text-7xl font-black mb-4">
          Nossa {}
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-linear-to-r from-[#22c55e]/30 to-purple-800/30 blur-3xl rounded-full z-0"></span>
            <span className="relative z-10 bg-clip-text text-transparent bg-linear-to-r from-[#22c55e] to-purple-800">
              Infraestrutura
            </span>
          </span>
        </h2>

        <p className="text-[#f0f0f0] text-xl text-center">
          Construído com tecnologia de ponta e infraestrutura de nível
          corporativo
        </p>
</motion.div>
<motion.div 
custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
className="overflow-x-clip px-4">

        <Splide
          options={{
            type: "loop",
            perPage: 3,
            focus: "center",
            gap: "2rem",
            pagination: true,
            arrows: true,
            breakpoints: {
      1024: { perPage: 2, gap: "1rem" },
      768: { perPage: 1, gap: "0.5rem", padding: "10%" },
    },
          }}
        >
          {/* numero1 */}
          <SplideSlide>
            <div className="relative w-full h-100 rounded-2xl border border-[#f0f0f0] hover:border-green-500 overflow-hidden group">
              <img
                src="/velocidade.jpg"
                alt="Velocidade imagem"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-[#f0f0f0] font-bold text-2xl">
                  Alta Velocidade
                </h3>
                <p className="text-[#f0f0f0] mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform-opacity duration-500 delay-75">
                  Fibra óptica de ponta a ponta.
                </p>
              </div>
            </div>
          </SplideSlide>

          {/* numero2 */}
          <SplideSlide>
            <div className="relative w-full h-100 rounded-2xl border border-[#f0f0f0] hover:border-green-500 overflow-hidden group">
              <img
                src="/conexão.jpg"
                alt="conexão imagem"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-[#f0f0f0] font-bold text-2xl">
                  Conexão Rápida
                </h3>
                <p className="text-[#f0f0f0] mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform-opacity duration-500 delay-75">
                  Cabos de fibra óptica.
                </p>
              </div>
            </div>
          </SplideSlide>

          {/* numero3 */}
          <SplideSlide>
            <div className="relative w-full h-100 rounded-2xl border border-[#f0f0f0] hover:border-green-500 overflow-hidden group">
              <img
                src="/suporte.jpg"
                alt="suporte imagem"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-[#f0f0f0] font-bold text-2xl">
                  Suporte 24h
                </h3>
                <p className="text-[#f0f0f0] mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform-opacity duration-500 delay-75">
                  Sempre disponíveis para você.
                </p>
              </div>
            </div>
          </SplideSlide>

          {/* numero4 */}
          <SplideSlide>
            <div className="relative w-full h-100 rounded-2xl border border-[#f0f0f0] hover:border-green-500 overflow-hidden group">
              <img
                src="/tecnologia.jpg"
                alt="tecnologia imagem"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-[#f0f0f0] font-bold text-2xl">
                  Tecnologia de Ponta
                </h3>
                <p className="text-[#f0f0f0] mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform-opacity duration-500 delay-75">
                  Inovando a cada ano.
                </p>
              </div>
            </div>
          </SplideSlide>

          {/* numero5 */}
          <SplideSlide>
            <div className="relative w-full h-100 rounded-2xl border border-[#f0f0f0] hover:border-green-500 overflow-hidden group">
              <img
                src="/estabilidade.jpg"
                alt="Estabilidade imagem"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-[#f0f0f0] font-bold text-2xl">
                  Estabilidade
                </h3>
                <p className="text-[#f0f0f0] mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform-opacity duration-500 delay-75">
                  Conexão sem quedas ou latência.
                </p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
        </motion.div>
    </section>
  );
}
