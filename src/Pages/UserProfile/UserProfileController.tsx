import React from 'react';
import { useParams } from 'react-router';
import { UserProfileView } from './UserProfileView';

export interface IUserProfileControllerProps {
    teste?: boolean;
};

const UserProfileController: React.FC<IUserProfileControllerProps> = (props: IUserProfileControllerProps) => {
    const { id } = useParams<{ id: string }>();

    return <UserProfileView userId={id} />
};

export default UserProfileController;