import React from "react";
import backgroundImage from "./assets/imagem.jpg";
import "./index.css";
import Certificacoes from "./components/Certificacoes";

export default function App() {
  return (
    <div className="app-container">
      {/* Header no topo */}
      <header className="header">
        <h1 className="title">Portfólio</h1>
        <nav>
          <button
            className="cert-btn"
            onClick={() => {
              const section = document.getElementById("certificacoes");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Certificações
          </button>
        </nav>
      </header>

      {/* Imagem de fundo abaixo do Header */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Conteúdo sobreposto */}
      <main className="content">
        <div className="sobre-mim">
          <h2>Eudney Gabriel</h2>
          <p>
            Sou um estudante do 2º ano do curso programador informático, da
            Escola Profissional do Fundão.
          </p>
          <h2>Linguagens de Programação</h2>
          <ul className="skills-list">
            <li>Java</li>
            <li>Python</li>
            <li>C / C++</li>
            <li>React</li>
            <li>JavaScript</li>
          </ul>
        </div>

        {/* Seção de certificações */}
        <section id="certificacoes"></section>
      </main>
    </div>
  );
}
