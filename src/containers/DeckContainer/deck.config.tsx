const styles = {
    body: {
        backgroundImage: 'url(https://66.media.tumblr.com/d8ee740f64f90ccb5c909f00e1434941/ad5eba72995ccbaa-4d/s1280x1920/906f1df8790b8dcec4bb4577343fb23755c7eb11.png)',
        backgroundSize: 'cover',
        position: 'fixed',
        height: '93vh',
        width: '100vw'
    },
    deckContainerDiv: {
        display: 'inline-grid',
        gridTemplateColumns: '40vw 60vw',
        gridTemplateRows: '100%'
    },
    deckBuilderDiv: {
        justifySelf: 'right'
    },
    deckBoardDiv: {
        justifySelf: 'center'
    },
    cardEditForm: {
        overflowY: 'auto'
    },
    editCardText: {
        width: '90px'
    },
    editCardFormButtonsDiv: {
        display: 'grid',
        gridTemplateColumns: '45% 45%',
        gridTemplateRows: '2rem',
        fontSize: '.7rem',
        margin: 0,
        padding: 0
    },
    editCardFormBtn: {
        justifySelf: 'center'
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

interface State {
    title: string,
    description: string,
    card_text: string,
    edit_title: string,
    edit_description: string,
    edit_card_text: string,
    deck_id: string,
    card_id: string,
    cards: Array<object>,
    decks: Array<object>,
    deck_cards: Array<object>,
    deck_edit_display: string,
    card_edit_display: string,
    errors: null | any
};

export {
    styles,
    State
};
