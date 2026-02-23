import { motion, type Variants } from "framer-motion";
import { Wifi } from "lucide-react";

export function Header() {
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
    <div className="fixed top-0 w-full h-20 bg-slate-800/20 backdrop-blur-3xl border-b border-white/50 flex items-center justify-between px-80 z-50">
      <motion.div 
      custom={0.5}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
      className="flex items-center">
        <Wifi
          className="w-9 h-9 text-white backdrop-blur-3xl bg-purple-800/30 rounded-lg px-1 py-2"
          strokeWidth={2.5}
        />
        <p className=""></p>

        <p className="text-2xl p-2 font-bold tracking-tight relative inline-block">
          <span className="text-[#f0f0f0]">Super</span>
          <span className="relative inline-block isolate">
            <span className="absolute inset-0 bg-[#22c55e]/60 blur-xl rounded-full z-10 animate-glow glow-slow"></span>
            <span className="relative z-20 bg-clip-text text-[#22c55e]">
              Net
            </span>
          </span>
        </p>
      </motion.div>

      <div className="flex space-x-10 font-medium">
        <motion.button
        custom={0.6}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          onClick={() =>
            document
              .getElementById("inicio")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer text-slate-300 hover:text-white transition-colors duration-300"
        >
          Início
        </motion.button>

        <motion.button
        custom={0.7}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          onClick={() =>
            document
              .getElementById("sobre")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer text-slate-300 hover:text-white transition-colors duration-300"
        >
          Sobre
        </motion.button>
        <motion.button
        custom={0.8}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          onClick={() =>
            document
              .getElementById("planos")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer text-slate-300 hover:text-white transition-colors duration-300"
        >
          Planos
        </motion.button>
        <motion.button
        custom={0.9}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          onClick={() =>
            document
              .getElementById("avaliacoes")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer text-slate-300 hover:text-white transition-colors duration-300"
        >
          Avaliações
        </motion.button>
      </div>
    </div>
  );
}
