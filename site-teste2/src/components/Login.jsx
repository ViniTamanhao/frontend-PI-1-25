import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate(); // Hook de navegação

  // Função para atualizar o estado dos campos de input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para validar as credenciais
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o refresh da página ao enviar o formulário

    // Credenciais fixas para o teste
    const validUsername = 'admin';
    const validPassword = 'senha';

    // Verifica se as credenciais estão corretas
    if (credentials.username === validUsername && credentials.password === validPassword) {
      navigate('/formulario-aluno'); // Redireciona para o formulário
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}> {/* Agora o formulário não vai recarregar a página */}
        <label htmlFor="username">Nome de usuário:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

