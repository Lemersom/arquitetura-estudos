import Turma from "./Turma.js"

class TurmaPresencial extends Turma {
    #frequencia = 0;

    constructor({frequencia, codigo, nota}) {
        super({codigo: codigo, nota: nota});
        this.#frequencia = frequencia;
    };

    aprovado() {
        if (super.aprovado() && this.#frequencia >= 75) return true;
        else return false;
    }
}

export default TurmaPresencial;