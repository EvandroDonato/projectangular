export interface Funcionario{
    id?: number,
    nome: string,
    sobreNome: string,
    departamento: string,
    ativo: boolean,
    turno: string,
    dataDeCriacao?:string,
    dataDeAlteracao?: string,
  }