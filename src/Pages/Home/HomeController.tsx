import React from 'react';
import { HomeView } from './HomeView';
import { RootStateOrAny, useSelector } from 'react-redux';

export interface IHomeControllerProps {
};

const HomeController: React.FC<IHomeControllerProps> = (props: IHomeControllerProps) => {
    const courses = useSelector((state: RootStateOrAny) => state.courseInfo.courses);
    return <HomeView coursesList={courses} />
};

export default HomeController;