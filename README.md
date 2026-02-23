Português | English

PT
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

Acesse usando Vercel: https://supernet-definitivo.vercel.app?_vercel_share=EdvFAgZR7fIWi8asdV17wrJT8qlTOji3

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

EN
# 🚀 SuperNet - Fiber Optic Internet Provider

This is a modern and high-performance Landing Page project for **SuperNet**, a fictional internet service provider. The website was built with a focus on conversion and a futuristic aesthetic, utilizing purple and neon green colors.

---

## 🛠️ Technologies and Tools

* **React**: Core library for building the interface.
* **TypeScript**: Used to ensure type safety throughout the application (Interfaces, Variants, Props).
* **Tailwind CSS**: Utility-first styling framework for a modern and responsive design.
* **Framer Motion**: Library responsible for fluid scroll animations and element entrances.
* **Splide.js**: Implementation of interactive carousels for the "Plans" and "Infrastructure" sections.
* **Lucide React**: A set of minimalist and consistent icons.

---

## ✨ Key Features

* **Smart Navigation**: Fixed menu with a *glassmorphism* effect and smooth scrolling between sections.
* **Immersive Visual Experience**: Use of glow animations, gradients, and depth layers.
* **Dynamic Carousel**: Fully responsive and navigable sections for plans and infrastructure.
* **Call to Action (CTA)**: Integrated buttons for direct contact via WhatsApp.
* **Performance and Typing**: Typed components to prevent runtime errors and facilitate maintenance.

---

## 💡 Technical Highlights (TypeScript & Motion)

In this project, I applied advanced animation concepts with TypeScript to ensure the code is reusable and secure:

```typescript
// Example of Framer Motion variants typing used in the project
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
## 🚀 How to Run the Project

Acess via Vercel: https://supernet-definitivo.vercel.app?_vercel_share=EdvFAgZR7fIWi8asdV17wrJT8qlTOji3

Follow the steps below to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/elieserhgarcia/supernet-projeto-ts.git](https://github.com/elieserhgarcia/supernet-projeto-ts.git)

2. **Navigate to the project folder:**
   ```bash
   cd supernet-projeto-ts

3. **Install dependencies:**
   *(Make sure you have Node.js installed)*
   ```bash
   npm install

4. **Start the development server:**
   ```bash
   npm run dev

5. **Acess in your browser:**
   Open [http://localhost:5173](http://localhost:5173)

---

## 🎨 Layout and Theme

The project follows a **High-Tech** identity:
- **Colors:** Deep Purple (`#1e2336`) and Neon Green (`#22c55e`).
- **Animations:** Implementation of custom `variants` in Framer Motion for *fade-up* effects and staggered *delays*.
- **Typing:** Use of `type Variants` and interfaces to ensure data integrity within components.

---

## 📦 Main File Structure

- `src/components/header.tsx`: Menu and navigation with blur effect.
- `src/components/hero.tsx`: Main section with coordinated animations.
- `src/components/sobre.tsx`: Section with company details.
- `src/components/planos.tsx`: Interactive slider for internet plans.
- `src/components/avaliacoes.tsx`: Grid for key differentiators and testimonials.
- `src/components/footer.tsx`: Page footer.

---

## 👤 Author

Developed by **Eliéser Hansen Gallas Garcia** – [LinkedIn](www.linkedin.com/in/eliéser-garcia-9038963ab)

---

> Project developed as part of my professional portfolio to demonstrate proficiency in **React + TypeScript**.