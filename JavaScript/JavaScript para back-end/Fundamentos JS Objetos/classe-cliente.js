class Cliente{
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

const daniel = new Cliente("Daniel", "daniel@email.com", "12312312312", 1000000000000);

console.log(daniel);