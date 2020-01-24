const styles = {
    deckBuilderSection: {
        textAlign: 'center',
        backgroundColor: 'brown',
        padding: '.7rem',
        borderRadius: '10px'
    },
    deckBuilder: {
        backgroundColor: '#fffAF1',
        padding: '.75rem'
    },
    deckBtn: {
        marginTop: '1rem',
        marginBottom: 0
    }
};

interface Props {
    onInputChange: FC,
    onDeckSubmit: FC,
    onCardSubmit: FC,
    title: string,
    description: string,
    card_text: string
}

export {
    styles,
    Props
};
