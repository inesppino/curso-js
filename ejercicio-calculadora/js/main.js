
function suma(){
    var acc = 0;
    for (let i = 0; i < arguments.length; i ++){
        acc = acc + arguments[i];
    }
    return acc;  
}

function sumaDos(primero, segundo){
    var resultadoSumaDos = 0
    if(arguments.callee.length == arguments.length){
    resultadoSumaDos = primero+segundo;
    }
    return resultadoSumaDos;
}

console.log("aqui sumaDos " + sumaDos(1,2,5));
console.log("Aqui suma " + suma(2,5,3));

function resta(primero, segundo){
    if(arguments.callee.length == arguments.length){
        return primero - segundo;
    } else {
        var resultadoResta = arguments[0];
        for (let i = 1; i < arguments.length; i++){
            resultadoResta =  resultadoResta -arguments[i];
        }
        return resultadoResta;
    }
}

console.log(resta(3,2));
console.log(resta(10,5,2));

function multiplicar(primero, segundo){
    if(arguments.callee.length == arguments.length){
        return primero * segundo;
    }
}

function dividir(primero, segundo){
    if(arguments.callee.length == arguments.length){
        return primero / segundo;
    }
}

var acc=0;

function accSuma(){
    for (let i = 0; i < arguments.length; i ++){
        acc = acc + arguments[i];
    }
    return acc;  
}

// console.log('primera '+ accSuma(1));
// console.log('segunda '+ accSuma(1));
// console.log('tercera '+ accSuma(4));
// console.log('cuarta '+ accSuma(10));
// console.log('cuarta '+ accSuma(2,5));