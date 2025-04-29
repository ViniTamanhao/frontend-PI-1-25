import './style.css';

// Menu: mostrar seções (home, coordenação, alunos)
const homeSection = document.getElementById('home-section');
const coordSection = document.getElementById('coordenacao-section');
const alunosSection = document.getElementById('alunos-section');
const menuButtons = document.querySelectorAll('.menu-btn');

function hideAllSections() {
  if (homeSection) homeSection.classList.add('hidden');
  if (coordSection) coordSection.classList.add('hidden');
  if (alunosSection) alunosSection.classList.add('hidden');
}

menuButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const section = btn.getAttribute('data-section');
    hideAllSections();

    if (section === 'home' && homeSection) {
      homeSection.classList.remove('hidden');
    } else if (section === 'coordenacao' && coordSection) {
      coordSection.classList.remove('hidden');
    } else if (section === 'alunos' && alunosSection) {
      alunosSection.classList.remove('hidden');
    }
  });
});

// Formulários de login e alunos
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const alunosForm = document.getElementById('alunos-form');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = '/pagina-coordenacao.html';
    });
  }

  if (alunosForm) {
    alunosForm.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = '/pagina-alunos.html';
    });
  }

  // Formulário do parecer
  const formParecer = document.getElementById('form-parecer');
  if (formParecer) {
    formParecer.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = '/pagina-sucesso.html';
    });

    const sucessoMensagem = document.getElementById('sucesso-mensagem');
    if (sucessoMensagem) {
      sucessoMensagem.style.display = 'block';
      formParecer.style.display = 'none';
    }

    // Adicionar novas datas de internação
    const addInternacaoBtn = document.getElementById('add-internacao');
    const internacoesContainer = document.getElementById('internacoes-container');
    if (addInternacaoBtn && internacoesContainer) {
      addInternacaoBtn.addEventListener('click', function () {
        const novaData = document.createElement('input');
        novaData.type = 'date';
        novaData.name = 'data-internacao';
        internacoesContainer.appendChild(novaData);
      });
    }
  }
});

