import React from 'react';
import { styles, State } from './deck.config';
import DeckBoard from '../../components/Deck/DeckBoard/DeckBoard';
import DeckBuilder from '../../components/Deck/DeckBuilder/DeckBuilder';
import API_URL from '../../constants';

class Deck extends React.PureComponent<{}, State> {
    state: State = {
        title: "",
        description: "",
        card_text: "",
        edit_title: "",
        edit_description: "",
        edit_card_text: "",
        deck_id: "",
        card_id: "",
        cards: [],
        decks: [],
        deck_cards: [],
        deck_edit_display: 'none',
        card_edit_display: 'none',
        errors: null
    };

    private onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private onEditInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private onDeckSubmit = async (event) => {
        event.preventDefault();
        const { title, description, cards } = this.state;
        const deck = { title, description, cards }

        try {
            let res = await fetch(`${ API_URL }/deck`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(deck)
            });

            let response = await res.json();

            this.setState({
                deck_id: response.data._id
            });

        } catch (err) {
            this.setState({
                errors: err
            });
        };
    };

    private onDeckEdit = async (event) => {
        event.preventDefault();
        const { edit_title, edit_description } = this.state;
        const cards = this.state.deck_cards
        let edittedDeck = { title: edit_title, description: edit_description, cards: cards }

        try {
            let res = await fetch(`${ API_URL }/deck/${ this.state.deck_id }`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(edittedDeck)
            });

            let data = await res.json();

            await this.setState({
                edit_title: edit_title,
                edit_description: edit_description,
                cards: cards
            });

        } catch(err) {
            this.setState({
                errors: err
            });
        };
    };

    private onDeckDelete = async () => {
        const { deck_id } = this.state;

        try {
            let res = await fetch(`${ API_URL }/deck/${ deck_id }`, {
                method: 'DELETE',
                credentials: 'include',
            });

            await this.setState({
                title: '',
                description: ''
            });

        } catch(err) {
            this.setState({
                errors: err
            });
        };
    };

    private onCardSubmit = async (event) => {
        event.preventDefault();
        const { card_text, deck_id } = this.state;

        try {
            let res = await fetch(`${ API_URL }/deck/${ deck_id }`, {
                method: 'POST',
                credentials: 'include',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({ card_text })
            })
            let data = res.json();

            this.setState({
                card_id: data.data._id
            });

            let res2 = await fetch(`${ API_URL }/deck/${ deck_id }/card`, {
                credentials: 'include'
            })
            
            let data2 = res2.json();

            this.setState({
                deck_cards: data.data
            })

        } catch(err) {
            this.setState({
                errors: err
            });
        };
    };

    private onCardEdit = async (event) => {
        event.preventDefault();
        const { edit_card_text, deck_id } = this.state;
        const card_id = event.target.id;

        try {
            let res = await fetch(`${ API_URL }/deck/${ deck_id }/card/${ card_id }`, {
                method: 'PUT',
                credentials: 'include',
                headers: { 'Content-type:': 'application/json' },
                body: JSON.stringify({ card_text: edit_card_text })
            })
    
            let data = await res.json();
    
            await this.setState({
                edit_card_text: edit_card_text
            })
    
            let res2 = await fetch(`${ API_URL }/deck/${ deck_id }/card`, {
                credentials: 'include'
            });
    
            let data2 = await res2.json();

            this.setState({
                deck_cards: data2.data,
            })

        } catch(err) {
            this.setState({
                errors: err
            });
        };
    };

    private onCardDelete = async (card) => {
        const { deck_id } = this.state;

        try {

            await fetch(`${ API_URL }/deck/${ deck_id }/card/${ card._id }`, {
                method: 'DELETE',
                credentials: 'include'
            });
            
            let res = await fetch(`${ API_URL }/deck/${ deck_id }/card`, {
                credentials: 'include'
            });

            let data = res.json();

            this.setState({
                deck_cards: data.data
            });
            
        } catch(err) {
            this.setState({
                errors: err
            });
        };
    };

    public showDeckEditButton = () => {
        this.state.deck_edit_display === "none" ?
        this.setState({ deck_edit_display: '' }) :
        this.setState({ deck_edit_display:'none' })
    };
    
    public showCardEditButton = () => {
        this.state.card_edit_display === "none" ?
        this.setState({ card_edit_display: '' }) :
        this.setState({ card_edit_display:'none' })
    };

    public showCards = (cards) => {
        const cardArr = cards.map((card) =>
        <div id={ card._id } style={ styles.deckCards }>
            <h1 style={ styles.deckCardTextH1 }>{ card.card_text }</h1>
            <div style={{ display: this.state.card_edit_display }}>
                <form
                    id={ card._id }
                    onSubmit={ () => this.onCardEdit(event) }
                    style={ styles.cardEditForm }
                >
                    <input 
                            onChange={ this.onEditInputChange }
                            type="text"
                            id="edit_card_text"
                            name="edit_card_text"
                            placeholder="Rap Deck"
                            value={ this.state.edit_card_text }
                    />
                    <button type="submit" style={ styles.editCardFormBtn }>
                        Edit
                    </button>
                </form>
            </div>
            <div style={ styles.editCardFormButtonsDiv }>
                <button onClick={ () => this.showCardEditButton() } style={ styles.editCardFormBtn }>
                    Edit
                </button>
                <button onClick={ () => this.onCardDelete(card) } style={ styles.editCardFormBtn }>
                    Edit
                </button>
            </div>
        </div>
        );
        return cardArr;
    };

    public render() {
        const {
            title,
            description,
            card_text,
            edit_title,
            deck_cards,
            deck_edit_display,
            edit_description
        } = this.state;

        const {
            onInputChange,
            onDeckSubmit,
            onCardSubmit,
            onDeckEdit,
            showCards,
            onDeckDelete,
            onEditInputChange,
            showDeckEditButton
        } = this;

        return (
            <div style={ styles.body }>
                <div style={ styles.deckContainerDiv }>
                    <div style={ styles.deckBuilderDiv }>
                        <DeckBuilder 
                            title = { title }
                            description = { description }
                            card_text = { card_text }
                            onInputChange = { onInputChange }
                            onDeckSubmit = { onDeckSubmit }
                            onCardSubmit = { onCardSubmit }
                        />
                    </div>
                    <div style={ styles.deckBoardDiv }>
                        <DeckBoard
                            title = { title }
                            edit_title = { edit_title }
                            deck_cards = { deck_cards }
                            description = { description }
                            deck_edit_display = { deck_edit_display }
                            edit_description = { edit_description }
                            onDeckEdit = { onDeckEdit }
                            showCards = { showCards }
                            onDeckDelete = { onDeckDelete }
                            onEditInputChange = { onEditInputChange }
                            showDeckEditButton = { showDeckEditButton }
                        />
                    </div>
                </div>
            </div>
        );
    };
};

export default Deck;