import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { IUserProfile } from '../../Models/IUserProfile';
import "./UserProfileView.scss";
import Image from 'react-bootstrap/Image';
import { FaUserCircle } from 'react-icons/fa';
import Button from 'react-bootstrap/Button'

export interface IUserProfileViewProps {
    userProfile: IUserProfile
    onSaveChange: (newUserProfile: IUserProfile) => void;
};

export const UserProfileView: React.FC<IUserProfileViewProps> = (props: IUserProfileViewProps) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>(props.userProfile.name)
    const [email, setEmail] = useState<string>(props.userProfile.email)
    const [password, setPassword] = useState<string>("")
    const [confirmPass, setConfirmPass] = useState<string>("")

    const saveChange = () => {
        const newUser: IUserProfile = {
            id: props.userProfile.id,
            name: name,
            email: email,
            password: password !== "" ? password : undefined,
            confirmPassword: confirmPass !== "" ? confirmPass : undefined,
        }
        props.onSaveChange(newUser);
        setEditMode(false);
    }

    const onFileSelect = (e: React.ChangeEvent) => {
        // TODO: implement image change
    }

    return (
        <Container id="user-profile-container">
            {!props.userProfile.profileImg && <FaUserCircle className="user-profile-icon" size="100px" />}
            {props.userProfile.profileImg && <Image id="user-profile-img" src={`${props.userProfile.profileImg}`} roundedCircle />}
            <Form.Group className="position-relative mb-3">
                <Form.Label id="user-profile-img-input-label" htmlFor="user-profile-img-input">Alterar foto do perfil</Form.Label>
                <Form.Control
                    id="user-profile-img-input"
                    type="file"
                    name="file"
                    onChange={onFileSelect}
                />
            </Form.Group>
            <div id="user-profile-form">
                <Form>
                    <Form.Group className="mb-3" controlId="user-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            plaintext={!editMode}
                            readOnly={!editMode}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="user-email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            plaintext={!editMode}
                            readOnly={!editMode}
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
                            value={confirmPass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                        />
                    </Form.Group>}
                    <div className="d-grid gap-2">
                        {editMode && <Button variant="primary" type="submit" onClick={saveChange}>Salvar</Button>}
                        {editMode && <Button variant="primary" type="submit" onClick={() => { setEditMode(false) }}>Cancelar</Button>}
                        {!editMode && <Button variant="primary" onClick={() => { setEditMode(true) }}>Editar</Button>}
                    </div>
                </Form>
            </div>
        </Container>
    );
};