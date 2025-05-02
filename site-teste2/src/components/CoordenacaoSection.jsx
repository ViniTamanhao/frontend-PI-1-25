import React from 'react';
import { Link } from 'react-router-dom'; // Importando o Link para navegação
import './CoordenacaoSection.css';

export default function CoordenacaoSection() {
  return (
    <section className="section">
      <div className="section-content">
        <h2>Área da Coordenação</h2>
        <br />
        <form>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required />
          </div>
          <button type="submit">Entrar</button>

          {/* Botão Voltar como texto */}
          <Link to="/" className="voltar-texto">Voltar</Link>
        </form>
      </div>
    </section>
  );
}

