const cliente = {
    nome: "Daniel",
    idade: 23,
    cpf: "123.456.789-00",
    email: "danielpadua@email.com"
}

console.log(cliente.nome);

console.log(`Tenho ${cliente.idade} anos, meu e-mail é ${cliente.email}.`);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach(info => console.log(cliente[info]));