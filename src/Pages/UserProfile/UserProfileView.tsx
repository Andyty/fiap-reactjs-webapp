import React from 'react';

export interface IUserProfileViewProps {
    userId: string;
};

export const UserProfileView: React.FC<IUserProfileViewProps> = (props: IUserProfileViewProps) => {
    return (
        <div>
            <h1>{`UserProfile ${props.userId} Page`}</h1>
        </div>
    );
};