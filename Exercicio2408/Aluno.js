import Turma from "./Turma.js"

class Aluno {
    #nome  = "";
    #login = "";
    #ra    = "";
    // #turma = new Turma({codigo: 0, nota: 0});
    #turmas = [];

    constructor({nome, login, ra, turmas}) {
        this.#nome = nome;
        this.#login = login;
        this.#ra = ra;
        this.#turmas = turmas
    };

    getNome() { return this.#nome };
    getLogin() { return this.#login };
    getRa() { return this.#ra };
    getTurmas() { return this.#turmas };

    setNome(nome) { this.#nome = nome};
    setLogin(login) { this.#login = login};
    setRa(ra) { this.#ra = ra };

    matricular(turma) {
        this.#turmas.push(turma)
    }
};

export default Aluno;