import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AlunosSection.css';

export default function AlunosSection() {
  // 1. Gerenciamento de estado para login e senha
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // 4. Para navegação entre páginas

  // 2. Função de validação e redirecionamento
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o envio tradicional do formulário

    // Console log para verificar os valores de login e senha
    console.log('Login:', login);
    console.log('Senha:', senha);

    // Lógica de validação (use valores reais ou um banco de dados)
    if (login === 'admin' && senha === '12345') {
      setIsAuthenticated(true); // Marca como autenticado
      navigate('/formulario-aluno'); // 4. Redireciona para o formulário de aluno
    } else {
      alert('Credenciais inválidas! Tente novamente.');
    }
  };

  return (
    <section className="section">
      <div className="section-content">
        <h2>Área dos Alunos</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login">Login:</label>
            <input
              type="text"
              id="login"
              name="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)} // Atualiza o estado do login
              required
            />
          </div>

          <div>
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha
              required
            />
          </div>

          <button type="submit">Entrar</button>

          {/* Link Voltar */}
          <a href="/" className="voltar-texto">Voltar</a>
        </form>
      </div>
    </section>
  );
}

