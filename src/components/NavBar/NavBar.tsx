import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { styles, Props } from './NavBar.config';

const NavBar = ({ currentUser, setCurrentUser, logout, loginModalSwitch, registerModalSwitch }: Props) => {
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
                <NavLink to='/rules' style={ styles.navLink }>Signup</NavLink>
            </div>
        </nav>
    );

    const authLinks = (
        <nav>
            <div>
            <NavLink exact to='/' style={ styles.navLink }>Home</NavLink>
                <NavLink to='/rules' style={ styles.navLink }>Rules</NavLink>
                <NavLink to='/game' style={ styles.navLink }>Play!</NavLink>
            </div>
            <div style={ styles.rightMenu }>
                <NavLink exact to='/' style={ styles.navLink }>Logout</NavLink>
                <NavLink to='/rules' style={ styles.navLink }>Decks</NavLink>
                <NavLink to='/game' style={ styles.navLink }>Profile</NavLink>
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
