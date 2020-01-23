import React, { FC } from 'react';
import API_URL from '../../constants';
import styles from './profileComponent.config';

interface Props {
    user: User,
    onProfileEdit: FC
    edit_username: string,
    edit_email: string,
    edit_profile_image: string,
    profile_edit_display: string,
    onEditInputChange: FC,
    showProfileEditButton: FC
};

interface User {
    username: string,
    profile_image: string,
    decks: object,
    decks_created: number,
    games_played: number,
    games_won: number, 
}

const ProfileComponent: React.SFC<Props> = ({
    user:
    {
        username,
        profile_image,
        decks,
        decks_created,
        games_played,
        games_won,
    },
    edit_email,
    edit_username,
    edit_profile_image,
    onEditInputChange,
    onProfileEdit,
    profile_edit_display,
    showProfileEditButton,
}) => {

    const onDeckDelete = async (deck: any) => {
        try {
            await fetch(`${ API_URL }/deck/${ deck._id }`, {
                method: 'DELETE',
                credentials: 'include'
            });
            await window.location.reload();
        } catch (err) {
            console.log(err)
        };
    };

    const mapper = (decks: any) => {
        const deckArr = decks.map((deck: any) => 
            <div style={ styles.profileDecksDiv }>
                <h1 style={ styles.profileDecksDivH1 }>
                    { deck.title }
                </h1>
                <h1 style={ styles.profileDecksDivH1 }>
                    Number of Cards: { deck.cards.length }
                </h1>
                <button id={ deck._id }
                onClick={ () => onDeckDelete(deck) }>
                    Delete Deck
                </button>
            </div>
        );
        return deckArr;
    };

    return (
        <>
            <section style={ styles.profileSection }>
                <img style={ styles.profileImage } src={ profile_image } alt="profile image" />
                <div style={ styles.profileItems }>
                    <p>Username: { username }</p>
                    <p>Decks Created: { decks_created }</p>
                    <p>Played Games: { games_played }</p>
                    <p>Games Won: { games_won }</p>
                    <button onClick={ () => showProfileEditButton() }>
                        Edit Profile
                    </button>
                </div>
                <div style={ styles.editProfileFormDiv }>
                    <form onSubmit={ onProfileEdit }>
                    <input 
                            onChange={ onEditInputChange }
                            type="text"
                            id="edit_username"
                            name="edit_username"
                            placeholder="KardMaster"
                            value={ edit_username }
                        />
                        <br />
                        <input 
                            onChange={ onEditInputChange }
                            type="text"
                            id="edit_email"
                            name="edit_email"
                            placeholder="email@email.com"
                            value={ edit_email }
                        />
                        <br />
                        <input 
                            onChange={ onEditInputChange }
                            type="text"
                            id="profile_image"
                            name="profile_image"
                            placeholder="image address here"
                            value={ edit_profile_image }
                        />
                        <br />
                        <button
                            type="submit"
                            id="edit-profile"
                        >
                                Edit profile
                        </button>
                    </form>
                </div>
            </section>
            <div style={ styles.profileDecks }>
                { decks && mapper(decks) }
            </div>
        </>
    );
};

export default ProfileComponent;
