import React  from 'react';
import { IUserProfile } from '../../Models/IUserProfile';
import { UserProfileView } from './UserProfileView';
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {update, logout} from "../../store/modules/user/actions";
import {useHistory} from "react-router";

const UserProfileController: React.FC = () => {
    const userInfo = useSelector((state: RootStateOrAny) => state.userInfox.info);
    const dispatch = useDispatch()
    const history = useHistory();

    if (!userInfo.isLogged) {
        history.push('/login');
    }

    const handleUserUpdate = (newUserProfile: IUserProfile) => {
        if (!newUserProfile.password) {
            alert("Insira uma senha");
        } else if (newUserProfile.password !== newUserProfile.confirmPassword) {
            alert("A senha informada não confere");
        } else {
            dispatch(update(newUserProfile))
        }
    }

    const handleLogout = () => {
        dispatch(logout())
        history.push('/login');
    }

    return <UserProfileView userProfile={userInfo} onUserUpdate={handleUserUpdate} onLogout={handleLogout} />
};

export default UserProfileController;