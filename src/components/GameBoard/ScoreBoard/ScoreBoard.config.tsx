const styles = {
    scoreBoardSection: {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        gridTemplateRows: '10vh',
        marginBottom: '1rem'
    },
    scoreBoardDiv: {
        width: '50%',
        backgroundColor: '#fffAF1',
        border: '8px solid rgb(140, 180, 120)',
        borderRadius: '10px',
        padding: '0 auto',
        marginRight: '1em',
        textAlign: 'center',
        justifySelf: 'end'
    },
    scoreBoardCurrentWordDiv: {
        width: '50%',
        height: '100%',
        backgroundColor: '#fffAF1',
        border: '8px solid rgb(140, 180, 120)',
        borderRadius: '10px',
        marginLeft: '1em',
        textAlign: 'center',
        justifySelf: 'start',
        overflowY: 'auto'
    },
    scoreBoardH1: {
        fontSize: '1.5em',
        margin: 0
    },
    scoreBoardCurrentWordH1: {
        fontSize: '1em',
        padding: '.3em'
    },
    scoreBoardH2: {
        fontSize: '1.25em',
        marginBlockStart: 0,
        marginBlockEnd: 0,
        padding: '.3em',
    },
    scoreBoardTimerAndScoreAreaDiv: {
        display: 'grid',
        gridTemplateColumns: '50% 50%'
    }
};

interface Props {
    timer: Array <number>,
    score: number,
    narrator_deck: Array <Deck>
};

interface Deck {
    card: any,
    title?: string,
    description?: string,
    _id?: string | number,
    length: any,
    shift: any;
    pop: any
};

export {
    styles,
    Props
};
