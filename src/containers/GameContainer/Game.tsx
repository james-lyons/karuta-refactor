import React from 'react';
import { styles, State, Card, Deck } from './Game.config';
import GameBoard from '../../components/GameBoard/GameBoard/GameBoard';
import ScoreBoard from '../../components/GameBoard/ScoreBoard/ScoreBoard';
import DeckBoard from '../../components/GameBoard/DeckBoard/DeckBoard';
import API_URL from '../../constants';

class Game extends React.PureComponent<{}, State> {
    state: State = {
        timer: [5,4,3,2,1],
        score: 0,
        decks: [],
        cards: [],
        shuffled_deck: [],
        narrator_deck: [{ card_text: "Play a game..." }],
        deck_id: "",
        activated: '',
        error: null
    };

    public componentDidMount = async () => {
        try {
            const currentUser = localStorage.getItem('uid');
            const starterDeckResponse = await fetch(`${ API_URL }/deck/starter`,
                { credentials: 'include' })
            const starterDeck = await starterDeckResponse.json();

            this.setState({
                decks: [...this.state.decks, starterDeck.data]
            })

            if (currentUser) {
                const playerDeckResponse = await fetch(`${ API_URL }/deck/`,
                    { credentials: 'include' });

                const playerDeck = await playerDeckResponse.json();

                this.setState({
                    decks: [...this.state.decks, playerDeck]
                });
            };
            
        } catch (error) {
            this.setState({
                error: error.message
            });
        };
    };

    private selectDeck = (event: any) => {
        this.setState({
            deck_id: event.target.id
        });

        this.state.activated === "not-active" ?
        this.setState({ activated: "active" }) :
        this.setState({ activated: "not-active" })
    };

    public timer = () => {
        if (this.state.narrator_deck[0].card_text === "Lets play a game...") {
            return;
        };

        let newTimer = [ ...this.state.timer ];
        if (newTimer.length === 0) {
            newTimer = [5,4,3,2,1];
            this.setState({ timer: newTimer });
        };

        setTimeout(() => {
            if (newTimer.length > 0) {
                newTimer.shift();
                this.setState({ timer: newTimer });
                this.timer();
            };
        }, 1000);
    };

    private shuffleDeck = (arr1: any) => {
        var ctr = arr1.length, temp, index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arr1[ctr];
            arr1[ctr] = arr1[index];
            arr1[index] = temp;
        };
        return arr1;
    };

    public clickedCard = (card: Card) => {
        let score = this.state.score;
        if (card._id === this.state.narrator_deck[0]._id ) {
            score = score + 1;
            this.setState({ 
                score: score,
            });
            card.visibility = "hidden"
        };
    };

    public playGame = (narrator_deck: Card) => {
        this.setState({
            narrator_deck: narrator_deck
        });

        setTimeout(() => {
            if (narrator_deck.length === 1) {
                this.setState({ narrator_deck: [{ card_text: "Lets play a game..." }]})
                return;

            } else if (0 < narrator_deck.length) {
                narrator_deck.shift();
                this.playGame(narrator_deck)
            };
        }, 5000);
    };

    private max18cards = (deck: Deck) => {
        if (deck.length > 18) {
            deck.pop();
            this.max18cards(deck);
        };
        return deck;
    };

    public handleGameStart = async () => {
        const { cards, decks, deck_id } = this.state;
        this.setState({ score: 0 })

        try {
            // const response = await fetch(`${ API_URL }/deck/${ deck_id }/card`,
            //     { credentials: 'include' });

            // const cardArr = await response.json();
            
            this.setState({
                cards: decks[deck_id]
            });

            console.log(1)

            const narrator = this.shuffleDeck([ ...cards ]);
            if (narrator.length > 18) {
                this.max18cards(narrator);
            };

            this.setState({ narrator_deck: narrator });
            const shuffled_deck = this.shuffleDeck([ ...narrator ]);
            this.setState({
                narrator_deck: narrator,
                shuffled_deck: shuffled_deck
            });

            this.playGame(narrator);
            this.timer();

        } catch (error) {
            this.setState({
                error: error.message
            });
            console.log(error)
        };
    };

    public render() {
        const { timer, score, narrator_deck, decks } = this.state;
        return (
            <div style={ styles.body }>
                <section>
                    <ScoreBoard
                        timer={ timer }
                        score={ score }
                        narrator_deck={ narrator_deck }
                    />
                    <GameBoard
                        handleGameStart={ this.handleGameStart }
                        shuffled_deck={ this.state.shuffled_deck }
                        clickedCard={ this.clickedCard }
                    />
                </section>
                <section style={ styles.gameDeckAreaSection }>
                    <DeckBoard
                        decks={ decks }
                        selectDeck={ this.selectDeck }
                    />
                </section>
            </div>
        );
    };
};

export default Game;