function imprimeTexto(texto) {
    console.log(texto)
}

imprimeTexto('Bem vindo(a)!');

let listaMarca = ['Ford', 'Chevrolet', 'Fiat']
let listaModelo = ['Ka', 'Onix', 'Argo']

const exibeLista = (lista, descricao) => {
    e = ''
        for (let i = 0; i < lista.length; i++){
            e += '\n'+ descricao + lista [i]
    }
    return e
}

console.log('Nossa loja trabalha com os seguintes carros:')
console.log(exibeLista(listaMarca, 'Marca: '))
console.log(exibeLista(listaModelo, "Modelo: "))