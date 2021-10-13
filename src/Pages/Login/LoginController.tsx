import React from 'react';
import { useHistory } from 'react-router';
import { LoginView } from './LoginView';

const LoginController: React.FC = () => {
    const history = useHistory();
    const submitLogin = (email: string, password: string) => {
        history.push('/');
    }

    return <LoginView submitLogin={submitLogin} />
};

export default LoginController;