import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import Game from '../containers/GameContainer/Game';

interface Props {
    currentUser: string,
};

// These any types really should be not that

export default withRouter(({ currentUser }: any) => {
    const PrivateRoute = ({ component: Component , ...rest }: any) => (
        <Route { ...rest } render={(props) => (
            currentUser
            ? <Component { ...props } />
            : <Redirect to='/' />
        )} />
    );
    return (
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/game' component={ Game } />
        </Switch>
    )
});
