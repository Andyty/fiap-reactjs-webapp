import React from 'react';
import { ICourse } from '../../Models/ICourse';
import { HomeView } from './HomeView';

const HomeController: React.FC = () => {
    const courses: ICourse[] = [];

    for (let i = 0; i < 15; i++) {
        courses.push(
            {
                id: i,
                nome: `(${i}) REACT JS`,
                descricao: i % 2 ? `(${i}) REACT JS description for the card` : `(${i}) REACT JS description for the card Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias laudantium sapiente optio debitis molestias magni sequi qui`,
                porc_desconto: i % 2 ? 20 : undefined
            }
        );
    }


    return <HomeView coursesList={courses} />
};

export default HomeController;