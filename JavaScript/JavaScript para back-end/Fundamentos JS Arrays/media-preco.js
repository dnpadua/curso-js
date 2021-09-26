const hatch = [48000, 50000, 55000, 58000, 45000];
const sedan = [60000, 75000, 64000, 58000, 70000];
const suv = [85000, 90000, 110000, 100000, 98000];

function mediaPreco(mediaPrecoModelo) {
    const somaPreco = mediaPrecoModelo.reduce((acum, atual) => atual + acum, 0)
    return somaPreco/mediaPrecoModelo.length
}

console.log(`A média de preço de um carro hatch é de R$ ${mediaPreco(hatch)},00.`);
console.log(`A média de preço de um carro sedan é de R$ ${mediaPreco(sedan)},00.`);
console.log(`A média de preço de um carro suv é de R$ ${mediaPreco(suv)},00.`);