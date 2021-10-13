import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { MdHome, MdFavorite, MdShoppingCart } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import "./Navigation.scss"

import { useRouteMatch } from "react-router-dom";

export const Navigation: React.FC<any> = () => {
    let matchLogin = useRouteMatch('/login');

    return (
        <Navbar fixed="top" bg="light" sticky="top" id="navigation-navbar">
            <Navbar.Brand href="/" id="navbar-home" className="me-auto">
                <MdHome size="25px" />
            </Navbar.Brand>
            {!matchLogin?.isExact && <Nav id="navbar-menus" className="justify-content-end">
                <Nav.Link href="/"><MdFavorite size="25px" /></Nav.Link>
                <Nav.Link href="/"><MdShoppingCart size="25px" /></Nav.Link>
                <Nav.Link href="/userProfile"><FaUserCircle size="25px" /></Nav.Link>
            </Nav>}
        </Navbar>
    );
};