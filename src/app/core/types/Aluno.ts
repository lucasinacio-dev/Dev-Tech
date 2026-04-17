import { Turma } from "./Turma";

export interface Aluno {
    id: number,
    matricula: string,
    nome: string,
    dataNascimento: Date,
    foto: string,
    turma: Turma,
    ativo: boolean
}