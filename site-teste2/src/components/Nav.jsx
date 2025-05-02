import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/coordenacao">COORDENAÇÃO</Link></li>
        <li><Link to="/alunos">ALUNOS</Link></li>
      </ul>
    </nav>
  );
}

