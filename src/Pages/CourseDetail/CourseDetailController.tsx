import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ICourseDetail } from '../../Models/ICourseDetail';
import { CourseDetailView } from './CourseDetailView';

const CourseDetailController: React.FC = () => {

    const [course, setCourse] = useState<ICourseDetail>();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        // TODO: call backend and remove mock
        const c: ICourseDetail = {
            "id": 1,
            "nivel": "INICIANTE",
            "nome": "Orientação a Objetos com Java",
            "descricao": "Aprenda a programar orientado a objetos com Java",
            "preco_original": "150.0",
            "preco_promocional": "120.0",
            "porc_desconto": 20,
            "url_imagem": "https://img-c.udemycdn.com/course/240x135/969548_48c9_5.jpg",
            "modulos": [
                {
                    "nome": "História do Java e Conceitos Iniciais de OO",
                    "carga_horaria": "1h 18m",
                    "conteudos": []
                },
                {
                    "nome": "Instalando o Java e o Eclipse",
                    "carga_horaria": "42m",
                    "conteudos": [
                        {
                            "descricao": "JRE vs JDK"
                        },
                        {
                            "descricao": "Instalando o JDK no Mac"
                        },
                        {
                            "descricao": "Instalando o JDK no Linux"
                        },
                        {
                            "descricao": "Instalando o JDK no Windows"
                        },
                        {
                            "descricao": "Instalando o JDK no Windows"
                        },
                        {
                            "descricao": "Eclipse"
                        },
                        {
                            "descricao": "Instalando o Eclipse no Mac"
                        },
                        {
                            "descricao": "Instalando o Eclipse no Linux"
                        },
                        {
                            "descricao": "Conhecendo o Eclipse"
                        }
                    ]
                },
                {
                    "nome": "Pacotes, Herança, Associações e Polimorfismo",
                    "carga_horaria": "2h 37m",
                    "conteudos": [
                        {
                            "descricao": "Desenvolvendo Classes com o Eclipse"
                        },
                        {
                            "descricao": "Pacotes"
                        },
                        {
                            "descricao": "Arrays"
                        },
                        {
                            "descricao": "Associações"
                        },
                        {
                            "descricao": "Herança"
                        },
                        {
                            "descricao": "Reescrita de Métodos"
                        },
                        {
                            "descricao": "Polimorfismo"
                        },
                        {
                            "descricao": "Pilares da OO"
                        }
                    ]
                }
            ]
        }
        setCourse(c);
    }, [])

    return <CourseDetailView courseDetail={course} />
};

export default CourseDetailController;