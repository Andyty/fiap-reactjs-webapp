import React from 'react';
import { Button, Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { MdHome, MdSearch, MdFavorite, MdShoppingCart } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import "./Navigation.scss"

export const Navigation: React.FC<any> = (props) => {
    return (
        <Navbar fixed="top" bg="light" sticky="top" expand="md" id="navigation-navbar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand href="/" id="navbar-home">
                    <MdHome size="25px" />
                </Navbar.Brand>
                <Container id="navbar-search-container">
                    <Form>
                        <InputGroup id="navbar-search">
                            <FormControl
                                type="search"
                                placeholder="O que você quer aprender?"
                                aria-label="O que você quer aprender?"
                                aria-describedby="search-button"
                            />
                            <Button id="search-button" variant="outline-secondary">
                                <MdSearch size="25px" />
                            </Button>
                        </InputGroup>
                    </Form>
                </Container>
                <Nav id="navbar-menus">
                    <Nav.Link href="/"><MdFavorite size="25px" /></Nav.Link>
                    <Nav.Link href="/"><MdShoppingCart size="25px" /></Nav.Link>
                    <Nav.Link href="/user/testeID_123"><FaUserCircle size="25px" /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};