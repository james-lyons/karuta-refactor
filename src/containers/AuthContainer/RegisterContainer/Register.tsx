import React from 'react';
import { styles, RegisterState } from '../auth.config';
import API_URL from '../../../constants';

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

    // private handleSubmit = (event) => {
    //     event.preventDefault();
    //     const newUser = this.state;
    //     axios.post(`${ API_URL }/auth/register`, newUser)
    //         .catch((err) => {
    //             console.log(err)
    //             this.setState({
    //                 errors: [err.response.data]
    //             });
    //         });
    // };

    private handleSubmit = async (event: any) => {
        event.preventDefault();

        const { username, email, password, password2 } = this.state;
        const newUser = { username, email, password, password2 };

        try {
            let res = await fetch(`${ API_URL }/auth/register`,
            { 
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newUser),
            })
            const data = await res.json();
            if (data.errors) {
                this.setState({
                    errors: data.errors
                });
            };
        } catch (error) {
            this.setState({
                errors: error
            });
            console.log(error);
        };
    };
    
    public render() {
        const { username, email, password, password2, errors } = this.state;
        
        return (
            <div>
                { errors && errors.map((e, i) => (
                    <div
                        style={{ width: '100%' }} role="alert" key={ i }>
                        { e.message }
                        <button data-dismiss="alert">
                            <span aria-hidden="true">&times;</span>
                        </button>    
                    </div>
                ))}
                { errors && console.log(errors) }
                <section id="register">
                    <form onSubmit={ this.handleSubmit }>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={ username }
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
                                value={ email }
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
                                value={ password }
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
                                value={ password2 }
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