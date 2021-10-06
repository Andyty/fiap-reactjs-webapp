import React from 'react';

export interface ILoginViewProps {
    teste?: boolean;
};

export const LoginView: React.FC<ILoginViewProps> = (props: ILoginViewProps) => {
    return (
        <div>
            <h1>Login Page</h1>
        </div>
    );
};