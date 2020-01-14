const styles = {
    body: {
        backgroundImage: 'url(https://66.media.tumblr.com/d8ee740f64f90ccb5c909f00e1434941/ad5eba72995ccbaa-4d/s1280x1920/906f1df8790b8dcec4bb4577343fb23755c7eb11.png)',
        backgroundSize: 'cover',
        height: '93vh',
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: '85% 15%'
    },
    gameDeckAreaSection: {
        backgroundColor: 'rgb(140, 180, 120)',
        padding: '2em 1em 0 1em',
        height: '650px',
        borderRadius: '10px',
        overflowY: 'auto'
    }
};

interface State {
    timer: Array<number>,
    score: number,
    decks: any,
    cards: any,
    shuffled_deck: any,
    narrator_deck: any,
    deck_id: string,
    activated: string,
    error: string | null
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

interface Card {
    card_text: string,
    clicked?: boolean,
    visibility?: string,
    _id?: string | number,
    length: any,
    shift: any;
    pop: any
};

export {
    styles,
    State,
    Card,
    Deck
};
