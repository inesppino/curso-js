console.log('yay!');

function pulsado(){
    console.log("pulsado!");
}

// function inicializar() {
//     var elemenH1 = document.createElement('h1');
//     var textTitle = document.createTextNode('Titulo Principal');
//     elemenH1.appendChild(textTitle);
//     var body = document.body;
//     body.appendChild(elemenH1);
// } 

// function inicializar(){
//     var parrafo1 = document.getElementById('parrafo1')
//     console.log(parrafo1);

//     var titulo = document.getElementsByClassName('title');
//     console.log(titulo);

//     var parrafo = document.querySelector('p');
//     console.log(parrafo);
    
//     var item = document.getElementsByTagName('li');
//     console.log(item);

//     var input = document.getElementsByName('input');
//     console.log(input);

//     var parrafos = document.querySelectorAll('p');
//     console.log("primero: ", parrafos.item(0));
//     console.log("segundo: ", parrafos[1]);

//     for (let i = 0; i< parrafos.length; i++){
//         console.log(parrafos[i].firstChild.textContent);
//     }

// }

//variablesGlobales = "variableGlobal";
var irAlBarEsTbUnaVariableGlobal ="otra variable";

function miFuncion () {
    var variableLocal = "variable local";
    for (var i = 0; i<10; i++){
        console.log(">>" + i);
    }
    console.log("El valor de" + i);
}

miFuncion();

function miClase(campo1, campo2){
    this.clave1 = campo1;
    this.clave2 = campo2;
}

miClase.prototype.concatena = function(){
    return this.clave1 + this.clave2
}

var miObjeto = new miClase("primero","segundo");
console.log(miObjeto.concatena());