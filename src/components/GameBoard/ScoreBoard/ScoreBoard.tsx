import React from 'react';
import { styles } from './ScoreBoard.config';

interface Props {
    timer: Array <number>,
    score: number,
    narrator_deck: Array <Object>
};

const ScoreBoard: React.SFC<Props>  = ({ timer, score, narrator_deck }) => {
    return (
        <>
            <section style={ styles.scoreBoardSection }>
                <div style={ styles.scoreBoardDiv }>
                    <h1 style={ styles.scoreBoardH1 }>ScoreBoard</h1>
                    <div style={ styles.scoreBoardTimerAndScoreAreaDiv }>
                        <h2 style={ styles.scoreBoardH2 }>timer: { timer.length }</h2>
                        <h2 style={ styles.scoreBoardH2 }>score: { score }</h2>
                    </div>
                </div>
                <div style={ styles.scoreBoardCurrentWordDiv }>
                    <h1 style={ styles.scoreBoardCurrentWordH1 }>
                        { narrator_deck[0].card_text }
                    </h1>
                </div>
            </section>
        </>
    );
};

export default ScoreBoard;