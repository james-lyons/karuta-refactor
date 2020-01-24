import { FC } from "react";

const styles = {
    deckBoardSection: {
        width: '40vw',
        height: '85vh',
        backgroundColor: '#fffAF1',
        border: '10px solid brown',
        borderRadius: '10px',
        overflowY: 'auto'
    },
    deckBoardTopPartDiv: {
        display: 'grid',
        width: '100%',
        gridTemplateColumns: '25% 50% 20%',
        marginBottom: '1rem'
    },
    deckBoardH1: {
        fontSize: '1.25rem',
        wordWrap: 'breakWord',
        margin: 0,
        padding: '1rem 1rem 0 1rem'
    },
    editDeckFormDiv: {
        width: '175px',
        marginLeft: '1.3rem'
    },
    deckBoardBtnsDiv: {
        marginTop: '1rem'
    },
    deckBoardBtn: {
        padding: '.5rem'
    },
    deckBoardContainerDiv: {
        marginTop: '1.5rem',
        height: '500px'
    },
    deckBoardDiv: {
        display: 'grid',
        height: '100%',
        gridTemplateColumns: '30% 30% 30%',
        backgroundColor: '#fffAF1',
        overflowY: 'auto'
    },
    deckCards: {
        backgroundColor: 'white',
        width: '90%',
        height: '200px',
        margin: '1rem',
        padding: '3rem 1rem',
        border: '5px solid brown',
        textAlign: 'center',
        wordWrap: 'break-word',
        overflowY: 'auto'
    },
    deckCardTextH1: {
        fontSize: '1.5rem'
    }
};

interface Props {
    onEditInputChange: FC,
    onDeckDelete: FC,
    onDeckEdit: FC,
    showCards: FC,
    description: string,
    title: string,
    edit_title: string,
    edit_description: string,
    deck_cards: object,
    deck_edit_display: string,
    showDeckEditButton: FC,
};

export {
    styles,
    Props
};
