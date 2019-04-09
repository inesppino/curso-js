'use strict';

console.log('>> Ready :)');

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