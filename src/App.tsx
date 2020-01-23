import React from 'react';
import API_URL from './constants';
import NavBar from './components/NavBar/NavBar';
import Routes from './routes/Routes';
import Register from './containers/AuthContainer/RegisterContainer/Register'
import Login from './containers/AuthContainer/LoginContainer/Login'

interface State {
    currentUser: string,
    showRegisterModal: boolean,
    showLoginModal: boolean,
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
        showRegisterModal: false,
        showLoginModal: false,
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
            await this.setState({ currentUser: '' });
        } catch (error) {
            this.setState({
                error: error.message
            });
        };
    };

    loginModalSwitch = () => {
        const { showLoginModal } = this.state
        this.setState({
            showLoginModal: !showLoginModal,
            showRegisterModal: false
        });
    };
    
    registerModalSwitch = () => {
        const { showRegisterModal } = this.state
        this.setState({
            showRegisterModal: !showRegisterModal,
            showLoginModal: false
        });
    };

    public render() {

        const { currentUser, showLoginModal, showRegisterModal  } = this.state;
        const { setCurrentUser, loginModalSwitch, registerModalSwitch, logout } = this

        return (
            <>
                <NavBar
                    currentUser={ currentUser }
                    loginModalSwitch={ loginModalSwitch }
                    registerModalSwitch={ registerModalSwitch }
                    setCurrentUser={ setCurrentUser }
                    logout={ logout }
                />
                { showLoginModal && <Login setCurrentUser={ setCurrentUser }/> }
                { showRegisterModal && <Register /> }
                <Routes
                    showLoginModal={ showLoginModal } 
                    showRegisterModal={ showRegisterModal }
                    currentUser={ currentUser }
                />
            </>
        );
    }
};

export default App;