import React from "react";
import Header from "./components/Header"; // ✅ Importação adicionada
import backgroundImage from "./assets/imagem.jpg";
import "./index.css";

export default function App() {
  return (
    <div className="app-container">
      {/* Header no topo */}
      <Header />

      {/* Área com imagem e sobre mim */}
      <div className="hero-section">
        {/* Imagem de fundo */}
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
              escola Profissional do Fundão
            </p>
            <h2>Linguagens de programação</h2>
            <ul className="skills-list">
              <li>Java</li>
              <li>Python</li>
              <li>C / C++</li>
              <li>React</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </main>
      </div>

      {/* Seção de certificações */}
      <section className="certificacoes-section">
        <h2>Certificações</h2>
        {/* Aqui você poderá adicionar os cartões ou textos */}
      </section>

      <div className="cert-card">
        <div className="cert-top">
          <a
            href="https://www.exemplo.com/certificado"
            target="_blank"
            rel="noopener noreferrer"
            className="cert-link"
          >
            Ver Certificado
          </a>
        </div>
        <div className="cert-bottom">
          <span>Certificação React</span>
        </div>
      </div>
    </div>
  );
}
