import React from 'react';
import { styles, LoginState } from '../auth.config';


class Login extends React.PureComponent<{}, LoginState> {
    state: LoginState = {
        email: "",
        password: "",
        errors: []
    };

    private handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = (event) => {
        event.preventDefault();
        const user = this.state;
        axios.post(`${ API_URL }/auth/login`, user, { withCredentials: true })
            .then((res) => {
                console.log(res);
                this.props.setCurrentUser(res.data.id);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    public render() {
        return (
            <div>
                {this.state.error && (
                    <div>
                        { this.state.error }
                        <button type="button" data-dismiss="alert">
                            <span>&times;</span>
                        </button>
                    </div>
                )}
                <section id="login">
                    <form onSubmit={ this.handleSubmit }>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={ this.state.email }
                                onChange={ this.handleChange }
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={ this.state.password }
                                onChange={ this.handleChange }
                                placeholder="password"
                            />
                        </div>
                        <br/>
                        <div>
                            <button type="submit">
                                Login
                                <i></i>
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        );
    };
};

export default Login;