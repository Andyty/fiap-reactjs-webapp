import { ICourse } from "./ICourse";

export interface ICourseDetail extends ICourse {
    nivel: string;
    preco_original: string;
    preco_promocional: string;
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