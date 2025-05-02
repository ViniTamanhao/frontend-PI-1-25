import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação entre páginas
import './AlunosFormulario.css'; // Adicione um arquivo CSS com seus estilos

export default function Formulario() {
  const [formData, setFormData] = useState({
    prontuario: '',
    nomePaciente: '',
    dataNascimento: '',
    dataInternacao: '',
    dataSolicitacao: '',
    setorInternacao: '',
    dataResposta: '',
    dataAlta: '',
    tipoAlta: '',
    observacao: '',
    sexoPaciente: '',
    atendimentoFamilia: '',
    qtdAtendimentos: '',
    localMoradia: '',
    grauInstrucao: '',
    nomeAluno: '',
  });

  const navigate = useNavigate(); // Hook para navegação

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode manipular os dados do formulário, como enviar para um servidor
    // Em seguida, redirecionar para a página de sucesso ou a página principal
    navigate('/pagina-sucesso'); // Redireciona após envio
  };

  const handleRadioChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      atendimentoFamilia: e.target.value,
    }));
  };

  return (
  <div className="formulario-page">
    <div className="form-wrapper">
      <a href="/" className="back-link">
        <i className="fa fa-arrow-left"></i> Voltar à página inicial
      </a>

      <section className="form-section">
        <h2>Formulário do Parecer</h2>
        <form onSubmit={handleSubmit} id="form-parecer">

          <label htmlFor="prontuario">Número do Prontuário:</label>
          <input
            type="text"
            id="prontuario"
            name="prontuario"
            value={formData.prontuario}
            onChange={handleChange}
            required
          />

          <label htmlFor="nome-paciente">Nome do Paciente:</label>
          <input
            type="text"
            id="nome-paciente"
            name="nomePaciente"
            value={formData.nomePaciente}
            onChange={handleChange}
            required
          />

          <label htmlFor="data-nascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="data-nascimento"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
          />

          <label htmlFor="data-internacao">Data de Internação:</label>
          <input
            type="date"
            id="data-internacao"
            name="dataInternacao"
            value={formData.dataInternacao}
            onChange={handleChange}
          />
          <button type="button" id="add-internacao">Adicionar Data de Internação</button>

          <label htmlFor="data-solicitacao">Data de Solicitação:</label>
          <input
            type="date"
            id="data-solicitacao"
            name="dataSolicitacao"
            value={formData.dataSolicitacao}
            onChange={handleChange}
            required
          />

          <label htmlFor="setor-internacao">Setor onde o Paciente está Internado:</label>
          <input
            type="text"
            id="setor-internacao"
            name="setorInternacao"
            value={formData.setorInternacao}
            onChange={handleChange}
            required
          />

          <label htmlFor="data-resposta">Data de Resposta:</label>
          <input
            type="date"
            id="data-resposta"
            name="dataResposta"
            value={formData.dataResposta}
            onChange={handleChange}
            required
          />

          <label htmlFor="data-alta">Data de Alta:</label>
          <input
            type="date"
            id="data-alta"
            name="dataAlta"
            value={formData.dataAlta}
            onChange={handleChange}
            required
          />

          <label htmlFor="tipo-alta">Tipo de Alta:</label>
          <input
            type="text"
            id="tipo-alta"
            name="tipoAlta"
            value={formData.tipoAlta}
            onChange={handleChange}
          />

          <label htmlFor="observacao">Observação Geral:</label>
          <textarea
            id="observacao"
            name="observacao"
            value={formData.observacao}
            onChange={handleChange}
          />

          <label htmlFor="sexo-paciente">Sexo do Paciente:</label>
          <select
            id="sexo-paciente"
            name="sexoPaciente"
            value={formData.sexoPaciente}
            onChange={handleChange}
            required
          >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
            <option value="nao-informado">Não Informado</option>
          </select>

          <label>Houve Atendimento à Família?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="atendimentoFamilia"
                value="sim"
                checked={formData.atendimentoFamilia === 'sim'}
                onChange={handleRadioChange}
              /> Sim
            </label>
            <label>
              <input
                type="radio"
                name="atendimentoFamilia"
                value="nao"
                checked={formData.atendimentoFamilia === 'nao'}
                onChange={handleRadioChange}
              /> Não
            </label>
          </div>

                    {formData.atendimentoFamilia === 'sim' && (
            <div id="familia-extra-campos">
              <label htmlFor="qtdAtendimentos">Quantidade de Atendimentos:</label>
              <input
                type="number"
                id="qtdAtendimentos"
                name="qtdAtendimentos"
                value={formData.qtdAtendimentos}
                onChange={handleChange}
              />

              <label htmlFor="localMoradia">Local de Moradia da Família:</label>
              <input
                type="text"
                id="localMoradia"
                name="localMoradia"
                value={formData.localMoradia}
                onChange={handleChange}
              />

              <label htmlFor="grauInstrucao">Grau de Instrução da Família:</label>
              <input
                type="text"
                id="grauInstrucao"
                name="grauInstrucao"
                value={formData.grauInstrucao}
                onChange={handleChange}
              />
            </div>
          )}

          <label htmlFor="nomeAluno">Nome do Aluno Responsável pelo Preenchimento:</label>
          <input
            type="text"
            id="nomeAluno"
            name="nomeAluno"
            value={formData.nomeAluno}
            onChange={handleChange}
            required
          />

          <button type="submit">Enviar Parecer</button>
        </form>
      </section>
    </div>
   </div> 
  );
}

