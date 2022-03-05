class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserirCliente(cliente) {
        this.clientes.push(cliente);
    }
    buscarClienteCpf(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    removerCliente(cpf) {
        const clienteARemover = this.buscarClienteCpf(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    listarClientes() {
        return this.clientes;
    }
}
