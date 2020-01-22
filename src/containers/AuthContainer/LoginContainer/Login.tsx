import React from 'react';
import { styles, LoginState, Props } from '../auth.config';
import API_URL from '../../../constants';

class Login extends React.PureComponent<Props, LoginState> {
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

    // private handleSubmit = async (event) => {
    //     event.preventDefault();
    //     axios.post(`${ API_URL }/auth/login`, user, { withCredentials: true })
    //         .then((res) => {
    //             console.log(res);
    //             this.props.setCurrentUser(res.data.id);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    private handleSubmit = async (event: any) => {
        event.preventDefault();

        const { email, password } = this.state;
        const user = { email, password };
        const { setCurrentUser } = this.props;
        
        try {
            let res = await fetch(`${ API_URL }/auth/login`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
            let data = await res.json();
            await setCurrentUser(data.id);
            console.log(data.id)
        } catch (error) {
            this.setState({
                errors: error.message
            });
            console.log(error);
        };
    };

    // private handleSubmit = async (event: any) => {
    //     event.preventDefault();

    //     const { email, password } = this.state;
    //     const user = { email, password };
    //     const { setCurrentUser } = this.props;
    //     let response;
        
    //     fetch(`${ API_URL }/auth/login`,
    //         {
    //             method: 'POST',
    //             credentials: 'include',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify(user)
    //         })
    //     .then((res) => {
    //         response = res.json();
    //         setCurrentUser(res);
    //     })
    //     .catch((err) => {
    //         this.setState({ errors: err })
    //     });
    // };

    public render() {
        const { email, password, errors } = this.state;

        return (
            <div>
                { errors && (
                    <div>
                        { errors }
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
                                value={ email }
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
                                value={ password }
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