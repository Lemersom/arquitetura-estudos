class Turma {
    #codigo = 0;
    #nota   = 0;

    constructor({codigo, nota}) {
        this.#codigo = codigo;
        this.#nota = nota;
    };

    getCodigo() { return this.#codigo };
    getNota() { return this.#nota };

    setCodigo(codigo) { this.#codigo = codigo};
    setNota(nota) { this.#nota = nota};

    aprovado() {
        if(this.#nota >= 60) return true;
        else return false;
    }
};

export default Turma;