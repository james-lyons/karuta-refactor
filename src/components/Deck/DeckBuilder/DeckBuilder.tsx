import React from 'react';
import { styles, Props } from './deckBuilder.config';

const DeckBuilder: React.SFC<Props> = ({
    onInputChange,
    onDeckSubmit,
    onCardSubmit,
    title,
    description,
    card_text
}) => {

    return (
        <section style={ styles.deckBuilderSection }>
            <div style={ styles.deckBuilder }>
                <form onSubmit={ onDeckSubmit }>
                    <input 
                        onChange={ onInputChange }
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Rap Deck"
                        value={ title }
                    />
                    <br />
                    <input 
                        onChange={ onInputChange }
                        type="text"
                        id="description"
                        name="description"
                        placeholder="This is my rap deck..."
                        value={ description }
                    />
                    <br />
                    <button type="submit" id="add-deck" style={ styles.deckBtn }>
                        Add Deck
                    </button>
                </form>
            </div>
            <div>
                {/* <CardBuilder
                    onInputChange = { onInputChange }
                    onCardSubmit = { onCardSubmit }
                    card_text = { card_text }
                /> */}
            </div>
        </section>
    );
};

export default DeckBuilder;
