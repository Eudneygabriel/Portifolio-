import React from "react";

export default function Header() {
  const scrollToCertificacoes = () => {
    const certSection = document.getElementById("certificacoes");
    certSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">Meu Portifólio</h1>
      </div>
    </header>
  );
}
