export interface IUserProfile {
    id: number;
    name: string;
    email: string;
    profileImg?: string;
    password?: string;
    confirmPassword?: string;
}