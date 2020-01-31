/*salvando a variavel joao  na memoria,existe duas maneiras de 
salvar uma e usando let e outro e var*/

let nome = 'Cesar';
//var nome = 'João';

//forma geral sem ao let

console.log('João nasceu em 1950');
console.log('Conheceu Maria em 1970');
console.log('Casou com Maria em 1980');
console.log('João teve dois filhos com Maria');
console.log('Pedro e Miguel sao filhos de João e Maria');

//com o let 

console.log(nome, ' nasceu em 1950');
console.log('Conheceu Maria em 1970');
console.log('Casou com Maria em 1980');
console.log(nome, 'teve dois filhos com Maria');
console.log('Pedro e Miguel sao filhos de ',
    nome, ' e Maria');

// caso queiira so exibir na tela o nome da variavel

console.log(nome);