const styles = {

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

export {
    styles,
    RegisterState,
    LoginState
}