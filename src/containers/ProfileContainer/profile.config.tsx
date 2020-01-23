const styles = {
    body: {
        backgroundImage: 'url(https://66.media.tumblr.com/d8ee740f64f90ccb5c909f00e1434941/ad5eba72995ccbaa-4d/s1280x1920/906f1df8790b8dcec4bb4577343fb23755c7eb11.png)',
        backgroundSize: 'cover',
        position: 'fixed',
        height: '93vh',
        width: '100vw'
    },
};

interface State {
    user: Array<string>,
    edit_username: string,
    edit_email: string,
    edit_profile_image: string,
    profile_edit_display: string,
    errors: null | Array<object>
};

export {
    styles,
    State
};
