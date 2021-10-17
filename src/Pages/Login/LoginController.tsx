import React from 'react';
import { useHistory } from 'react-router';
import { LoginView } from './LoginView';
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {makeLogin} from "../../store/modules/user/actions";

const LoginController: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const userInfo = useSelector((state: RootStateOrAny) => state.userInfox);

    if (userInfo && userInfo.info.isLogged) {
        history.push('/');
    }

    const handleLogin = (email: string, password: string)  => {
        dispatch(makeLogin({ email, password} ));
    }

    return <LoginView handleLogin={handleLogin} />
};

export default LoginController;