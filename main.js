// selecionar todos os elementos que eu quero ocultar e amarzenar na variavel ocultar
const ocultar = document.querySelectorAll(".ocultar")

//observador se ver a tela o elemento aparece se nao some 
const observador = new IntersectionObserver( (info) =>{
 info.forEach( (dados) => {
  if(dados.isIntersecting){
    dados.target.classList.add("aparecer")
  } 
 })
})   

//fazer uma lista dos elementos e passar pelo observador
ocultar.forEach((Element) => observador.observe(Element))

// btn menu para celular

function aparecer(){
  let Menu = document.querySelector('.menu');
  let btnx = document.querySelector(".btn-menu-x")
  let btn1 = document.querySelector(".btn-menu")
  let corpo = document.querySelector(".conteiner")

  if (Menu.classList.contains('open')) {

      Menu.classList.remove('open');
      btn1.classList.remove('fechar');
      btnx.classList.remove('abrir');
      corpo.classList.remove('remover');
      remov.classList.remove('remover')
  } 
  else{
      Menu.classList.add('open');
      btn1.classList.add('fechar');
      btnx.classList.add('abrir');
      corpo.classList.add('remover');
      remov.classList.add('remover')
  }
  //fixar tela//
  document.body.classList.toggle('fixo') 

}
const btn1 = document.querySelector(".btn-menu")
const menu_mobile = document.querySelector(".menu_mobile")

btn1.onclick = function (){
  menu_mobile.classList.toggle(".abrir")
}