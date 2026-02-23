import { Wifi, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-gray-800/50 pt-10 pb-10 px-80">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-5">

          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
             <Wifi className="w-6 h-6 text-white" strokeWidth={2.5} />
              <span className="text-[#f0f0f0] text-2xl font-bold tracking-tight">
                Super<span className="text-[#22c55e]">Net</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Internet de fibra óptica para residências e empresas. 
              Alta performance para o que mais importa para você.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#22c55e] hover:border-[#22c55e]/50 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#f0f0f0] font-bold mb-6">Produtos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Planos Residenciais</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Soluções Corporativas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Enterprise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Adicionais</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f0f0f0] font-bold mb-6">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Fale Conosco</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Status da Rede</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f0f0f0] font-bold mb-6">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Carreiras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Imprensa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Parceiros</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 SeuNome. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Política de Privacidade</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Termos de Serviço</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}