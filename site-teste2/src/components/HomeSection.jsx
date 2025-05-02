import React from 'react';
import './Section.css'; // Reutilizável para as três seções

export default function HomeSection() {
  return (
    <section className="section">
      <div className="section-content">
        <h2>Bem-vindo ao Sistema de Controle de Pareceres</h2>
        <br />
        <p>
          Este sistema foi desenvolvido para facilitar o acompanhamento dos pareceres emitidos pelos alunos da Especialização em Psicologia Clínica Institucional, na modalidade Residência Hospitalar, da UERJ.
        </p>
      </div>
    </section>
  );
}

