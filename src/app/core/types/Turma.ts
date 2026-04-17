export interface Turma {
    id: number,
    nome: string,
    turno: Turno,
    anoLetivo: number,
    ativa: boolean
}

export enum Turno {
    MANHA, TARDE, NOITE
}