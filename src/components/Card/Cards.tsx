import React from 'react';
import { styles, Props } from './Cards.config';

const Cards: React.SFC<Props> = ({ shuffled_deck, clickedCard }) => {

    const showCards = (shuffled_deck) => {
        const cardArr = shuffled_deck.map((card) =>
            <div 
                id={ card._id }
                style={ [styles.playGameCards, { visibility: card.visibility }]}
                onClick={ ()=> clickedCard(card) }
                key={ card._id }
            >
                <h1 style={ styles.deckCardTextH1 }>{ card.card_text }</h1>
            </div>
        );
        return cardArr
    };

    return (
        <>
            { shuffled_deck && showCards(shuffled_deck) }
        </>
    );
};

export default Cards;
