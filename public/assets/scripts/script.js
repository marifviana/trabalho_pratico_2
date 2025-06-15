const filmes = [
  {
    titulo: "Filme 1",
    imagem: "https://via.placeholder.com/200x300",
    ano: "2025"
  },
  {
    titulo: "Filme 2",
    imagem: "https://via.placeholder.com/200x300",
    ano: "2024"
  },
  {
    titulo: "Filme 3",
    imagem: "https://via.placeholder.com/200x300",
    ano: "2023"
  }
];

const container = document.getElementById("filmes");

filmes.forEach(filme => {
  const div = document.createElement("div");
  div.classList.add("filme");
  div.innerHTML = `
    <img src="${filme.imagem}" alt="${filme.titulo}">
    <h3>${filme.titulo}</h3>
    <p>${filme.ano}</p>
    <button class="btn-favorito">❤️</button>
  `;

  div.querySelector(".btn-favorito").addEventListener("click", () => {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const jaExiste = favoritos.some(f => f.titulo === filme.titulo);
    if (!jaExiste) {
      favoritos.push(filme);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      alert("Filme adicionado aos favoritos!");
    } else {
      alert("Esse filme já está nos favoritos.");
    }
  });

  container.appendChild(div);
});
