//Voce pode alterar qualquer parte do código

const bnt = document.getElementById("send");

console.log("Aparentemente está tudo funcionando!");


if(bnt){
    bnt.addEventListener('click', function guardarInfo(){
        const nomeInfo = document.getElementById("nome1");
        const idadeInfo = document.getElementById("idade1");
        const salarioInfo = document.getElementById("salario1");
        console.log('Olá '+nomeInfo.value+ '! esses são seus dados:');
        console.log('Nome: ' + nomeInfo.value);
        console.log('Idade: ' +idadeInfo.value);
        console.log('Salario: '+salarioInfo.value);

        
    });
}

var titulo = document.querySelector("#titulo");
titulo.addEventListener('click', function mostrarAlerta(){
    alert("Largura do Título: 1348px");
});




document.addEventListener('mouseover', (e) => {
    if(e.target.tagName == "h1"){
        alert("BEM VINDO!!!");
        e.target.style.cursor = "pointer";
    }else{
        e.target.style.cursor = "default";
    }

    if(e.target.tagName == "BUTTON"){
    }
});

