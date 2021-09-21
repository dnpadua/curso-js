const carro = ['Onix', 'Argo', 'Sandero'];
const preco = [45000, 42000, 39000];

const listaDeCarroPreco = [carro, preco];

const exibeCarroPreco = (modeloDoCarro) => {
    if (listaDeCarroPreco[0].includes(modeloDoCarro)) {
        let indice = listaDeCarroPreco[0].indexOf(modeloDoCarro)
        return listaDeCarroPreco[0][indice] + ' está no valor de ' + listaDeCarroPreco[1][indice] + ' reias.'
    } else {
        return 'Veículo não disponível.'
    }
}

console.log(exibeCarroPreco('Onix'));