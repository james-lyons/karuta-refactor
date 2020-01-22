const styles = {
    modalShow: {
        position: 'fixed',
        background: 'white',
        width: '50vw',
        height: '300px',
        padding: '1rem',
        borderRadius: '5px',
        textAlign: 'center',
    }
};

interface RegisterState {
    username: string,
    email: string,
    password: string,
    password2: string,
    errors: Array<string> | null
};

interface LoginState {
    email: string,
    password: string,
    errors: Array<string>
};

interface Props {
    setCurrentUser: () => {}
};

export {
    styles,
    RegisterState,
    LoginState,
    Props
};
