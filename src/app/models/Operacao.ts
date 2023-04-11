export class Operacao {
    cpf?: string;
    valor?: string;
    operacao?: string;

    constructor(
        cpf?: string,
        valor?: string,
        operacao?: string,
    ) {
        this.cpf = cpf;
        this.valor = valor;
        this.operacao = operacao;
    }
}
