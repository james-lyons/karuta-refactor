import React from 'react';
import { styles, State } from './profile.config';
import API_URL from '../../constants';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';

class Profile extends React.PureComponent<{}, State> {
    state: State = {
        user: {
            username: "",
            profile_image: "",
            decks: [],
            decks_created: 0,
            games_played: 0,
            games_won: 0,            
        },
        edit_username: "",
        edit_email: "",
        edit_profile_image: "",
        profile_edit_display: "none",
        errors: null
    };

    private componentDidMount = async () => {
        const currentUSer = localStorage.getItem('uid');
        try {

            const res = await fetch(`${ API_URL }/user/${ currentUSer }`, {
                credentials: 'include'
            });

            const data = await res.json();

            await this.setState({
                user: data.data,
                edit_username: data.username,
                edit_email: data.email,
                edit_profile_image: data.profile_image
            });

            // console.log(res);
            // console.log(data)
            console.log(this.state.user)
        } catch (err) {
            this.setState({
                errors: err
            });
            console.log(err)
        };
    };

    private onProfileEdit = async (event) => {
        const currentUser = localStorage.getItem('uid');
        const username = this.state.edit_username;
        const email = this.state.edit_email;
        const profile_image = this.state.edit_profile_image;
        const user = { username, email, profile_image };

        try {
            fetch(`${ API_URL }/user/${ currentUser }`, {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify(user)
            })
        } catch (err) {
            this.setState({
                errors: err
            });
        };
    };

    private handleChange = () => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    public showEditButton = () => {
        this.state.profile_edit_display === "none" ?
        this.setState({ profile_edit_display: '' }) :
        this.setState({ profile_edit_display:'none' })
    };

    public render() {

        const {
            user,
            edit_email,
            edit_username,
            edit_profile_image,
            profile_edit_display
        } = this.state;

        const {
            onEditInputChange,
            onDeckDelete,
            onProfileEdit,
            onInputChange,
            showProfileEditButton 
        } = this;

        return (
            <div style={ styles.body }>
                <h1>hello profile</h1>
                <ProfileComponent
                    user={ user }
                    edit_email={ edit_email }
                    edit_username={ edit_username }
                    edit_profile_image={ edit_profile_image }
                    profile_edit_display={ profile_edit_display }
                    onEditInputChange={ onEditInputChange }
                    onDeckDelete={ onDeckDelete }
                    onProfileEdit= { onProfileEdit }
                    onInputChange={ onInputChange }
                    showProfileEditButton={ showProfileEditButton }
                />
            </div>
        );
    };
};

export default Profile;