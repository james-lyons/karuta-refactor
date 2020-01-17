const styles = {
    navBar: {
        display: 'grid',
        gridTemplateColumns: '30% 70%',
        justifyContent: 'end',
        backgroundColor: 'rgb(70, 90, 70)',
        padding: '.5em',
    },
    rightMenu: {
        justifySelf: 'end'
    },
    logout: {
        cursor: 'pointer',
        display: 'inline-block',
        minHeight: '1em',
        outline: 0,
        border: 'none',
        verticalAlign: 'baseline',
        background: '#e0e1e2 none',
        color: 'rgba(0,0,0,.6)',
        fontFamily: 'Lato,"Helvetica Neue",Arial,Helvetica,sans-serif',
        margin: '0 .25em 0 0',
        padding: '.78571429em 1.5em .78571429em',
        textTransform: 'none',
        textShadow: 'none',
        fontWeight: '700',
        lineHeight: '1em',
        fontStyle: 'normal',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '.28571429rem',
    },
    navLink: {
        cursor: 'pointer',
        display: 'inline-block',
        minHeight: '1em',
        outline: 0,
        border: 'none',
        verticalAlign: 'baseline',
        background: '#e0e1e2 none',
        color: 'rgba(0,0,0,.6)',
        fontFamily: 'Lato,"Helvetica Neue",Arial,Helvetica,sans-serif',
        margin: '0 .3em 0 0',
        padding: '.78571429em 1.5em .78571429em',
        textTransform: 'none',
        textShadow: 'none',
        fontWeight: '700',
        lineHeight: '1em',
        fontStyle: 'normal',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '.3rem',
    }
};

interface Props {
    currentUser: string,
    setCurrentUser: (userId: string) => void,
    logout: (userId: string) => void
};

export {
    styles,
    Props
};
