import React from 'react';
import { styles, Props } from './DeckBoard.config';


const DeckBoard: React.SFC<Props>  = ({ decks, selectDeck }) => {
    const mapper = () => {
        const deckArr = decks.map((deck) =>
                        <div 
                            onClick={ selectDeck }
                            id={ deck._id }
                            style={ styles.gameDecksDiv }
                        >
                                <h1 style={ styles.gameDecksDivH1 }>
                                    Title: { deck.title }
                                </h1>
                                <h1 style={ styles.gameDecksDivH1 }>
                                    Description: { deck.description }
                                </h1>
                        </div>
        );
        return deckArr
    };    
    return (
        <section style={ styles.gameDecksSection }>
            <div style={ styles.gameDecksSectionDiv }>
                { decks && mapper(decks) }
            </div>
        </section>
    );
};

export default DeckBoard;