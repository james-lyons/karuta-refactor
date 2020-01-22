import React from 'react';
import styles from './Home.config';

const Home = ({ showLoginModal, showRegisterModal }) => {
    return (
        // <div style={styles.modalShow}>
            <div style={ styles.body }>
                <div style={ styles.video }>
                    <div style={ styles.videoDiv }>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Sx2UqSxAPfk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="karuta-video" allowFullScreen></iframe>
                    </div>
                </div>
                <section style={ styles.articleSection }>
                    <article style={ styles.articles }>
                        <h1 style={ styles.articleText }>1st ‘karuta’ world competition held at ‘holy site’ of game in Otsu</h1>
                        <p>OTSU--After hundreds of years, the traditional Japanese card game of "karuta" has gone global, with a world competition held here for the first time on Nov. 3 with 10 teams participating, including seven from abroad. <a style={{ textDecoration: 'none' }} href="http://www.asahi.com/ajw/articles/AJ201811040026.html"><span style={{ color:'goldenrod' }}> Continue Reading...</span></a></p>
                    </article>
                    <article style={ styles.articles }>
                        <h1 style={ styles.articleText }>Introducing "Competition Karuta" that became a hot topic in the movie "Chihayafuru"!</h1>
                        <p>A girl's manga "Chihayufuru", written by manga writer Yuki Suetsugu, is based on a theme of "Competition Karuta". It was also animated and filmed into a movie, and Suzu Hirose who starred the movie has become a hot topic. <a style={{ textDecoration: 'none' }} href="https://www.fun-japan.jp/intl/articles/9561"><span style={{ color:'goldenrod' }}> Continue Reading...</span></a></p>
                    </article>
                    <article style={ styles.articles }>
                        <h1 style={ styles.articleText }>Karuta: Gotta Catch 'Em All! An old Japanese card game brought into the light</h1>
                        <p>Nintendo has been a household name in the world over for the last 30 years, and their Pokemon franchise took the world by storm in the 90s. But did you know that the multimedia Nintendo empire started out as a humble karuta company in 1889? <a style={{ textDecoration: 'none' }} href="https://www.tofugu.com/japan/karuta-japanese-cards/"><span style={{ color:'goldenrod' }}> Continue Reading...</span></a></p>
                    </article>
                </section>
            </div>
        // </div>
    );
};

export default Home;
