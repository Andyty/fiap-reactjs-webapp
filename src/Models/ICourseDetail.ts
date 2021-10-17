import { ICourse } from "./ICourse";

export interface ICourseDetail extends ICourse {
    nivel: string;
    preco_original: number;
    preco_promocional: number;
    modulos: ICourseModule[];
}

export interface ICourseModule {
    nome: string;
    carga_horaria: string;
    conteudos: ICourseModuleContent[]
}

export interface ICourseModuleContent {
    descricao: string;
}