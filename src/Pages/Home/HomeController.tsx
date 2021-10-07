import React from 'react';
import { ICourse } from '../../Models/ICourse';
import { HomeView } from './HomeView';

export interface IHomeControllerProps {
    teste?: boolean;
};

const HomeController: React.FC<IHomeControllerProps> = (props: IHomeControllerProps) => {
    const courses: ICourse[] = [];

    for (let i = 0; i < 15; i++) {
        courses.push({ id: i, title: `(${i}) REACT JS`, description: `(${i}) REACT JS description for the card` });
    }


    return <HomeView coursesList={courses} />
};

export default HomeController;