const nomes = ['Daniel', 'Lucas', 'Carvalho', 'Pádua'];

const primeiroNome = nomes.slice(0, nomes.length/2);
const segundoNome = nomes.slice(nomes.length / 2);

console.log(`Os dois primeiros nomes são: ${primeiroNome}`);
console.log(`Os dois últimos nomes são: ${segundoNome}`);