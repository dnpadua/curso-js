const cliente = {
    nome: "Daniel",
    idade: 23,
    cpf: "123.456.789-00",
    email: "danielpadua@email.com",
    fones: ["5563981177788", "55988775566"],
    dependentes: [
        {
        nome: "Percivania",
        parentesco: "Mãe",
        dataNasc: "28/10/1968" },
        {
        nome: "Percivania",
        parentesco: "Mãe",
        dataNasc: "28/10/1968"
        }
    ],
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor
    }
}

let relatorio = "";

for (let dados in cliente) {
    if (typeof cliente[dados] === "object" || typeof cliente[dados] === "function") {
        continue
    } else {
        relatorio += `
        ${dados} ===> ${cliente[dados]}
        `
    }
}

console.log(relatorio);