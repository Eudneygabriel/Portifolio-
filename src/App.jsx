import React from "react";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import backgroundImage from "./assets/imagem.jpg";
import "./index.css";

export default function App() {
  return (
    <div className="app-container">
      {/* Header no topo */}
      <Header />

      {/* Imagem de fundo abaixo do Header */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Conteúdo sobreposto */}
      <main className="content">
        <Sobre />
      </main>

      {/* Footer ao final */}
      <Footer />
    </div>
  );
}
