import React from 'react';
import { styles, Props } from './deckBoard.config';

const DeckBoard: React.SFC<Props> = ({
    onEditInputChange,
    onDeckDelete,
    onDeckEdit,
    showCards,
    description,
    title,
    edit_title,
    edit_description,
    deck_cards,
    deck_edit_display,
    showDeckEditButton,
}) => {
    return (
        <section style={ styles.deckBoardSection }>
            <div style={ styles.deckBoardTopPartDiv }>
                <h1 style={ styles.deckBoardH1 }>Title: { title }</h1>
                <h1 style={ styles.deckBoardH1 }>Description: { description }</h1>
                <div style={ styles.deckBoardBtnsDiv }>
                    <button onClick={ () => showDeckEditButton() } style={ styles.deckBoardBtn }>
                        Edit Deck
                    </button>
                    <button onClick={ () => onDeckDelete() } style={ styles.deckBoardBtn }>
                        Delete Deck
                    </button>
                </div>
            </div>
            <div style={ styles.editDeckFormDiv, { display: deck_edit_display }}>
                <form onSubmit={ () => ondeckEdit }>
                    <input 
                        onChange={ () => onEditInputChange() }
                        type="text"
                        id="edit_title"
                        name="edit_title"
                        placeholder="Rap Deck"
                        value={ edit_title }
                    />
                    <br />
                    <input 
                        onChange={ () => onEditInputChange() }
                        type="text"
                        id="edit_description"
                        name="edit_description"
                        placeholder="This is my rap deck..."
                        value={ edit_description }
                    />
                    <br />
                </form>
            </div>
            <div style={ styles.deckBoardContainerDiv }>
                <div style={ styles.deckBoardDiv }>
                    { deck_cards && showCards(deck_cards) }
                </div>
            </div>
        </section>
    );
};

export default DeckBoard;
