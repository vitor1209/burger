// selecionar todos os elementos que eu quero ocultar e amarzenar na variavel ocultar
const ocultar = document.querySelectorAll(".ocultar");

//observador se ver a tela o elemento aparece se nao some 
const observador = new IntersectionObserver( (info) =>{
 info.forEach( (dados) => {
  if(dados.isIntersecting){
    dados.target.classList.add("aparecer");
  } 
 })
})   

//fazer uma lista dos elementos e passar pelo observador
ocultar.forEach((Element) => observador.observe(Element));

// btn menu para celular

// Seleciona os botões menu e menu-x utilizando querySelector
const btnMenu = document.querySelector('.btn-menu');
const btnMenuX = document.querySelector('.btn-menu-x');
const menuMobile = document.querySelector('.menu_mobile');

let estaAberto = false;

function aparecer() {
  if (!estaAberto) {
    menuMobile.classList.add('visible');
    btnMenu.style.display = 'none';
    btnMenuX.style.display = 'block';
    menuMobile.style.display = 'block'; 
    estaAberto = true;
  } else {
    menuMobile.classList.remove('visible');
    btnMenu.style.display = 'block';
    btnMenuX.style.display = 'none';
    menuMobile.style.display = 'none';
    estaAberto = false;
  }
  document.addEventListener('scroll', () => {
    menuMobile.classList.remove('visible');
    btnMenu.style.display = 'block';
    btnMenuX.style.display = 'none';
    menuMobile.style.display = 'none';
    estaAberto = false;
  })
}

btnMenu.addEventListener('click', aparecer);
btnMenuX.addEventListener('click', aparecer);

