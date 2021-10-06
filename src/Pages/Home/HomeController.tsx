import React from 'react';
import { HomeView } from './HomeView';

export interface IHomeControllerProps {
    teste?: boolean;
};

const HomeController: React.FC<IHomeControllerProps> = (props: IHomeControllerProps) => {
    return <HomeView />
};

export default HomeController;