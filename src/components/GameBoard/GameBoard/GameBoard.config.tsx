const styles = { 
    gameBoard: {
        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTWWPSqxGe3QKDIPhZ1VSPCejN2VN1Kvhi8GerYG8EJErXMBnm)',
        display: 'grid',
        gridTemplateColumns: '100%',
        justifyContent: 'center',
        padding: '1em',
        height: '70vh',
        width: '80vw',
        margin: '0 auto'
    },
    gameBoardGameAreaDiv: {
        display: 'grid',
        gridTemplateColumns: '16.5% 16.5% 16.5% 16.5% 16.5% 16.5%',
        gridTemplateRows: '30% 30% 30%',
        justifySelf: 'center',
        height: '60vh',
        overflowY: 'auto'
    },
    playGameTopDiv: {
        display: 'grid',
        justifyContent: 'center',
    },
    startGameBtn: {
        width: '100px',
        padding: '.5em',
        backgroundColor: 'cyan',
        border: '1px solid black'
    }
};

interface Props {
    handleGameStart: Function,
    shuffled_deck: Function,
    clickedCard: Function
};

export { 
    styles,
    Props
};
