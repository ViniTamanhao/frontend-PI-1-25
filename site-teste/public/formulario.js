// Seleciona o formulário
console.log("formulario.js carregado com sucesso");

const form = document.getElementById('form-parecer');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("Formulário enviado. Redirecionando...");
    window.location.href = 'pagina-sucesso.html';
  });
}

