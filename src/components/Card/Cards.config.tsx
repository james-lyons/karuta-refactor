const styles = {
    playGameCards: {
        height: '80%',
        width: '60%',
        margin: '1em',
        padding: '1em',
        backgroundColor: '#fffAF1',
        border: '1px solid black',
        overflowY: 'auto'
    },
    deckCardTextH1: {
        fontSize: '1em'
    }
};

interface Props {
    shuffled_deck: Function,
    clickedCard: Function
};

export {
    styles,
    Props
}