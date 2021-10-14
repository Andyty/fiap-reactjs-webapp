import React, {useState} from 'react';
import {Button, Container, Form, FormControl, InputGroup, Nav, Navbar} from 'react-bootstrap';
import {MdHome, MdFavorite, MdShoppingCart, MdSearch} from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import "./Navigation.scss"

import { useRouteMatch } from "react-router-dom";
import {useDispatch} from "react-redux";
import {searchCourseByName} from "../../store/modules/course/actions";

export const Navigation: React.FC<any> = () => {
    let matchLogin = useRouteMatch('/login');
    const [searchTerm, setSearchTerm ] = useState('');
    const dispatch = useDispatch()

    const handleSearchTermChanges = (event: any) => {
        setSearchTerm(event.target.value);
    }

    const handleSearchCourseByName = () => {
        dispatch(searchCourseByName(searchTerm));
    }

    return (
        <Navbar fixed="top" bg="light" sticky="top" id="navigation-navbar">
            <Navbar.Brand href="/" id="navbar-home" className="me-auto">
                <MdHome size="25px" />
            </Navbar.Brand>
            <Container id="navbar-search-container">
                <Form onSubmit={event => {event.preventDefault()}}>
                    <InputGroup id="navbar-search">
                        <FormControl
                            type="search"
                            placeholder="O que você quer aprender?"
                            aria-label="O que você quer aprender?"
                            aria-describedby="search-button"
                            onChange={handleSearchTermChanges}
                            onKeyPress={event => {
                                if (event.key == "Enter") {
                                    handleSearchCourseByName()
                                }}
                            }
                        />
                        <Button id="search-button" type="button" variant="outline-secondary" onClick={handleSearchCourseByName}>
                            <MdSearch size="25px" />
                        </Button>
                    </InputGroup>
                </Form>
            </Container>
            {!matchLogin?.isExact && <Nav id="navbar-menus" className="justify-content-end">
                <Nav.Link href="/"><MdFavorite size="25px" /></Nav.Link>
                <Nav.Link href="/"><MdShoppingCart size="25px" /></Nav.Link>
                <Nav.Link href="/userProfile"><FaUserCircle size="25px" /></Nav.Link>
            </Nav>}
        </Navbar>
    );
};