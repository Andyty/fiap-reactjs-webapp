import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { IUserProfile } from '../../Models/IUserProfile';
import "./UserProfileView.scss";
import { FaUserCircle } from 'react-icons/fa';
import Button from 'react-bootstrap/Button'

export interface IUserProfileViewProps {
    userProfile: IUserProfile
    onUserUpdate: any;
    onLogout: any;
};

export const UserProfileView: React.FC<IUserProfileViewProps> = (props: IUserProfileViewProps) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [nome, setNome] = useState<string>(props.userProfile.nome)
    const [email, setEmail] = useState<string>(props.userProfile.email)
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPass] = useState<string>("")

    const saveChange = () => {
        const newUser: IUserProfile = {
            id: props.userProfile.id,
            nome: nome,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }
        props.onUserUpdate(newUser);
        setEditMode(false);
    }

    const onFileSelect = (e: React.ChangeEvent) => {
        // TODO: implement image change
    }

    return (
        <Container id="user-profile-container">
            <FaUserCircle className="user-profile-icon" size="100px" />
            <div id="user-profile-form">
                <Form>
                    <Form.Group className="mb-3" controlId="user-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            plaintext={!editMode}
                            readOnly={!editMode}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="user-email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            plaintext={true}
                            readOnly={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    {editMode && <Form.Group className="mb-3" controlId="user-password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            plaintext={!editMode}
                            readOnly={!editMode}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>}

                    {editMode && <Form.Group className="mb-3" controlId="user-confirm-password">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            plaintext={!editMode}
                            readOnly={!editMode}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPass(e.target.value)}
                        />
                    </Form.Group>}
                    <div className="d-grid gap-2">
                        {editMode && <Button variant="primary" type="submit" onClick={saveChange}>Salvar</Button>}
                        {editMode && <Button variant="primary" type="submit" onClick={() => { setEditMode(false) }}>Cancelar</Button>}
                        {!editMode && <Button variant="primary" onClick={() => { setEditMode(true) }}>Editar</Button>}
                        {!editMode && <Button variant="danger" onClick={props.onLogout}>Sair</Button>}
                    </div>
                </Form>
            </div>
        </Container>
    );
};