import React from "react";
import Header from "./components/Header"; // ✅ Importação adicionada
import backgroundImage from "./assets/imagem.jpg";
import "./index.css";
import javaLogo from "./assets/java.png";
import pythonLogo from "./assets/Python.png";
import cppLogo from "./assets/c,c++.png";
import reactLogo from "./assets/React.png";
import jsLogo from "./assets/Javascript.png";
import htmlLogo from "./assets/html.png";
import vercelLogo from "./assets/vercel.png";
import githubLogo from "./assets/github.png";

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
              <li>
                <img src={javaLogo} alt="Java" className="skill-icon" />
              </li>
              <li>
                <img src={pythonLogo} alt="Python" className="skill-icon" />
              </li>
              <li>
                <img src={cppLogo} alt="C/C++" className="skill-icon" />
              </li>
              <li>
                <img src={reactLogo} alt="React" className="skill-icon" />
              </li>
              <li>
                <img src={jsLogo} alt="JavaScript" className="skill-icon" />
              </li>
              <li>
                <img src={htmlLogo} alt="html" className="skill-icon" />
              </li>
            </ul>

            <section>
              <h2>Plataformas de Deploy</h2>
              <ul className="deploy-list">
                <li>
                  <img src={vercelLogo} alt="Vercel" className="deploy-icon" />
                </li>

                <li>
                  <img src={githubLogo} alt="github" className="deploy-icon" />
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
