import React from 'react';
import { styles } from './deck.config';

class Deck extends React.PureComponent<{}> {
    render() {
        return (
            <div style={ styles.body }>
                Hello Deck
            </div>
        );
    };
};

export default Deck;