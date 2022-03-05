class Clientes {

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
    }

    inserirCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    buscarClienteCpf(cpf: string): Cliente {
        return this.clientes.find(
            cliente => cliente.cpf === cpf
        );
    }

    removerCliente(cpf: string): void {
        const clienteARemover = this.buscarClienteCpf(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }

    listarClientes(): Array<Cliente> {
        return this.clientes;
    }
}
