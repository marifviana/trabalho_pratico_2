function carregarFilmes() {
  const filmesJSON = localStorage.getItem('filmes');
  return filmesJSON ? JSON.parse(filmesJSON) : [];
}

function salvarFilmes(filmes) {
  localStorage.setItem('filmes', JSON.stringify(filmes));
}

function exibirFilmesNaHome() {
  const container = document.getElementById('filmesContainer');
  if (!container) return;

  const filmes = carregarFilmes();
  container.innerHTML = '';

  filmes.forEach(filme => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card">
        <img src="${filme.imagem}" class="card-img-top" alt="${filme.titulo}">
        <div class="card-body">
          <h5 class="card-title">${filme.titulo}</h5>
          <p class="card-text">${filme.descricao}</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}
