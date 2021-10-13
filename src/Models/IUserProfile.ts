export interface IUserProfile {
    id: number;
    nome: string;
    email: string;
    imagemPerfil?: string;
    senha?: string;
    senhaConfirmacao?: string;
}