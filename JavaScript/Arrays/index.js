const alunos = ['Joao', 'Maria', 'Pedro', 'Tiago'];
console.log(alunos);
// pegando o nome pelo indice
console.log(alunos[0]);
//colocando um elemento no final do array
alunos.push('Matheus');
console.log(alunos);
// caso queira adicionar no comeco do array usa o comando unshift
alunos.unshift('khayo');
console.log(alunos);
// excluido atraves do  pop o ultimo elemento do array e retirado 
alunos.pop();
console.log(alunos);
// excluindo atraves do indice
//pegando de um elemento ate o outro 
console.log(alunos.slice(0, 4));