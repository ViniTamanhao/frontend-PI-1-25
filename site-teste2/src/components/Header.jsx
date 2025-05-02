import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-spacer"></div> {/* espaço à esquerda */}
        <div className="hero-text">
          <h1>Especialização em Psicologia Clínica Institucional</h1>
          <p>Modalidade Residência Hospitalar</p>
        </div>
        <div className="hero-logo">
          <a href="https://www.uerj.br/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/logomarca-uerj.png" alt="Logo da UERJ" />
          </a>
        </div>
      </div>
    </header>
  );
}

