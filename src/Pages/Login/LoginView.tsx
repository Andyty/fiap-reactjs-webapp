import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./LoginView.scss";

export interface ILoginViewProps {
    handleLogin: (email: string, password: string) => void;

};

export const LoginView: React.FC<ILoginViewProps> = (props: ILoginViewProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onEnterPress = (e: React.KeyboardEvent) => {
        //it triggers by pressing the enter key
        if (e.key === 'Enter') {
            props.handleLogin(email, password);
        }
    }

    return (
        <Container id="login-container">
            <div id="login-form">
                <Form>
                    <Form.Group className="mb-3" controlId="user-email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="user-password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyPress={onEnterPress}
                        />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="button" onClick={() => props.handleLogin(email, password)}>Entrar</Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
};