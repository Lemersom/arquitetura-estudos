import Aluno from "./Aluno.js"
import TurmaPresencial from "./TurmaPresencial.js"

let aluno = new Aluno({nome: "Anna", login: "AnnaJulia", ra: "2410125", turmas: []});

let turma1 = new TurmaPresencial({frequencia: 90, codigo: 1, nota: 100})
let turma2 = new TurmaPresencial({frequencia: 75, codigo: 2, nota: 55})
let turma3 = new TurmaPresencial({frequencia: 60, codigo: 3, nota: 90})

aluno.matricular(turma1)
aluno.matricular(turma2)
aluno.matricular(turma3)

for (let turma of aluno.getTurmas()) {
    console.log(turma.aprovado());
}