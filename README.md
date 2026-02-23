# 🚀 SuperNet - Provedor de Internet de Fibra Óptica

Este é um projeto de Landing Page moderna e de alta performance para a **SuperNet**, uma empresa fictícia de provimento de internet. O site foi construído com foco em conversão e uma estética futurista, utilizando as cores roxo e verde neon.

---

## 🛠️ Tecnologias e Ferramentas

* **React**: Biblioteca principal para construção da interface.
* **TypeScript**: Utilizado para garantir segurança e tipagem em toda a aplicação (Interfaces, Variants, Props).
* **Tailwind CSS**: Framework de estilização utilitária para um design responsivo e moderno.
* **Framer Motion**: Biblioteca responsável pelas animações fluidas de scroll e entrada de elementos.
* **Splide.js**: Implementação de carrosséis interativos para as seções de "Planos" e "Infraestrutura".
* **Lucide React**: Conjunto de ícones minimalistas e consistentes.

---

## ✨ Funcionalidades Principais

* **Navegação Inteligente**: Menu fixo com efeito de *glassmorphism* e scroll suave para as seções.
* **Experiência Visual Imersiva**: Uso de efeitos de brilho (*glow animation*), gradientes e camadas de profundidade.
* **Carrossel Dinâmico**: Seção de planos e sobre-infraestrutura totalmente responsiva e navegável.
* **Chamadas para Ação (CTA)**: Botões integrados diretamente para contato via WhatsApp.
* **Performance e Tipagem**: Componentes tipados para evitar erros em tempo de execução e facilitar a manutenção.

---

## 💡 Destaques Técnicos (TypeScript & Motion)

Neste projeto, apliquei conceitos avançados de animação com TypeScript para garantir que o código fosse reutilizável e seguro:

```typescript
// Exemplo de tipagem de variantes do Framer Motion utilizada no projeto
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay, 
      duration: 0.8, 
      ease: "easeOut"
    }
  })
};
```
## 🚀 Como Executar o Projeto

Acesse usando Vercel: https://supernet-projeto-elieser-5ksuiuumc-elieserhgarcias-projects.vercel.app?_vercel_share=Ijsd3SZCafIRjITpIimIvdynYtw4Nxw8

Siga os passos abaixo para rodar o projeto em sua máquina:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/elieserhgarcia/supernet-projeto-ts.git](https://github.com/elieserhgarcia/supernet-projeto-ts.git)

2. **Acesse a pasta do projeto:**
   ```bash
   cd supernet-projeto-ts

3. **Instale as dependências:**
   *(Certifique-se de ter o Node.js instalado)*
   ```bash
   npm install

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev

5. **Acesse no navegador:**
   Abra [http://localhost:5173](http://localhost:5173)

---

## 🎨 Layout e Temática

O projeto segue uma identidade **High-Tech**:
- **Cores:** Roxo Profundo (`#1e2336`) e Verde Neon (`#22c55e`).
- **Animações:** Implementação de `variants` customizadas no Framer Motion para efeitos de *fade-up* e *delay* escalonado.
- **Tipagem:** Uso de `type Variants` e interfaces para garantir a integridade dos dados nos componentes.

---

## 📦 Estrutura de Arquivos Principal

- `src/components/header.tsx`: Menu e navegação com efeito de desfoque.
- `src/components/hero.tsx`: Seção principal com animações coordenadas.
- `src/components/sobre.tsx`: Seção com detalhes sobre a empresa.
- `src/components/planos.tsx`: Slider interativo de planos de internet.
- `src/components/avaliacoes.tsx`: Grid de diferenciais e depoimentos.
- `src/components/footer.tsx`: Rodapé da página.

---

## 👤 Autor

Desenvolvido por **Eliéser Hansen Gallas Garcia** – [LinkedIn](www.linkedin.com/in/eliéser-garcia-9038963ab)

---

> Projeto desenvolvido como parte do meu portfólio profissional para demonstrar domínio em **React + TypeScript**.