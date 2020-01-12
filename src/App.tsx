import React from 'react';
import API_URL from './constants';
import NavBar from './components/NavBar/NavBar';
import Routes from './routes/Routes';

interface State {
    currentUser: string,
    error: null
};

class App extends React.PureComponent<{}, State> {
    state: State = {
        currentUser: '',
        error: null
    };

    private setCurrentUser = (userId: string) => {
        localStorage.setItem('uid', userId)
        this.setState({ currentUser: userId });
    };

    private logout = () => {
        localStorage.removeItem('uid');
        try {
            fetch(`${ API_URL }/auth/logout`, { credentials: 'include' })
        } catch (error) {
            this.setState({
                error: error.message
            });
        };
    };

    public render() {

        return (
            <>
                <NavBar />
                <Routes />
            </>
        );
    }
};

export default App;