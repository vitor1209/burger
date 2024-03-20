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

// Seleciona os elementos do menu utilizando querySelector
const btnMenu = document.querySelector('.btn-menu');
const btnMenuX = document.querySelector('.btn-menu-x');
const menuMobile = document.querySelector('.menu_mobile');
const titulo = document.querySelector('h2')

// Variável para controlar o estado do menu
let estaAberto = false;

// Função para alternar a visibilidade do menu
function toggleMenu() {
  estaAberto = !estaAberto; 
  menuMobile.classList.toggle('visible'); 
  btnMenu.style.display = estaAberto ? 'none' : 'block';
  btnMenuX.style.display = estaAberto ? 'block' : 'none';
  menuMobile.style.display = estaAberto ? 'block' : 'none';

}

btnMenu.addEventListener('click', toggleMenu);
btnMenuX.addEventListener('click', toggleMenu);


function fecharMenuAoRolar() {
  if (estaAberto) {
    toggleMenu(); 
  }
}

document.addEventListener('scroll', fecharMenuAoRolar);

