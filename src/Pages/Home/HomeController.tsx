import React from 'react';
import { ICourse } from '../../Models/ICourse';
import { HomeView } from './HomeView';

export interface IHomeControllerProps {
    teste?: boolean;
};

const HomeController: React.FC<IHomeControllerProps> = (props: IHomeControllerProps) => {
    const courses: ICourse[] = [];

    for (let i = 0; i < 15; i++) {
        courses.push({ id: i, title: `(${i}) REACT JS`, description: i % 2 ? `(${i}) REACT JS description for the card` : `(${i}) REACT JS description for the card Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias laudantium sapiente optio debitis molestias magni sequi qui`, discount: i % 2 ? 20 : undefined });
    }


    return <HomeView coursesList={courses} />
};

export default HomeController;