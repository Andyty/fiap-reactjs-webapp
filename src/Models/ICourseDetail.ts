import { ICourse } from "./ICourse";

export interface ICourseDetail extends ICourse {
    nivel: string;
    precoOriginal: number;
    precoPromocional: number;
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