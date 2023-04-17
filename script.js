function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // e substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/logoSoftLight.png")
  } else {
    img.setAttribute("src", "./assets/logoSoft.png")
  }
  
}
