function cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += visualViewport
    };
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup
}

const Daniel = new clientePoupanca("Daniel", "5563911112222", "daniel@email.com", 100000000, 20000);

console.log(Daniel);

clientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor
}

Daniel.depositarPoup(99);

console.log(Daniel.saldoPoup);