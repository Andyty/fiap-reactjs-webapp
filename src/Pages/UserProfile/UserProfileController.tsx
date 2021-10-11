import React, { useState } from 'react';
import { useParams } from 'react-router';
import { IUserProfile } from '../../Models/IUserProfile';
import { UserProfileView } from './UserProfileView';

const UserProfileController: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const user: IUserProfile = {
        id: 1,
        name: "Anderson Yonei",
        email: "anderson.yonei@gmail.com",
        profileImg: "/logo192.png"
    }
    const [userProfile, setUserProfile] = useState<IUserProfile>(user);

    const onSave = (newUserProfile: IUserProfile) => {
        alert(JSON.stringify(newUserProfile));
        setUserProfile(newUserProfile);
    }

    return <UserProfileView userProfile={user} onSaveChange={onSave} />
};

export default UserProfileController;