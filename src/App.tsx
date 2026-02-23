import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Sobre } from "./components/sobre";
import { Planos } from "./components/planos";
import { Avaliacoes } from "./components/avaliacoes";
import { Footer } from "./components/footer";

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Planos />
        <Avaliacoes />
      </main>
      <Footer />
    </div>
  );
}
