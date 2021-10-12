const cliente = {
    nome: "Daniel",
    idade: 23,
    cpf: "123.456.789-00",
    email: "danielpadua@email.com",
    fones: ["5563981177788", "55988775566"]
}

cliente.dependentes = {
    nome: "Percivania",
    parentesco: "Mãe",
    dataNasc: "28/10/1968"
}

console.log(cliente);

cliente.dependentes.nome = "Percivania Silva";

console.log(cliente)