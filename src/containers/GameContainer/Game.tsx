import React from 'react';
import { styles } from './Game.config';
import GameBoard from '../../components/GameBoard/GameBoard/GameBoard';

class Game extends React.PureComponent {
    render() {
        return (
            <div style={ styles.body }>
                <GameBoard />
            </div>
        );
    };
};

export default Game;