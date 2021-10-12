const cliente = {
    nome: "Daniel",
    idade: 23,
    cpf: "123.456.789-00",
    email: "danielpadua@email.com",
    fones: ["5563981177788", "55988775566"],
    dependentes: [{
        nome: "Percivania",
        parentesco: "Mãe",
        dataNasc: "28/10/1968"
    }]
}

cliente.dependentes.push({
    nome: "Ana Maria",
    parentesco: "filha",
    dataNasc: "04/01/2015"
});

const filha = cliente.dependentes.filter(dependentes => dependentes.dataNasc === "04/01/2015");

console.log(filha);