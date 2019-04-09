
function suma() {
    var acc = 0;
    if (arguments.callee.length == arguments.length) {
        return acc = primero + segundo;

    } else {
        for (let i = 0; i < arguments.length; i++) {
            acc = acc + arguments[i];
        }
        return acc;
    }
}

console.log("Aqui suma " + suma(2, 5));

function resta(primero, segundo) {
    if (arguments.callee.length == arguments.length) {
        return primero - segundo;
    } else {
        var resultadoResta = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            resultadoResta = resultadoResta - arguments[i];
        }
        return resultadoResta;
    }
}

function multiplicar(primero, segundo) {
    if (arguments.callee.length == arguments.length) {
        return primero * segundo;
    } else {
        var resultadoMultiplicacion = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            resultadoMultiplicacion = resultadoMultiplicacion * arguments[i];
        }
        return resultadoMultiplicacion;
    }
}

console.log("aqui se multiplica " + multiplicar(2, 2, 2));

function dividir(primero, segundo) {
    if (arguments.callee.length == arguments.length) {
        return primero / segundo;
    } else {
        var resultadoDivision = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            resultadoDivision = resultadoDivision / arguments[i];
        }
        return resultadoDivision;
    }
}

console.log("aqui se divide " + dividir(8, 2, 2));

var acc = 0;

function accSuma() {
    for (let i = 0; i < arguments.length; i++) {
        acc = acc + arguments[i];
    }
    return acc;
}

function accResta() {
    if (acc == 0) {
        acc = arguments[0];
    } else {
        for (let i = 0; i < arguments.length; i++) {
            acc = acc - arguments[i];
        }
    }
    return acc;
}

function accMultiplicar() {
    if (acc == 0) {
        acc = arguments[0];
        
    } else {
        for (let i = 0; i < arguments.length; i++) {
            acc = acc * arguments[i];
        }
    }
    return acc;
}

function accDividir() {
    if (acc == 0) {
        acc = arguments[0];
        
    } else {
        for (let i = 0; i < arguments.length; i++) {
            acc = acc / arguments[i];
        }
    }
    return acc;
}

console.log('primera '+ accSuma(1));
console.log('segunda '+ accSuma(1));
console.log('tercera '+ accSuma(4));
console.log('cuarta '+ accSuma(10));
console.log('cuarta '+ accSuma(2,5));

console.log('primera resta ' + accResta(4));
console.log('segunda resta ' + accResta(1));

console.log('primera multiplicacion ' + accMultiplicar(8));
console.log('segunda multiplicacion ' + accMultiplicar(2));

console.log('primera division ' + accDividir(4));
console.log('segunda division ' + accDividir(2));