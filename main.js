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

