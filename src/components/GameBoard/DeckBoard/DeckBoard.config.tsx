const styles = {
    gameDecksDiv: {
        textAlign: 'center',
        height: '200px',
        margin: '1em 0',
        padding: '3em 1em 3em 1em',
        backgroundColor: '#fffAF1',
        border: '8px solid rgb(170, 90, 70)',
        overflowY: 'auto'
    },
    gameDecksDivH1: {
        fontSize: '.9em',
        margin: '.5em',
        padding: 0,
        wordWrap: 'break-word'
    },
    gameDecksSection: {
        backgroundColor: 'rgb(140, 180, 120)',
        padding: '2em 1em 0 1em',
        height: '650px',
        borderRadius: '10px',
        overflowY: 'auto'
    },
    gameDecksSectionDiv: {
        height: '600px',
        overflowY: 'auto'
    }
};

interface Props {
    decks: Array<Object>,
    selectDeck: Function
};

export {
    styles,
    Props
};
