function cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += visualViewport
    };
}

const daniel = new cliente("Daniel Pádua", "12312312312", "daniel@email.com", 1000000000);

console.log(daniel);