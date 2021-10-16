import React, { useState } from 'react';
import { IUserProfile } from '../../Models/IUserProfile';
import { UserProfileView } from './UserProfileView';
import { RootStateOrAny, useSelector } from "react-redux";

const UserProfileController: React.FC = () => {
    const userInfo = useSelector((state: RootStateOrAny) => state.userInfox.info);
    console.log(useSelector((state: RootStateOrAny) => state))

    const [userProfile, setUserProfile] = useState<IUserProfile>(userInfo);

    const onSave = (newUserProfile: IUserProfile) => {
        alert(JSON.stringify(newUserProfile));
        setUserProfile(newUserProfile);
    }

    return <UserProfileView userProfile={userInfo} onSaveChange={onSave} />
};

export default UserProfileController;