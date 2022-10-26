function calculadora(num1, num2, operacao) {
    if (operacao == '+') {
        return num1 + num2;
    }

    if (operacao == '-') {
        return num1 - num2;
    }

    if (operacao == '/') {
        return num1 / num2;
    }

    if (operacao == '*') {
        return num1 * num2;
    }

    else {
        console.log('Operação inválida!')
    }
}

// soma
console.log(calculadora(2, 3, '+'));

// subtração
console.log(calculadora(2, 3, '-'));

// divisão
console.log(calculadora(2, 3, '/'));

// multiplicação
console.log(calculadora(2, 3, '*'));

