import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
    currentUser: string,
    setCurrentUser: (userId: string) => void,
    logout: (userId: string) => void
};

const NavBar = ({ currentUser, setCurrentUser, logout }: Props) => {
    const links = (
        <nav>
            <div>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/game'>Play!</NavLink>
            </div>
            <div>
            </div>
        </nav>
    );

    const authLinks = (
        <nav>
            <div>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/game'>Play!</NavLink>
            </div>
            <div>
            </div>
        </nav>
    );

    return (
        <>
            { currentUser ? authLinks : links }
        </>
    );
};

export default NavBar;