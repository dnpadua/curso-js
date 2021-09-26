const modelos = ['Argo', 'Onix', 'Sandero'];
const valores = [55000, 60000, 53000];

const modeloMaisBarato = modelos.filter((_, indice) => valores[indice] < 54000);

console.log(`O veículo mais em conta disponível é o ${modeloMaisBarato}.`);