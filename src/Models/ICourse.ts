export interface ICourse {
    id: number;
    nome: string;
    descricao: string;
    porcDesconto?: number;
    urlImagem?: string;
}