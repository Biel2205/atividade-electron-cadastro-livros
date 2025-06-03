const form = document.getElementById('formLivro');
const lista = document.getElementById('listaLivros');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;
  await window.api.salvarLivros( titulo, autor );
  
  form.reset();

  carregarLivros();
});

async function carregarLivros() {
  const livros = await window.api.listarLivros();
  lista.innerHTML = '';
  livros.forEach(livro => {
    const li = document.createElement('li');
    li.textContent = `${livro.titulo} - ${livro.autor}`;
    lista.appendChild(li);
  });
}

carregarLivros();
