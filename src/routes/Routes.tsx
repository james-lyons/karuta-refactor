import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Game from '../containers/GameContainer/Game';
import Deck from '../containers/DeckContainer/Deck';
import Profile from '../containers/ProfileContainer/Profile';
import Home from '../components/Home/Home';
import Rules from '../components/Rules/Rules';

interface Props {
    currentUser: string,
    showLoginModal: boolean,
    showRegisterModal: boolean
};

// These any types really should be not that

export default withRouter(({ showLoginModal, showRegisterModal }: any) => {

    const currentUser = localStorage.getItem('uid')

    const PrivateRoute = ({ component: Component , ...rest }: any) => (
        <Route { ...rest } render={(props) => (
            currentUser
            ? <Component { ...props }/>
            : <Redirect to='/' />
        )} />
    );

    return (
        <Switch>
            <Route exact path='/' component={ () =>
                <Home
                    showLoginModal={ showLoginModal }
                    showRegisterModal={ showRegisterModal }
                />}
            />
            <Route path='/game' component={ Game } />
            <Route path='/rules' component={ Rules } />
            <PrivateRoute path='/deck' component={ Deck } />
            <PrivateRoute path='/profile' component={ Profile } />
        </Switch>
    )
});
