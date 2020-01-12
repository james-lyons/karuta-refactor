import React from 'react';
import API_URL from './constants';
import NavBar from './components/NavBar/NavBar';
import Routes from './routes/Routes';

interface State {
    currentUser: string,
    error: null
};

interface Props {
    history: {
        push(url: string): void
    };
};

class App extends React.PureComponent<Props, State> {

    static defaultProps = {
        history
    };

    state: State = {
        currentUser: '',
        error: null
    };

    private setCurrentUser = (userId: string) => {
        localStorage.setItem('uid', userId)
        this.setState({ currentUser: userId });
    };

    private logout = async () => {
        localStorage.removeItem('uid');
        try {
            fetch(`${ API_URL }/auth/logout`, { method: 'POST', credentials: 'include' })
            await this.props.history.push('/');
            await this.setState({ currentUser: '' })
        } catch (error) {
            this.setState({
                error: error.message
            });
        };
    };

    public render() {

        const { currentUser  } = this.state;
        return (
            <>
                <NavBar
                    currentUser={ currentUser }
                    setCurrentUser={ this.setCurrentUser }
                    logout={ this.logout }
                />
                <Routes currentUser={ currentUser }/>
            </>
        );
    }
};

export default App;