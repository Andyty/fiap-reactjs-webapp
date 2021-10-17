export interface IUserProfile {
    id: number;
    nome: string;
    email: string;
    imagemPerfil?: string;
    password?: string;
    confirmPassword?: string;
}