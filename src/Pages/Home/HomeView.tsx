import React from 'react';

export interface IHomeViewProps {
    teste?: boolean;
};

export const HomeView: React.FC<IHomeViewProps> = (props: IHomeViewProps) => {
    return (
        <div>
            <h1>Home Page (Courses List)</h1>
        </div>
    );
};