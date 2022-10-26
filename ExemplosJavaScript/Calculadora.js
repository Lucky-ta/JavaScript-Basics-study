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


console.log(calculadora(2, 3, '*'));
