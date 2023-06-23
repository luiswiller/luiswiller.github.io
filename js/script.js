function toggleMode() {
  // pegar o elemento raiz HTML
  const html = document.documentElement;
  // alternar a classe "light"
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector("#profile img");

  // e substituir a imagem dependendo do modo escolhido
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/logoSoftLight.png");
  } else {
    img.setAttribute("src", "./assets/logoSoft.png");
  }
}
