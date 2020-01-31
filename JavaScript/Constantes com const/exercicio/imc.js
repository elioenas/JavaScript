const nome = 'Elioenas';
const sobrenome = 'Batista ';
const idade = 23;
const peso = 95;

const alturaEmM = 1.67;
let indiceMassaCorporal; // peso / (altura X altura)
let anoNascimento;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2019 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);