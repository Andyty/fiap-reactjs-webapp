import React from 'react';
import { LoginView } from './LoginView';

export interface ILoginControllerProps {
    teste?: boolean;
};

const LoginController: React.FC<ILoginControllerProps> = (props: ILoginControllerProps) => {
    return <LoginView />
};

export default LoginController;