// import { motion, type Variants } from "framer-motion";
// import { Wifi } from "lucide-react";

// export function Header() {
//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (customDelay: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { 
//         delay: customDelay, 
//         duration: 0.6, 
//         ease: "easeOut" as const
//       }
//     })
//   };

//   return (
//     <div className="fixed top-0 w-full h-20 bg-slate-800/20 backdrop-blur-3xl border-b border-white/50 flex items-center justify-between px-4 md:px-20 lg:px-40 xl:px-80 z-50">
//       <motion.div 
//       custom={0.5}
//             variants={itemVariants}
//             initial="hidden"
//             animate="visible"
//       className="flex items-center">
//         <Wifi
//           className="w-9 h-9 text-white backdrop-blur-3xl bg-purple-800/30 rounded-lg px-1 py-2"
//           strokeWidth={2.5}
//         />
//         <p className=""></p>

//         <p className="text-2xl p-2 font-bold tracking-tight relative inline-block">
//           <span className="text-[#f0f0f0]">Super</span>
//           <span className="relative inline-block isolate">
//             <span className="absolute inset-0 bg-[#22c55e]/60 blur-xl rounded-full z-10 animate-glow glow-slow"></span>
//             <span className="relative z-20 bg-clip-text text-[#22c55e]">
//               Net
//             </span>
//           </span>
//         </p>
//       </motion.div>

//       <div className="flex space-x-10 font-medium">
//         <motion.button
//         custom={0.6}
//             variants={itemVariants}
//             initial="hidden"
//             animate="visible"
//           onClick={() =>
//             document
//               .getElementById("inicio")
//               ?.scrollIntoView({ behavior: "smooth" })
//           }
//           className="cursor-pointer text-slate-300 hover:text-white transition-colors duration-300"
//         >
//           Início
//         </motion.button>

//         <motion.button
//         custom={0.7}
//             variants={itemVariants}
//             initial="hidden"
//             animate="visible"
//           onClick={() =>
//             document
//               .getElementById("sobre")
//               ?.scrollIntoView({ behavior: "smooth" })
//           }
//           className="cursor-pointer text-slate-300 hover:text-white transition-colors duration-300"
//         >
//           Sobre
//         </motion.button>
//         <motion.button
//         custom={0.8}
//             variants={itemVariants}
//             initial="hidden"
//             animate="visible"
//           onClick={() =>
//             document
//               .getElementById("planos")
//               ?.scrollIntoView({ behavior: "smooth" })
//           }
//           className="cursor-pointer text-slate-300 hover:text-white transition-colors duration-300"
//         >
//           Planos
//         </motion.button>
//         <motion.button
//         custom={0.9}
//             variants={itemVariants}
//             initial="hidden"
//             animate="visible"
//           onClick={() =>
//             document
//               .getElementById("avaliacoes")
//               ?.scrollIntoView({ behavior: "smooth" })
//           }
//           className="cursor-pointer text-slate-300 hover:text-white transition-colors duration-300"
//         >
//           Avaliações
//         </motion.button>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { Wifi, Menu, X } from "lucide-react"; 

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: customDelay, 
        duration: 0.5, 
        ease: "easeOut" as const
      }
    })
  };

  const menuItems = [
    { name: "Início", id: "inicio" },
    { name: "Sobre", id: "sobre" },
    { name: "Planos", id: "planos" },
    { name: "Avaliações", id: "avaliacoes" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full h-20 bg-slate-900/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 md:px-20 lg:px-80 z-50">
      
      <div className="flex items-center">
        <Wifi className="w-8 h-8 text-white bg-purple-800/40 rounded-lg p-1" strokeWidth={2.5} />
        <p className="text-xl md:text-2xl ml-3 font-bold tracking-tight text-[#f0f0f0]">
          Super<span className="text-[#22c55e]">Net</span>
        </p>
      </div>

      <nav className="hidden md:flex space-x-8 font-medium">
        {menuItems.map((item, idx) => (
          <motion.button
            key={item.id}
            custom={0.6 + idx * 0.1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            onClick={() => scrollToSection(item.id)}
            className="cursor-pointer text-slate-300 hover:text-[#22c55e] transition-colors"
          >
            {item.name}
          </motion.button>
        ))}
      </nav>
{/* mobile */}
      <button 
        className="md:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 w-full bg-slate-900 border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const element = document.getElementById(item.id);
              if (element) {
                setIsOpen(false);
                setTimeout(() => {
                  element.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }
            }
                  }
                  className="text-left text-slate-300 text-lg font-medium py-2 border-b border-white/5"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => window.open("https://wa.me/seunumeroaqui", "_blank")}
                className="bg-[#22c55e] text-black font-bold py-3 rounded-xl text-center"
              >
                Falar no WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}