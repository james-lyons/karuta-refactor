import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { styles, Props } from './NavBar.config';

const NavBar = ({ currentUser, setCurrentUser, logout }: Props) => {
    const links = (
        <nav style={ styles.navBar }>
            <div>
                <NavLink exact to='/' style={ styles.navLink }>Home</NavLink>
                <NavLink to='/rules' style={ styles.navLink }>Rules</NavLink>
                <NavLink to='/game' style={ styles.navLink }>Play!</NavLink>
            </div>
            <div>
            </div>
        </nav>
    );

    const authLinks = (
        <nav>
            <div>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/rules' style={ styles.navLink }>Rules</NavLink>
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
