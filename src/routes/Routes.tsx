import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import Game from '../containers/GameContainer/Game';
import Rules from '../components/Rules/Rules';

interface Props {
    currentUser: string,
    showLoginModal: boolean,
    showRegisterModal: boolean
};

// These any types really should be not that

export default withRouter(({ currentUser, showLoginModal, showRegisterModal }: any) => {

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
            {/* <PrivateRoute path='/decks' component={ Decks } />
            <PrivateRoute path='/profile' component={ Profile } /> */}
        </Switch>
    )
});
