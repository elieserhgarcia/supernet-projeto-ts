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