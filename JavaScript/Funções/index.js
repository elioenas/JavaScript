function saudacao() {

    console.log('Bom dia');
}

saudacao();

function soma() {

    let num = 1;
    let num2 = 3;
    let soma = num + num2;

    console.log('O resultado da soma e ', soma);
}
soma();
// outro modo

function subtracao(x, y) {

    const resultado = x - y;
    return resultado;

}

console.log('o resultado da subtração e ', subtracao(5, 3));