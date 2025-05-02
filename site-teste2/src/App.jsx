import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import TopBar from './components/TopBar';
import Nav from './components/Nav';
import HomeSection from './components/HomeSection';
import CoordenacaoSection from './components/CoordenacaoSection';
import AlunosSection from './components/AlunosSection';
import AlunosFormulario from './components/AlunosFormulario';
import Login from './components/Login';

function Layout() {
  const location = useLocation();

  // Verifica se a rota atual é a de login ou formulário
  const isFormPage = location.pathname === '/formulario-aluno' || location.pathname === '/login';

  return (
    <>
      {/* Renderiza o Header, TopBar e Nav apenas se não for uma página de login ou formulário */}
      {!isFormPage && <Header />}
      {!isFormPage && <TopBar />}
      {!isFormPage && <Nav />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout /> {/* Aqui você renderiza a parte do layout de navegação */}

      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/coordenacao" element={<CoordenacaoSection />} />
        <Route path="/alunos" element={<AlunosSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/formulario-aluno" element={<AlunosFormulario />} />
      </Routes>
    </Router>
  );
}

