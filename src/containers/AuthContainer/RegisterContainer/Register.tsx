import React from 'react';
import { styles, RegisterState } from '../auth.config';

class Register extends React.PureComponent<{}, RegisterState> {
    state: RegisterState = {
        username: "",
        email: "",
        password: "",
        password2: "",
        errors: null
    }

    private handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = (event) => {
        event.preventDefault();
        const newUser = this.state;
        axios.post(`${ API_URL }/auth/register`, newUser)
            .catch((err) => {
                console.log(err)
                this.setState({
                    errors: [err.response.data]
                });
            });
    };

    public render() {
        return (
            <div>
                { this.state.errors && this.state.errors.map((e, i) => (
                    <div
                        style={{width: '100%'}} role="alert" key={ i }>
                        { e.message }
                        <button data-dismiss="alert">
                            <span aria-hidden="true">&times;</span>
                        </button>    
                    </div>
                ))}
                <section id="register">
                    <form onSubmit={ this.handleSubmit }>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={ this.state.username }
                                onChange={ this.handleChange }
                                placeholder="Example: EatMyDust"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={ this.state.email }
                                onChange={ this.handleChange }
                                placeholder="example@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={ this.state.password }
                                onChange={ this.handleChange }
                                placeholder="Password"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Confirm Password</label>
                            <input
                                type="password"
                                id="password2"
                                name="password2"
                                value={ this.state.password2 }
                                onChange={ this.handleChange }
                                placeholder="Password"
                            />
                        </div>
                        <br/>                              
                        <div>
                            <div>
                                Cancel
                            </div>
                            <button type="submit">
                                Register
                                <i></i>
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        );
    };
};

export default Register;