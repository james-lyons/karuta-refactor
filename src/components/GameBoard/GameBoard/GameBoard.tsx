import React from 'react';
import { styles, Props } from './GameBoard.config';
import Cards from '../../Card/Cards';

const GameBoard: React.SFC<Props>  = ({ handleGameStart, shuffled_deck, clickedCard }) => {
    return (
        <div style={ styles.gameBoard }>
            <div style={ styles.gameBoardGameAreaDiv }>
                <div style={ styles.playGameTopDiv }>
                    <button style={ styles.startGameBtn }
                        onClick={ handleGameStart }
                    >
                        Start Game
                    </button>
                </div>
                <div style={ styles.gameBoardGameAreaDiv }>
                    <Cards
                        shuffled_deck={ shuffled_deck }
                        clickedCard={ clickedCard }
                    />
                </div>
            </div>
        </div>
    );
};

export default GameBoard;