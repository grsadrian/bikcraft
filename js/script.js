// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do orçamento

function ativarProduto(parametro) {
  const elemento = document.getElementById()
  console.log(parametro);
}

const parametros = new URLSearchParams(location.search);
parametros.forEach(ativarProduto);
// console.log(parametros);
