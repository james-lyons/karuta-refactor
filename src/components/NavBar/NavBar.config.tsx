const styles = {
    navBar: {
        display: 'grid',
        gridTemplateColumns: '30% 70%',
        justifyContent: 'end',
        backgroundColor: 'rgb(70, 90, 70)',
        padding: '.5rem',
        height: '7vh'
    },
    rightMenu: {
        justifySelf: 'end'
    },
    navLink: {
        cursor: 'pointer',
        display: 'inline-block',
        minHeight: '1rem',
        outline: 0,
        border: 'none',
        verticalAlign: 'baseline',
        background: '#e0e1e2 none',
        color: 'rgba(0,0,0,.6)',
        margin: '0 .3rem 0 0',
        padding: '.8rem 1.5rem .8rem',
        textTransform: 'none',
        textShadow: 'none',
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: '1rem',
        fontFamily: 'Lato,"Helvetica Neue",Arial,Helvetica,sans-serif',
        lineHeight: '.8rem',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '.3rem'
    }
};

interface Props {
    currentUser: string,
    setCurrentUser: (userId: string) => void,
    logout: (userId: string) => void,
    registerModalSwitch: () => void,
    loginModalSwitch: () => void,
};

export {
    styles,
    Props
};
