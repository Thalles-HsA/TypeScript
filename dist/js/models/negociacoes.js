export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    list() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
