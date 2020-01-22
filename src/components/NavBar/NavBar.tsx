import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { styles, Props } from './NavBar.config';

const NavBar = ({ setCurrentUser, logout, loginModalSwitch, registerModalSwitch }: Props) => {
    const currentUser = localStorage.getItem('uid');

    const links = (
        <nav style={ styles.navBar }>
            <div>
                <NavLink exact to='/' style={ styles.navLink }>Home</NavLink>
                <NavLink to='/rules' style={ styles.navLink }>Rules</NavLink>
                <NavLink to='/game' style={ styles.navLink }>Play!</NavLink>
            </div>
            <div style={ styles.rightMenu }>
                <button onClick={() => loginModalSwitch() } style={ styles.navLink }>Login</button>
                <button onClick={() => registerModalSwitch() } style={ styles.navLink }>Register</button>
            </div>
        </nav>
    );

    const authLinks = (
        <nav style={ styles.navBar }>
            <div>
                <NavLink exact to='/' style={ styles.navLink }>Home</NavLink>
                <NavLink to='/rules' style={ styles.navLink }>Rules</NavLink>
                <NavLink to='/game' style={ styles.navLink }>Play!</NavLink>
            </div>
            <div style={ styles.rightMenu }>
                {/* <NavLink exact to='/' style={ styles.navLink }>Logout</NavLink> */}
                <button onClick={() => logout() } style={ styles.navLink }>Logout</button>
                <NavLink to='/decks' style={ styles.navLink }>Decks</NavLink>
                <NavLink to='/profile' style={ styles.navLink }>Profile</NavLink>
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
