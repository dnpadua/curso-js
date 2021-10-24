const clientes = [
    {
        nome: "Daniel",
        cpf: "12312312312",
        dependentes:
            [{
                nome: "Lucas",
                parentesco: "filho",
                dataNasc: "20/03/2011",
            },
            {
                nome: "Gaby",
                parentesco: "filha",
                dataNasc: "04/04/2014",
            }],
    },
    {
        nome: "Juliana",
        cpf: "12312312332",
        dependentes:
            [{
                nome: "Ana",
                parentesco: "filha",
                dataNasc: "30/02/2020"
            }],
    }
];

const listaDependentes = [...clientes[0].
    dependentes, ...clientes[1].dependentes];

console.log(listaDependentes);