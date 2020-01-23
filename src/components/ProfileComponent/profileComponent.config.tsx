const styles = {
    profileSection: {
        display: 'grid',
        gridTemplateColumns: '20% 32% 20%',
        justifyContent: 'center',
        marginLeft: '1vw'
    },
    profileItems: {
        textAlign: 'center',
        padding: '2rem 6rem',
        border: '10px solid rgb(170, 90, 70)',
        backgroundColor: '#fffAF1'
    },
    profileImage: {
        width: '16rem',
        height: '16rem',
        padding: '2rem',
        borderRadius: '1rem',
        backgroundColor: 'black'
    },
    profileDecks: {
        display: 'grid',
        gridTemplateColumns: '20% 20% 20% 20% 20%',
        backgroundColor: 'rgb(140, 180, 120)',
        border: '10px solid black',
        borderRadius: '10px',
        width: '70vw',
        height: '50vh',
        margin: '2em auto',
        overflowY: 'auto',
        justifyContent: 'space-around'
    },
    profileDecksDiv: {
        width: '85%',
        height: '225px',
        backgroundColor: '#fffAF1',
        border: '10px solid rgb(170, 90, 70)',
        margin: '2rem',
        padding: '.8rem',
        wordWrap: 'break-word',
        overflowY: 'auto'
    },
    profileDeckH1: {
        fontSize: '2rem',
        textAlign: 'center'
    },
    profileDecksDivH1: {
        fontSize: '1.25rem',
        margin: '.87rem 0'
    },
    editProfileFormDiv: {
        paddingTop: '4rem',
        width: '80%',
        textAlign: 'center',
        justifySelf: 'center',
        border: '10px solid rgb(170, 90, 70)',
        backgroundColor: '#fffAF1'
    }
};

export default styles;