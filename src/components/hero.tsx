import { motion, type Variants } from "framer-motion";



export function Hero() {

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: customDelay, 
        duration: 0.6, 
        ease: "easeOut" as const
      }
    })
  };

  return (
    
    
    <section
      id="inicio"
      className="inicio relative w-full min-h-screen bg-gray-900 flex items-center pb-80 px-80 overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-slate-900/50 z-0"></div>

      <div
        className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="w-full lg:w-3/5 flex flex-col items-start text-left">
          <motion.h1 
        custom={1.2}
            variants={itemVariants}
            initial="hidden"
            animate="visible"

          className="mt-80 text-[#f0f0f0] text-5xl lg:text-7xl font-black leading-[1.1] mb-6">
            Infraestrutura <br />
            que o{" "}
            <span className="relative inline-block font-bold">
              <span className="absolute inset-0 bg-linear-to-r from-purple-800/60 to-[#22c55e]/60 blur-3xl rounded-full -z-10 animate-glow"></span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-800 to-[#22c55e]">
                futuro
              </span>
            </span>{" "}
            <br />
            da sua{" "}
            <span className="relative inline-block font-bold">
              <span className="absolute inset-0 bg-linear-to-r from-[#22c55e]/60 to-purple-800/60 blur-3xl rounded-full -z-10 animate-glow"></span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#22c55e] to-purple-800">
                conexão
              </span>
            </span>{" "}
            <br />
            exige. <br />
          </motion.h1>

          <motion.p 
          custom={1.5}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          className="text-[#f0f0f0] text-lg lg:text-xl max-w-md mb-10 leading-relaxed">
            Nossos especialistas garantem uma instalação de fibra óptica
            certificada, segura e de alta performance para manter seu negócio
            sempre conectado.
          </motion.p>
<motion.div
custom={1.9}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
>
          <div className="justify-between w-2/3 flex flex-wrap gap-4 mb-4">
            <button 
            onClick={() => window.open("https://wa.me/+554892005385")}
            className="bg-green-500 hover:bg-green-600 text-slate-900 px-10 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] cursor-pointer">
              Falar com Consultor
            </button>
            <button 
            onClick={() => window.open("https://wa.me/+554892005385")}
            className="border border-gray-500 hover:border-[#f0f0f0] text-[#f0f0f0] px-10 py-4 rounded-full font-bold transition-all cursor-pointer">
              Nossos Serviços
            </button>
          </div>

          <div className="flex justify-between items-center w-2/3 text-[#f0f0f0] text-4xl lg:text-4xl font-black leading-[1.1]">
            <span>24/7h</span>
            <span>500K</span>
            <span>100%</span>
          </div>

          <div className="flex justify-between items-center w-2/3 text-[#f0f0f0] text-lg lg:text-xl">
            <span>atendimento</span>
            <span>clientes</span>
            <span>garantia</span>
          </div>
        </motion.div>

</div>
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <motion.div 
          initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          className="relative">
            <div className="absolute -inset-4 z-0 bg-green-500/20 blur-2xl rounded-full"></div>

            <img
              src="/tecnico-hero.png"
              alt="Técnico Especialista"
              className="mt-60 relative z-10 w-full max-w[450px] h-auto rounded-3xl shadow-2xl border-5 border-white/20 hover:scale-102 hover:brightness-110 transition duration-300"
            />
          </motion.div>
        </div>
      </div>
            <div className="absolute bottom-0 left-0 w-full h-96 bg-linear-to-t from-gray-900 to-transparent"></div>
    </section>
  );
}
