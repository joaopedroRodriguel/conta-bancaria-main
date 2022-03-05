class Cliente {

    private _nome: string;
    private _cpf: string;
    private _conta: number;

    constructor(nome: string, cpf: string, conta: number) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    get conta(): number {
        return this._conta;
    }

    set conta(value: number) {
        this._conta = value;
    }

    toString(): string {
        return `Nome: ${this.nome} - Cpf: ${this.cpf} - Conta: ${this.conta}`;
    }

}
