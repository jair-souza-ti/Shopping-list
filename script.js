"use strict";
//Codigo e uma pratica recomendada pra evitar erros com variaveis e outros erros do tipo, e torna assim o codigo mais seguro.
const input = document.querySelector("input");
//criando uma variavel e selecionando o elemento input.
const headerBtn = document.querySelector("#btnHeader");
//nesta variavel estamos atribuindo o elemento #botadd.
const list = document.querySelector("#list");
//nesta variavel estamos atribuindo o elemento #lista.
const listBtn = document.querySelector(".btnList");
//aqui estamos atribuido o elemento btnList.
const model = (item) => {
//Aqui esta sendo declarada a funçao model, que recebe o parametro item para add item na lista.
const itemList = document.createElement("li");
//nesta linha esta sendo criado o elemento li, que ira representa cada item na lista.
itemList.innerHTML = item;
//Nessa linha estamso definindo o conteudo do item criado anteriormente.
const btnRemover = document.createElement('button');
btnRemover.innerText = 'Remover';
btnRemover.onclick = function (){
   this.parentNode.remove();
};
//essa linha vai criar um botao de remover para cada item.
itemList.appendChild(btnRemover);
//Nessa linha o botao de remover e vinculado ao item li.
list.appendChild(itemList);
};
//linka com o ul.
headerBtn.addEventListener("click", function (event){
//Funçao de click ao botao de cabeçalho.
if(input.value === " " || input.value === " " ){
alert("Preencha o campo com um item");
} else {
    model(input.value);
    input.value = "";
}
//se a condiçao for verdadeira sera exibido um alerta solicitando que o campo seja preenhcido

event.preventDefault();



});
























